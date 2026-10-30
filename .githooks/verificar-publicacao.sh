#!/bin/bash
# Trava de segurança do site Fortis (GitHub Pages). Uso: verificar-publicacao.sh index|head
# Bloqueia commit/push que tiraria o site do ar ou publicaria arquivos fora da lista permitida.
modo="${1:-index}"
erros=()
if [ "$modo" = "index" ]; then lista() { git ls-files -s; }; ler() { git show ":$1" 2>/dev/null; }
else lista() { git ls-tree -r HEAD | awk '{print $1" "$3" 0\t"$4}'; }; ler() { git show "HEAD:$1" 2>/dev/null; }; fi

modo_de() { lista | awk -v p="$1" -F'\t' '$2==p {split($1,a," "); print a[1]}' | head -1; }
for f in CNAME index.html central/index.html catalogo/index.html portfolio/index.html; do
  m=$(modo_de "$f")
  [ -z "$m" ] && erros+=("Arquivo do site ausente do Git: $f (o site sairia do ar)")
  [ "$m" = "120000" ] && erros+=("$f virou ATALHO; o GitHub Pages não segue atalhos")
done
[ "$(ler CNAME | tr -d '[:space:]')" = "central.fortisepis.com.br" ] || erros+=("CNAME diferente de central.fortisepis.com.br (domínio sairia do ar)")
ler index.html | grep -q "central/" || erros+=("index.html da raiz não redireciona para central/")
n=$(lista | awk '$1=="120000"' | wc -l | tr -d ' ')
[ "$n" != "0" ] && erros+=("$n atalho(s) (symlink) entrariam no repositório público; atalhos de organização não podem ser enviados")
for p in central/index.html catalogo/index.html portfolio/index.html; do
  ler "$p" | grep -qE 'href="\.\./(Catalogo-online|Central-link-na-bio|Portfolio)/|SITE-E-LOJA|05-SITE-E-LOJA' && erros+=("$p aponta para nomes de pasta organizados (SITE-E-LOJA); use ../central/, ../catalogo/, ../portfolio/")
done

PERMITIDO='^(CNAME|index\.html|\.gitignore|CLAUDE\.md|AGENTS\.md|central/|catalogo/|portfolio/|\.githooks/)'
if [ "$modo" = "index" ]; then base="--cached"; else
  r=$(git rev-parse -q --verify origin/main) && base="$r HEAD" || base="HEAD"; fi
fora=$(git diff $base --name-status --no-renames | awk '$1!="D"{ $1=""; sub(/^ /,""); print }' | grep -vE "$PERMITIDO")
[ -n "$fora" ] && erros+=("Arquivos fora da lista do site seriam publicados (repositório PÚBLICO):"$'\n'"$(echo "$fora" | head -8 | sed 's/^/     /')")

if [ ${#erros[@]} -gt 0 ]; then
  echo "" >&2; echo "⛔ FORTIS: bloqueado para proteger o site e os dados privados." >&2
  for e in "${erros[@]}"; do echo "  - $e" >&2; done
  echo "  Para desfazer o que foi preparado:  git reset   (não apaga nenhum arquivo)" >&2
  echo "  Só avance se tiver certeza:  git commit --no-verify / git push --no-verify" >&2
  exit 1
fi

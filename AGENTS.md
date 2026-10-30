# FORTIS — instruções para Codex e outros agentes

Leia `CLAUDE.md` (mesma pasta): é a fonte das regras do projeto. Resumo do que não pode quebrar:

## Central Fortis e páginas publicadas
- Repositório: `Marchikati/fortis-core`, branch `main`. GitHub Pages publica a raiz em `https://central.fortisepis.com.br` (`CNAME`).
- Trabalhar na Central: editar `central/index.html` (pasta real). Mesmo arquivo pelo atalho `SITE-E-LOJA/Central-link-na-bio/`.
- Catálogo: `catalogo/`. Portfólio: `portfolio/`. Redirecionamento da raiz: `index.html` → `central/`.
- NÃO renomear, mover nem transformar em atalho: `central/`, `catalogo/`, `portfolio/`, `CNAME`, `index.html`.
- Links entre as páginas usam `../central/`, `../catalogo/`, `../portfolio/`.
- Não fazer commit/push sem a usuária pedir. Antes de push: `git ls-files -s central catalogo portfolio CNAME index.html` não pode mostrar modo 120000 (atalho).
- Pastas organizadas por assunto (`SITE-E-LOJA/`, `REDES-SOCIAIS/`, etc.) e prefixos `01-` a `99-` são atalhos/organização local; não são publicadas.

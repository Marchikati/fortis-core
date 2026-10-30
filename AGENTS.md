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

## Redes sociais (Instagram @fortisepis) — onde salvar
- Existe um único lugar: `REDES-SOCIAIS/Programacao/AAAA-MM/Semana DD a DD/DD DIA - HHh Tipo título/`. Reel, carrossel, estático e story: cada um na pasta do seu dia, sem separar por formato.
- Dentro da pasta do dia: arquivos finais e `LEGENDA.txt` no topo; tudo que foi usado para criar (post.json, fotos, projeto Remotion com src/public/originais/revisão, roteiro) em `_trabalho/`. O vídeo final fica no topo.
- Não existem mais `Conteudos/` nem `Oficina/`. Não recriar. Publicado → mover a pasta do dia para `postados/` da semana.
- Detalhes: `REDES-SOCIAIS/Programacao/LEIA-ME.txt`.
- A usuária sempre informa a data de cada reel. Ele fica na semana e no dia dessa data, DENTRO da pasta do carrossel/post programado para aquele dia, em subpasta própria ("DD DIA - HHh Reel título") com vídeo, `LEGENDA.txt` e `_trabalho`. Dia só com reel: a pasta do dia é do reel. Sem data no pedido: perguntar antes de salvar.
- Todo conteúdo tem `LEGENDA.txt` no topo da pasta do dia. Sem legenda não está pronto.

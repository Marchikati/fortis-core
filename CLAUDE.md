# FORTIS — projeto de trabalho

Raiz oficial: `/Users/katiucemarchi/Desktop/FORTIS`.
Organização física por assunto realizada em 29/10/2026, a pedido da usuária. Os caminhos antigos são compatibilidade; novas entregas devem usar esta estrutura.

## Antes de trabalhar

1. Leia `STATUS.md` para o estado da produção.
2. Leia `IDENTIDADE-VISUAL/Guia-da-marca/Marca-em-uso.md` para a marca e o padrão visual atual.
3. Conteúdo de redes sociais usa `.claude/skills/fortis-social/SKILL.md`; copy de produto usa a skill fortis-copy instalada. As ferramentas existentes foram preservadas.
4. Consulte o histórico somente para uma necessidade específica. Não carregue todos os guias antigos como regras vigentes.

## Onde salvar

| Assunto | Local |
|---|---|
| Logos | `IDENTIDADE-VISUAL/Logos/` (somente arquivos de logo) |
| Símbolos | `IDENTIDADE-VISUAL/Logos/`, com nomes começando por Simbolo |
| Guia, cores, fontes e prancha | `IDENTIDADE-VISUAL/Guia-da-marca/` |
| Fotos da equipe e loja | `IDENTIDADE-VISUAL/Fotos-da-equipe-e-loja/` |
| Figurinhas, selos e destaques | `IDENTIDADE-VISUAL/Elementos/Figurinhas/`, `Selos/` e `Destaques/` |
| Mascote, personagens e vinhetas | `Mascote-Fortao/`, `Personagens/` e `Vinhetas/` dentro da Identidade |
| Calendários e roteiros de redes sociais | `REDES-SOCIAIS/Planejamento/` |
| Peças novas | `REDES-SOCIAIS/Conteudos/AAAA-MM-DD-assunto/` |
| Entregas prontas e publicadas | `REDES-SOCIAIS/Programacao/AAAA-MM/` |
| Vídeos e motion existentes | `REDES-SOCIAIS/Projetos-de-video/` e `Projetos-de-motion/` |
| Fotos oficiais e referências de produtos | `PRODUTOS/` |
| Catálogos, apresentações, panfletos e impressos | `COMERCIAL-E-IMPRESSOS/`, na subpasta do formato |
| Site, catálogo online, central, banners e auditorias | `SITE-E-LOJA/` (as 3 páginas publicadas ficam em `central/`, `catalogo/` e `portfolio/` na raiz; ver “Páginas publicadas”) |
| Notas, atas, equipe e documentos cadastrais | `ADMINISTRATIVO/` |
| Estratégia, pesquisas e campanhas | `PLANEJAMENTO-E-PESQUISAS/` |
| CRM, protótipos e aprendizados técnicos | `SISTEMAS/` |
| Versões anteriores e cópias identificadas | `HISTORICO/`, por assunto e motivo |
| Inventários e registros de organização | `ORGANIZACAO/` |

A usuária pediu uma estrutura simples: arquivos diretamente na pasta do assunto. Não criar pastas repetidas, divisões pela origem (acervo/central/downloads), nem camadas ano/mês/dia sem necessidade. Antes de criar uma pasta ou copiar uma referência, conferir se já existe destino e exemplar adequado. Logos e símbolos têm um único acervo visível; usar `01-Logo-horizontal-branco.png` e `02-Logo-horizontal-preto.png` como referências de uso. Dentro de projetos que realmente precisam de estrutura técnica, manter fontes e entregas identificadas. Preserve a estrutura interna de projetos existentes que dependem dela. Não invente aprovação: uma pasta chamada final não é prova suficiente. Não salvar posts, storyboards ou apresentações em Logos. Não criar novas centrais concorrentes, pastas soltas na Mesa ou depósitos chamados diversos/arquivos.

## Regras de conteúdo preservadas

- Produto real: conferir catálogo e foto oficial. Não inventar produtos.
- Feed 1080×1350; reels/stories 1080×1920.
- Não gerar a logo com IA: aplicar os arquivos oficiais. Preto em fundo claro; branco em fundo escuro.
- Seguir a voz, as cores, a tipografia e as restrições atualizadas no guia da marca.
- Usar “Siga @fortisepis” e “Central Fortis, link na bio”; CTA não deve soar como brinde.
- Mostrar peças à usuária e obter aprovação conforme o fluxo de produção; não publicar sem autorização.
- Reportar erros de ferramentas com clareza; não declarar sucesso sem verificar.
- Registrar aprendizados em `SISTEMAS/Operacao/lessons.md`.

## Compatibilidade e pendência

O calendário de mesa de 2027 está fisicamente em `COMERCIAL-E-IMPRESSOS/Calendarios-de-mesa/2027/`. A usuária concluiu a edição e a transferência foi conferida em 29/10/2026. O caminho antigo é um atalho de compatibilidade. Fontes e imagens externas do gerador apontam para os destinos organizados; o PDF final foi preservado.

Há atalhos técnicos ocultos para caminhos antigos; não são destinos de novas entregas. Não remover essa compatibilidade automaticamente. As ferramentas de marca, site e vídeo foram ajustadas; a organização não publica alterações no site nem no CRM.

Nenhum arquivo deve ser apagado nesta organização. Cópias e versões antigas continuam preservadas. O relatório e os registros de verificação estão em `ORGANIZACAO/`.

## Arquivos técnicos na raiz

`CLAUDE.md`, `CNAME`, `index.html`, `package.json`, `package-lock.json` e `node_modules` permanecem na raiz por compatibilidade e estão ocultos no Finder. Não mudar seus nomes nem publicar a organização automaticamente. README e STATUS estão fisicamente em `SISTEMAS/Operacao`, com acessos antigos preservados. A usuária navega pelos assuntos e pelo painel, sem precisar lidar com esses arquivos.

## Estrutura antiga centralizada

A antiga pasta fortis-core está fisicamente em `.compat/fortis-core`, dentro desta FORTIS. `~/Desktop/fortis-core` é somente um atalho oculto para compatibilidade. Para novos trabalhos, abrir e usar `~/Desktop/FORTIS` e os nomes de assuntos sem prefixos numéricos. Não criar uma segunda pasta de trabalho na Mesa.

## Páginas publicadas (GitHub Pages) — NÃO QUEBRAR

O repositório `Marchikati/fortis-core` publica a branch `main`, pasta raiz `/`, em `https://central.fortisepis.com.br` (arquivo `CNAME`). As URLs dependem dos nomes das pastas da raiz.

| Página | Pasta REAL (editar aqui) | URL | Atalho organizado |
|---|---|---|---|
| Central Fortis (link na bio) | `central/` | `/central/` | `SITE-E-LOJA/Central-link-na-bio` |
| Catálogo online | `catalogo/` | `/catalogo/` | `SITE-E-LOJA/Catalogo-online` |
| Portfólio B2B | `portfolio/` | `/portfolio/` | `SITE-E-LOJA/Portfolio` |

Regras:
- Editar sempre por `central/`, `catalogo/`, `portfolio/` ou pelo atalho em `SITE-E-LOJA/` (é a mesma pasta). Os atalhos em `SITE-E-LOJA/` são relativos; não substituir por cópia.
- Nunca renomear nem transformar em atalho `central/`, `catalogo/`, `portfolio/`, `CNAME` e `index.html` (redireciona para `central/`). O Pages não segue atalhos: o site sairia do ar.
- Links entre as páginas usam as URLs públicas (`../catalogo/`, `../central/`, `../portfolio/`), nunca os nomes de `SITE-E-LOJA/`.
- Não publicar (commit/push) sem a usuária autorizar. Antes de qualquer push, rodar `git status` e conferir que nenhuma dessas pastas virou atalho (`git ls-files -s central catalogo portfolio CNAME index.html` não pode mostrar modo 120000).
- O repositório `fortis-flow` (CRM, Cloudflare Workers) é separado; esta organização não o afeta.

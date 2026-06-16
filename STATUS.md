# STATUS — Estado Vivo da Produção Fortis

> Ler no início de toda sessão. Atualizar a cada entrega. Substitui re-exploração do repo.

**Última atualização:** 2026-06-16

## ONDE ESTAMOS

- **Mês ativo:** Junho 2026 — "Um produto por semana" (`CONTEXT/calendarios/2026-06.md`)
- **Semana atual:** Semana 3 (15-21/06) — Óculos VVision 400 CA 42919, mas hoje (15/06) entregamos pauta atrasada do Protetor Auditivo (Semana 2)
- **Decisão da usuária (15/06):** reels postergados (pipeline de geração será reconfigurado). Foco total em fechar conteúdo de feed (estáticos/carrosséis/produto) a partir de hoje.
- **Pendentes da semana 2:** 08/06 Reel PROBLEMA ⬜ (postergado), 12/06 Namorados ⬜
- **Entregue hoje (15/06):** Carrossel 7 slides Protetor Auditivo CA 41949 (cobre pauta atrasada 10/06 SPECS) — aprovado pela usuária, salvo em `ASSETS/posts/2026-06/CARROSSEL/seg-15-protetor-specs-carrossel/` (HTML + 7 PNGs 1080x1350 + legenda.txt), capa em `CAPAS/seg-15-protetor-specs-capa.png`
- **Entregue 16/06:** EM USO Óculos VVision 300 CA 42718 — LOJA REAL fundo escuro — salvo em PRODUTOS/
- **Entregue 17/06:** Carrossel 5 slides SPECS VVision 300 CA 42718 — salvo em CARROSSEL/qua-17-oculos-vvision300-specs/
- **Entregue 18/06:** Engajamento tipográfico "certo x errado" óculos CA — TIPOGRÁFICO fundo navy — salvo em ESTÁTICOS/
- **Pendente semana 3:** 15/06 Reel ⬜ (postergado) · 20/06 Fundo branco ⬜
- **Último estilo:** 18/06 TIPOGRÁFICO fundo escuro
- **Último estilo visual:** 17/06 LOJA REAL + HTML overlay — fundo alternado (4× escuro, 1× claro)
- **Aprovados aguardando publicação:** 09/06 EM USO (v4, salvo em PRODUTOS/), 11/06 Copa, 13/06 Jogo 1, 14/06 Motivacional, 10/06 Carrossel Protetor (produzido 15/06)
- **Último estilo visual usado:** 15/06 LOJA REAL (nanobanana, 7 fotos cruas) + tipografia HTML overlay alternado claro/escuro
- **Último fundo:** alternado (carrossel 7 slides: escuro/escuro/claro/escuro/claro/escuro/escuro)

## TESTES DA MÁQUINA (13-15/06/2026) — pipeline completo

| Teste | Resultado |
|---|---|
| Animação do post 09/06 v4 (Higgsfield seedance, mão na chave) | ✅ movimento natural e plausível. ⚠️ usar `aspect_ratio:"9:16"` fixo, nunca "auto" (cortou em paisagem) |
| UGC produto real + pessoa falando (Super Max) | ✅ pessoa diversa + nanobanana com referência real + extend 9:16 + Higgsfield i2v = boca move natural, produto fiel. Avatar oficial NÃO suporta referência de produto (gera produto genérico + texto falso) — avatar reservado pra cena sem produto |
| Wrapper Gemini legado | 🔧 corrigido: roteamento/arquitetura-prompts/produto-real/reel/estatico agora apontam pra `nanobanana/server.js` (suporta referência+ratio); `gemini/server.js` é legado |
| Carrossel (3 slides teste, "Protetor auditivo: o que ninguém te conta") | ✅ mecânica completa validada em `tasks/scratch/carrossel/`: nanobanana LOJA REAL + resize 1080x1350 + HTML (Montserrat/Anton/Inter, overlay rgba, logo na faixa, sem numeração) + playwright render. Slides ok no anti-cara-de-ia |
| Stories — 3 ângulos diferentes (baixo/frontal/cima) | ✅ nanobanana SEM referência respeita "9:16" nativo (768x1408 → resize 1080x1920). Texto em zona segura (top 150px / bottom 250px) testado em HTML. `tasks/scratch/stories/` |
| Reel completo (ElevenLabs+Whisper+Remotion+virality) | ✅ mecânica provada pelo reel-protetor-08jun já renderizado (narração + legendas Whisper sincronizadas + Ken Burns + composição Remotion, 34s). ⚠️ `virality_predictor` só aceita até 16s — testar o GANCHO (`ffmpeg -t 16`). Resultado no reel-protetor-08jun: hook_score 28/100 (baixo) + estética pré-reforma (cinematic/bokeh/anatomia abstrata) → REPROVADO, reel inteiro precisa ser refeito no estilo novo antes de publicar |

⚠️ `/tmp` é limpo diariamente — artefatos de teste intermediários (vídeos/imagens) se perdem overnight. Resultados já aprovados ficam em `ASSETS/posts/`; vídeos Higgsfield ficam no CDN deles (URL no histórico) até expirar.

## MÁQUINA NOVA (12/06/2026) — status da construção

| Componente | Status |
|---|---|
| Fundação (anti-cara-de-ia, estetica-hibrida, roteamento, operacao) | ✅ |
| STATUS.md + tasks/lessons.md | ✅ |
| Wrapper gptimage (Codex CLI) | ✅ instalado; aguarda `codex login` da usuária |
| Skill Humanizer | ✅ v2.8.0 |
| Agentes (.claude/agents/) | ✅ 4 agentes |
| Workflows reescritos | ✅ + tipografia social (Montserrat/Anton/Inter) |
| CLAUDE.md novo | ✅ |
| Skill fortis-content (CRIAR+RADAR) | ✅ sincronizada com SKILLS/ |
| Calendário saneado (sem preço) | ✅ |
| Teste E2E A/B | 🔄 09/06 v3 (COMERCIAL com produto REAL do site via gpt-image-2 + referência, /tmp/fortis-e2e/post-final-0906-v3.png) aguardando aprovação. v1 cru reprovado pela usuária: lição registrada |
| gpt-image-2 | ✅ ATIVO (codex logado) + suporte a imagem de referência no wrapper |
| Regras novas 12/06 | ✅ produto-real.md (FUNDAMENTAL) · arquitetura-prompts.md · skills-da-maquina.md |
| Skills novas | ✅ carrossel-editorial · carrossel-curiosidade · ugc-rotina-real atualizada · humanizer |

## PENDÊNCIAS / DECISÕES ABERTAS

- Usuária precisa rodar `codex login` (conta ChatGPT Plus) para ativar gpt-image-2
- Confirmar criação de repo GitHub privado antes do push
- Pipeline de reels será reconfigurado (decisão 15/06) — reel-protetor-08jun reprovado (hook_score 28, estética antiga) precisa refazer do zero quando reels voltarem ao foco
- Próximo da fila de feed (15/06 em diante, sem reels): 16/06 Produto EM USO Óculos, 17/06 Carrossel SPECS Óculos, 18/06 Engajamento, 20/06 Fundo branco Óculos

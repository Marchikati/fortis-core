# STATUS — Estado Vivo da Produção Fortis

> Ler no início de toda sessão. Atualizar a cada entrega. Substitui re-exploração do repo.

**Última atualização:** 2026-06-16

## ONDE ESTAMOS

- **Mês ativo:** Junho 2026 — "Um produto por semana" (`CONTEXT/calendarios/2026-06.md`)
- **Semana atual:** Semana 4 (22-28/06) — Luva Nitrílica Sensinit CA 43585 (Handex)
- **Decisão da usuária (15/06):** reels postergados (pipeline de geração será reconfigurado). Foco total em fechar conteúdo de feed (estáticos/carrosséis/produto).
- **Pendentes da semana 2:** 08/06 Reel ⬜ (postergado), 12/06 Namorados ⬜
- **Semana 3 completa** (feed): 16/06 EM USO + 17/06 Carrossel SPECS + 18/06 Engajamento + 20/06 Fundo Branco — todos 🟡 Aprovado. Reel 15/06 ⬜ postergado.
- **Entregue 23/06:** EM USO Luva Nitrílica Sensinit CA 43585 — LOJA REAL fundo claro (lavoura soja) + overlay navy — salvo em PRODUTOS/ter-23-luva-sensinit-emuso.png — 🟡 Aprovado
- **Último estilo visual:** 23/06 LOJA REAL (nanobanana subject-ref mão enluvada) + HTML overlay navy — fundo claro
- **Último fundo:** claro (campo dia)
- **Aprovados aguardando publicação:** 09/06 EM USO, 11/06 Copa, 13/06 Jogo 1, 14/06 Motivacional, 10/06 Carrossel Protetor, 16/06 EM USO Óculos, 17/06 Carrossel SPECS Óculos, 18/06 Engajamento, 20/06 Fundo Branco Óculos, 21/06 Motivacional Inverno, 23/06 EM USO Luva Sensinit
- **Próximos (semana 4):** 24/06 Copa São João 🟡 (pré-aprovado), 25/06 Engajamento Luva ⬜, 26/06 Urgência B2B Luva ⬜, 27/06 Fundo Branco Luva ⬜, 28/06 Motivacional 🟡

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

PROJETO INOVA FORTIS EPIs

Você está trabalhando com a marca Inova Fortis EPIs.

---

FLUXO OBRIGATÓRIO AO INICIAR QUALQUER TAREFA DE CONTEÚDO

1. Identificar o tipo de conteúdo (estático / carrossel / reel / stories)
2. Ler APENAS o workflow correspondente em context/workflows/
3. Verificar o calendário do mês em context/calendarios/AAAA-MM.md
4. Verificar qual foi o último post (alternância claro/escuro)
5. Executar sem parar entre etapas

WORKFLOWS DISPONÍVEIS:
- Post estático → context/workflows/estatico.md
- Carrossel      → context/workflows/carrossel.md
- Reel / Vídeo  → context/workflows/reel.md
- Stories        → context/workflows/stories.md

Cada workflow é autocontido — tem marca, regras técnicas e checklist completos.
NÃO é necessário ler os arquivos de context/brand/ separadamente — já estão nos workflows.

---

REGRAS TÉCNICAS INVIOLÁVEIS — VÁLIDAS PARA TODO CONTEÚDO

DIMENSÃO FINAL OBRIGATÓRIA
- Posts feed Instagram: 1080×1350px (4:5)
- Reels / Stories: 1080×1920px (9:16)
- Imagen 4 e Nano Banana geram 896×1280 → converter SEMPRE antes de compor:
  magick input.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1350 output.png

LOGO — REGRA PERMANENTE E INVIOLÁVEL
- Fundo escuro (navy/preto) → assets/logos/04_logo_branco.png
- Fundo claro ou faixa laranja → assets/logos/03_logo_preto.png
- Posição em posts estáticos (ImageMagick): -gravity SouthEast -geometry +24+14 -resize x52
- Posição em HTML (CSS): position:absolute; bottom:10px; right:24px; height:50px;
- NUNCA incluir logo em prompts de geração de imagem — gera logo falso

FAIXA LARANJA
- Sempre 80px no rodapé
- Cor: #FD7A22
- Logo DENTRO da faixa (não acima)
- Nunca incluir faixa laranja em prompts — adicionar via ImageMagick

ALTERNÂNCIA CLARO/ESCURO
- Nunca dois posts escuros seguidos
- Domingo: sempre fundo claro (#F5F5F0 ou off-white)
- Verificar o post anterior no calendário antes de definir

IMAGEM × CONTEÚDO
- A imagem deve retratar EXATAMENTE o tema do post/slide
- Capacete = foto de capacete. Luvas = foto de luvas.
- Nunca imagem genérica. Nunca reutilizar entre slides.
- Fotorrealismo obrigatório

APROVAÇÃO ANTES DE SALVAR
- Sempre mostrar ao usuário antes de salvar
- Só salvar após aprovação explícita

ONDE SALVAR
- Posts estáticos (foto ou tipográfico): assets/posts/AAAA-MM/ESTÁTICOS/
- Capas brutas de carrossel: assets/posts/AAAA-MM/CAPAS/
- Carrosseis HTML: assets/posts/AAAA-MM/CARROSSEL/
- Reels: assets/posts/AAAA-MM/REELS/

GERAÇÃO DE IMAGEM
- Prompt sempre em inglês
- Texto na imagem: português do Brasil, máx 8 palavras, 1 único elemento
- Finalizar prompt com: "text appears exactly once, no other text elements, no logos, no orange bar"
- Com pessoa: usar modelo oficial abaixo
- Sem pessoa: executar node ~/.claude/mcp/nanobanana/server.js "prompt" "3:4"

MODELO OFICIAL FORTIS (obrigatório em toda imagem com pessoa):
Brazilian male worker, approximately 35-42 years old, short dark stubble beard, short dark hair, white hard hat, orange high-visibility safety vest over black shirt, serious and confident expression, cinematic dramatic industrial lighting

NARRAÇÃO (ElevenLabs)
- Voz Fortis: node ~/.claude/mcp/elevenlabs/server.js "fortis" "texto"
- NUNCA usar "EPI" → substituir por "equipamentos de proteção" ou "êpêí"
- Todo reel termina com: CTA adequado + "Inova Fortis. A loja que ensina você a se proteger de verdade."

LEGENDAS EM REELS
- Zona segura: entre 80px do topo e 280px do rodapé (UI do Instagram/TikTok/Facebook)
- Nunca abaixo de 280px do rodapé

HTML CARROSSEL
- html2canvas scale: 2 (exporta 2×)
- Logo CSS: bottom:10px; right:24px; height:50px (dentro da faixa de 70px)
- Sem numeração de slides
- 1 imagem fotorrealista por slide, embarcada como base64
- Contraste mínimo: rgba(255,255,255,0.85)

EXECUÇÃO
- Não sugerir ferramentas. Executar.
- Não parar entre etapas para confirmar.
- Se API retornar erro: reportar exato. Não fingir sucesso.

---

CALENDÁRIO EDITORIAL SEMANAL

- Segunda → carrossel ou reel (educativo)
- Quarta  → carrossel ou reel (técnico / NR)
- Sexta   → estático ou reel (engajamento / comercial)
- Domingo → SEMPRE estático motivacional tipográfico, fundo claro

Todos os dias com post: mínimo 5 stories planejados (ver context/workflows/stories.md)

---

IDENTIDADE DA MARCA (resumo)

Posicionamento: "A loja que te ensina a se proteger de verdade."
Crença central: O problema não é a falta de EPI. É a normalização do risco.
Cores: Laranja #FD7A22 · Azul #365EB5 · Navy #0D1B2A · Verde Abril #2E7D32
Fontes: Aoboshi One (títulos) · Open Sans (corpo)
Tom: direto, educador, responsável. Nunca alarmista. Nunca propaganda.

DATAS COMEMORATIVAS
- Abril Verde → verde #2E7D32 integrado na tipografia e nos elementos visuais de todos os posts do mês

CONTEÚDO
- Todo post deve ensinar, alertar ou corrigir comportamento
- Se não faz isso, não é da Fortis

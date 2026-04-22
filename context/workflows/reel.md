# WORKFLOW — REEL / VÍDEO | Inova Fortis EPIs

> Leia APENAS este arquivo para criar um Reel. Ele contém tudo.

---

## ALMA DA MARCA

**Posicionamento:** A loja que te ensina a se proteger de verdade.
**Crença central:** O problema não é a falta de EPI. É a normalização do risco.
**Papel no Reel:** impacto emocional nos primeiros 3 segundos → tensão → virada → solução → CTA.
**Tom:** humano, urgente, real. Nunca motivacional vazio. Nunca propaganda. Nunca genérico.

**Reels existem para alcançar novos públicos. Todo segundo conta.**

---

## IDENTIDADE VISUAL

| Elemento | Valor |
|---|---|
| Laranja | `#FD7A22` |
| Navy | `#0D1B2A` |
| Branco | `#FFFFFF` |
| Handle | `@fortisepis` |
| Tagline | `"A loja que te ensina a se proteger de verdade."` |

---

## ESTRUTURA DO ROTEIRO (5 CENAS)

Cada cena tem tema emocional distinto. Progressão obrigatória.

```
CENA 1 — GANCHO (0–4s)
→ Frase de impacto. Situação familiar. "Isso pode acontecer comigo."
→ Imagem: trabalhador em risco OR produto em situação crítica

CENA 2 — TENSÃO (4–9s)
→ Aprofundar o problema. Mostrar o erro. Dado real ou situação específica.
→ Imagem: detalhe do risco, EPI incorreto, ambiente perigoso

CENA 3 — VIRADA (9–14s)
→ O ponto de mudança. O que muita gente ignora. A verdade.
→ Imagem: contraste — o errado vs o correto

CENA 4 — SOLUÇÃO (14–19s)
→ O que fazer de concreto. Prático, aplicável, imediato.
→ Imagem: EPI correto em uso, trabalhador protegido

CENA 5 — CTA + SLOGAN (19–27s) ← OBRIGATÓRIO
→ CTA narrado adequado ao conteúdo (seguir, clicar no link, comentar, salvar)
→ Encerrar SEMPRE com o slogan narrado: "Inova Fortis. A loja que ensina você a se proteger de verdade."
→ Na tela: @fortisepis + slogan visível
→ Imagem: trabalhador confiante, ambiente seguro
```

**Regra do slogan — permanente e inviolável:**
- Todo reel termina com o slogan narrado: `"Inova Fortis. A loja que ensina você a se proteger de verdade."`
- O CTA vem ANTES do slogan, adequado ao conteúdo:
  - Educativo → "Segue a gente para aprender mais sobre proteção."
  - Alerta → "Compartilha com quem trabalha com você."
  - Técnico → "Acessa o link da bio para ver os produtos com CA válido."
  - Reflexivo → "Salva esse vídeo. Pode ajudar alguém."

---

## FLUXO DE EXECUÇÃO (nesta ordem, sem pular etapas)

### PASSO 1 — ROTEIRO
Criar 5 cenas com:
- Texto narrado (otimizado para fala — frases curtas, pausas com ponto)
- Texto na tela (legenda sincronizada)
- Descrição da imagem de fundo
- Emoção predominante da cena

### PASSO 2 — NARRAÇÃO (ElevenLabs)

**Regras do texto narrado:**
- Frases curtas, ritmo natural
- NUNCA a sigla "EPI" → substituir por "equipamentos de proteção"
- Se inevitável, escrever "êpêí" para pronúncia correta
- Sem símbolos, bullets ou emojis no texto enviado
- Sempre terminar com CTA adequado ao conteúdo + slogan: `"Inova Fortis. A loja que ensina você a se proteger de verdade."`

```bash
source ~/.zshrc
node ~/.claude/mcp/elevenlabs/server.js "fortis" "texto completo da narração"
# Informar nome do arquivo gerado (ex: audio-1234567890.mp3)
```

### PASSO 3 — SILENCEDETECT (mapeamento de frames — OBRIGATÓRIO)

Sem este passo, as legendas ficam dessincronizadas com o áudio.

```bash
ffmpeg -i audio.mp3 -af silencedetect=noise=-30dB:d=0.15 -f null - 2>&1 | grep silence
# Anotar: silence_end de cada frase = quando a frase terminou
# Converter: frame = Math.round(segundos × 30)
# Frames relativos por cena: frame_rel = frame_abs - frame_inicio_da_sequencia
```

**Tabela obrigatória antes de montar o Remotion:**
| Frase | Texto | Início (s) | Fim (s) | Frame início | Frame fim |
|---|---|---|---|---|---|
| 1 | ... | 0.00 | X.XX | 0 | N |
| 2 | ... | X.XX | X.XX | N | N |

### PASSO 4 — IMAGENS (1 por cena, nunca reutilizar)

Cada cena tem 1 imagem fotorrealista gerada via Nano Banana.
A imagem deve retratar EXATAMENTE o tema emocional da cena.

```bash
source ~/.zshrc
node ~/.claude/mcp/nanobanana/server.js "prompt da cena N" "9:16"
# Converter para 1080x1920 (9:16 Reel):
magick input.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1920 cena_N.png
```

**Para cena com modelo Fortis:**
```
Brazilian male worker, approximately 35-42 years old, short dark stubble beard, short dark hair, white hard hat, orange high-visibility safety vest over black shirt, [ação específica da cena], [ambiente industrial], cinematic dramatic lighting, photorealistic, no text, no logos
```

### PASSO 5 — REMOTION (montagem)

**Arquivo:** `video/src/ReelStorytelling.jsx`

**Tipografia mínima para mobile vertical:**
| Tipo | Tamanho | Fonte |
|---|---|---|
| Palavra de impacto/gancho | 84–96px | Bebas Neue, laranja |
| Frase principal | 58–68px | Poppins 700 |
| Frase de contexto | 50–52px | Poppins 600 |
| CTA @handle | 52px | Poppins 800, laranja |
| CTA tagline | 34px | Poppins |

**Nunca abaixo de 50px** — mobile vertical, 48px já é difícil de ler.

**Efeitos obrigatórios em TODA cena:**
- Ken Burns: `scale 1.0→1.10`, translate ±10–20px
- Flash de corte branco entre cenas: 6 frames, intensity 0.6–0.9
- Overlay/gradiente escuro para legibilidade das legendas
- Pelo menos 1 efeito especial por cena (vinheta, zoom punch, partículas)

**Efeitos especiais disponíveis no componente:**
- `FlashCut` — flash branco entre cenas
- `BG` com Ken Burns — movimento da câmera
- Vinheta vermelha pulsante — para cenas de acidente/risco
- Zoom punch — `spring animation` em frases de clímax
- Overlay gradiente — `rgba(0,0,0,0.70)` para legibilidade

**Legendas com cor:**
- Palavras de impacto: `color={LARANJA}`, `accent={true}`, Bebas Neue
- Frases de virada: `color={LARANJA}`, Poppins médio
- Frases neutras: branco padrão

**Posição segura das legendas — OBRIGATÓRIO:**
As legendas devem ficar na zona segura para não serem cortadas pela UI do Instagram, TikTok e Facebook.
- Zona proibida (coberta pela UI): últimos **260px** do rodapé (botões, username, descrição)
- Zona proibida do topo: primeiros **80px** (barra de status)
- **Legendas ficam entre y=80 e y=1660** num vídeo 1080×1920
- No Remotion: `bottom` mínimo de **280px** para qualquer legenda ou texto

```jsx
// Posição segura para legendas (nunca abaixo de 280px do fundo):
<div style={{
  position: 'absolute',
  bottom: 300,   // ← zona segura, acima da UI do Instagram/TikTok
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  padding: '0 52px',
}}>
  {/* texto da legenda */}
</div>
```

**CTA visual — rodapé seguro:**
```jsx
// CTA com @fortisepis + slogan — posição segura:
<div style={{
  position: 'absolute',
  bottom: 280,   // ← acima da zona da UI
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <div style={{
    background: 'rgba(0,0,0,0.78)',
    border: '2px solid rgba(253,122,34,0.4)',
    borderRadius: 12,
    padding: '12px 28px',
    textAlign: 'center',
  }}>
    <div style={{ fontSize: 52, fontWeight: 800, color: '#FD7A22', fontFamily: 'Poppins' }}>
      @fortisepis
    </div>
    <div style={{ fontSize: 34, color: 'rgba(255,255,255,0.85)', fontFamily: 'Poppins' }}>
      Inova Fortis. A loja que ensina você a se proteger de verdade.
    </div>
  </div>
</div>
```

### PASSO 6 — RENDER

```bash
cd /Users/katiucemarchi/Desktop/fortis-core/video
npx remotion render src/index.jsx ReelStorytelling output.mp4
```

### PASSO 7 — APROVAÇÃO E SALVAMENTO

1. Mostrar o vídeo ao usuário
2. Aguardar aprovação
3. Salvar em `assets/posts/AAAA-MM/REELS/[dia-dd]-descricao.mp4`

---

## MELHORIAS PLANEJADAS (a implementar em breve)

- [ ] Migrar geração de vídeo base para Higgsfield (mais realismo, cenas reais)
- [ ] Transições cinematográficas avançadas entre cenas
- [ ] Efeito de câmera handheld (leve tremor) em cenas de tensão
- [ ] Color grading por tipo de cena (quente para risco, frio para técnico)
- [ ] Texto animado palavra por palavra (karaokê style para retenção)

---

## CHECKLIST FINAL

- [ ] Roteiro com 5 cenas e emoção distinta por cena?
- [ ] Narração gerada sem "EPI" isolado?
- [ ] silencedetect executado e tabela de frames preenchida?
- [ ] 1 imagem por cena (nunca reutilizada)?
- [ ] Ken Burns em TODAS as cenas?
- [ ] Flash de corte entre cenas?
- [ ] Texto nunca abaixo de 50px?
- [ ] CTA narrado adequado ao conteúdo antes do slogan?
- [ ] Slogan narrado no final: "Inova Fortis. A loja que ensina você a se proteger de verdade."?
- [ ] Legendas acima de 280px do rodapé (zona segura Instagram/TikTok/Facebook)?
- [ ] Handle `@fortisepis` e slogan visíveis no CTA visual?
- [ ] Aprovado antes de salvar?

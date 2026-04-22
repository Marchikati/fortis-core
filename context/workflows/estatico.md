# WORKFLOW — POST ESTÁTICO | Inova Fortis EPIs

> Leia APENAS este arquivo para criar um post estático. Ele contém tudo.

---

## ALMA DA MARCA

**Posicionamento:** A loja que te ensina a se proteger de verdade.
**Crença central:** O problema não é a falta de EPI. É a normalização do risco.
**Papel:** mostrar o erro → explicar o porquê → apresentar a solução → gerar mudança de comportamento.
**Tom:** direto, responsável, educador. Nunca alarmista, nunca motivacional vazio, nunca propaganda.

**O conteúdo existe para ensinar, alertar ou corrigir. Se não faz isso, não é da Fortis.**

---

## IDENTIDADE VISUAL

| Elemento | Valor |
|---|---|
| Laranja | `#FD7A22` |
| Azul | `#365EB5` |
| Navy | `#0D1B2A` |
| Preto | `#000000` |
| Off-white | `#F5F5F0` |
| Verde (Abril Verde) | `#2E7D32` |
| Título | Aoboshi One |
| Corpo | Open Sans / Verdana Bold |

**Alternância obrigatória:** nunca dois posts escuros seguidos. Domingo = sempre claro.
**Dark:** navy `#0D1B2A` ou preto `#0D0D0D`
**Claro:** `#F5F5F0`, texturas industriais claras, fundo off-white

---

## ESTRUTURA DO COPY

```
GANCHO (1 linha — máx 8 palavras)
→ Erro comum / Alerta direto / Quebra de expectativa / Pergunta direta

CORPO (2–3 frases)
→ Ensina, alerta ou corrige. Prático, aplicável, real.

CTA (1 linha)
→ Pergunta aberta OU compartilhamento OU salvamento
```

**Biblioteca de ganchos:**
- "Você pode estar fazendo isso errado."
- "Esse erro é mais comum do que parece."
- "O risco não avisa."
- "Nem todo EPI protege."
- "Você sabe se está usando isso certo?"
- "Ninguém fala sobre isso, mas acontece todos os dias."

**CTAs por objetivo:**
- Educativo → "Você já viu isso acontecer?"
- Alerta → "Compartilha com quem trabalha com você."
- Reflexão → "Vale a pena correr esse risco?"
- Tutorial → "Salva isso para não esquecer."

---

## FLUXO DE EXECUÇÃO

### PASSO 1 — DEFINIR
- [ ] Pilar editorial (Educação / Consciência / Autoridade / Certo×Errado / Transformação)
- [ ] Alternância: o post anterior era claro ou escuro? → escolher o oposto
- [ ] Tem pessoa na cena? → define o processo de geração de imagem

### PASSO 2 — GERAR IMAGEM

**Regras do prompt:**
- Sempre em inglês
- Texto visível na imagem: sempre em português do Brasil, máx 8 palavras
- 1 único elemento de texto por prompt
- Nunca mencionar logo, faixa laranja, cores hex
- Finalizar com: `text appears exactly once, no other text elements, no logos, no orange bar`
- Fotorrealismo obrigatório — iluminação industrial ou estúdio real, sem brilhos de IA
- A imagem deve retratar EXATAMENTE o EPI/tema do post

**Sem pessoa:**
```bash
source ~/.zshrc
node ~/.claude/mcp/nanobanana/server.js "prompt aqui" "3:4"
```

**Com pessoa — modelo oficial obrigatório:**
```
Brazilian male worker, approximately 35-42 years old, short dark stubble beard, short dark hair, white hard hat, orange high-visibility safety vest over black shirt, serious and confident expression, [ação específica], [ambiente industrial], cinematic dramatic lighting, photorealistic
```
Executar via Imagen 4:
```bash
source ~/.zshrc
node ~/.claude/mcp/nanobanana/server.js "prompt completo" "3:4"
```

### PASSO 3 — CONVERTER PARA 1080×1350 (OBRIGATÓRIO)

Imagen 4 e Nano Banana geram 896×1280 (3:4). Instagram exige 4:5. Sem esta etapa, o Instagram corta a faixa laranja e o logo.

```bash
magick input.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1350 input_1080.png
# Para fundo claro:
magick input.png -resize 1080x -gravity center -background '#F5F5F0' -extent 1080x1350 input_1080.png
```

### PASSO 4 — COMPOSITE (overlay + texto + faixa + logo)

```bash
# Verificar dimensões (deve ser 1080x1350):
magick identify input_1080.png | awk '{print $3}'

# FUNDO ESCURO — overlay + texto + faixa laranja + logo branco:
magick input_1080.png \
  \( +clone -fill "rgba(13,27,42,0.68)" -draw "rectangle 0,0 1080,1350" \) -composite \
  \( -size 1080x18 xc:"#2E7D32" \) -gravity North -geometry +0+0 -composite \
  \( -size 1080x7 xc:"#2E7D32" \) -geometry +0+28 -composite \
  -font "/System/Library/Fonts/Supplemental/Verdana Bold.ttf" \
  -pointsize 22 -fill "#2E7D32" -gravity NorthWest -annotate +100+65 "TEMA/CAMPANHA" \
  -pointsize 100 -fill white -annotate +100+580 "Linha 1" \
  -pointsize 100 -fill white -annotate +100+695 "Linha 2" \
  -pointsize 100 -fill "#2E7D32" -annotate +100+810 "Linha 3." \
  \( -size 880x3 xc:"#FD7A22" \) -geometry +100+935 -composite \
  -pointsize 38 -fill "rgba(255,255,255,0.92)" -annotate +100+975 "Corpo do texto aqui." \
  -pointsize 38 -fill "#FD7A22" -annotate +100+1023 "Contraponto laranja." \
  \( -size 1080x80 xc:"#FD7A22" \) -gravity South -geometry +0+0 -composite \
  \( assets/logos/04_logo_branco.png -resize x52 \) -gravity SouthEast -geometry +24+14 -composite \
  output_final.png

# FUNDO CLARO — overlay leve + texto escuro + faixa laranja + logo preto:
magick input_1080.png \
  \( +clone -fill "rgba(245,245,240,0.80)" -draw "rectangle 0,0 1080,1350" \) -composite \
  \( -size 1080x18 xc:"#2E7D32" \) -gravity North -geometry +0+0 -composite \
  \( -size 1080x7 xc:"#2E7D32" \) -geometry +0+28 -composite \
  -font "/System/Library/Fonts/Supplemental/Verdana Bold.ttf" \
  -pointsize 22 -fill "#2E7D32" -gravity NorthWest -annotate +100+65 "TEMA/CAMPANHA" \
  -pointsize 100 -fill "#0D1B2A" -annotate +100+580 "Linha 1" \
  -pointsize 100 -fill "#0D1B2A" -annotate +100+695 "Linha 2" \
  -pointsize 100 -fill "#2E7D32" -annotate +100+810 "Linha 3." \
  \( -size 160x5 xc:"#FD7A22" \) -geometry +100+940 -composite \
  -pointsize 38 -fill "#333333" -annotate +100+980 "Corpo do texto aqui." \
  -pointsize 38 -fill "#FD7A22" -annotate +100+1028 "Contraponto laranja." \
  \( -size 1080x80 xc:"#FD7A22" \) -gravity South -geometry +0+0 -composite \
  \( assets/logos/03_logo_preto.png -resize x52 \) -gravity SouthEast -geometry +24+14 -composite \
  output_final.png
```

**Regra do logo:**
- Fundo escuro / faixa laranja com fundo escuro → `04_logo_branco.png`
- Fundo claro / faixa laranja com fundo claro → `03_logo_preto.png`

**Posicionamento do texto — com pessoa na foto:**
- Texto principal começa em y=540 no mínimo (evitar rosto, que fica no centro-superior)
- Deixar o rosto do trabalhador visível

### PASSO 5 — APROVAÇÃO E SALVAMENTO

1. Mostrar o resultado ao usuário: `open output_final.png`
2. Aguardar aprovação explícita
3. Salvar em `assets/posts/AAAA-MM/CAPAS/` (posts com foto de pessoa)
4. Salvar em `assets/posts/AAAA-MM/ESTÁTICOS/` (posts tipográficos)
5. Nome: `[dia-dd]-[descricao-curta].png`

---

## CHECKLIST FINAL

- [ ] Dimensão final = 1080×1350?
- [ ] Post anterior era escuro? → este deve ser claro (e vice-versa)
- [ ] Imagem retrata exatamente o tema do post?
- [ ] Logo correto (preto ou branco) dentro da faixa laranja?
- [ ] Faixa laranja = 80px, logo `gravity SouthEast -geometry +24+14`?
- [ ] Texto não cobre o rosto do trabalhador?
- [ ] Verde presente se for Abril Verde / data comemorativa?
- [ ] Gancho forte na primeira linha?
- [ ] Sem URL, sem numeração, sem badge flutuante?
- [ ] Aprovado pelo usuário antes de salvar?

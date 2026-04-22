# WORKFLOW — CARROSSEL | Inova Fortis EPIs

> Leia APENAS este arquivo para criar um carrossel. Ele contém tudo.

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
| Amarelo | `#FFD754` |

**Alternância:** nunca dois posts escuros seguidos. Domingo = sempre claro.
**Logo na faixa laranja:** `03_logo_preto.png` (fundo claro) / `04_logo_branco.png` (fundo escuro)

---

## ESTRUTURA DO CARROSSEL

```
Capa (imagem fotorrealista gerada separadamente)
Slide 1 → Gancho / contexto do problema
Slide 2 → Aprofundamento / dado / norma
Slide 3 → Erro comum detalhado
Slide 4 → Como fazer certo / passo a passo
Slide 5 → Exemplo prático / comparativo
Slide 6 → Consequência ou benefício
Slide 7 → Fechamento + CTA
```

Mínimo 6 slides internos + fechamento. Progressão obrigatória — nunca repetir ideia entre slides.

---

## PILARES EDITORIAIS

| Pilar | Foco | Tom |
|---|---|---|
| Educação | Ensinar uso correto, diferenças, erros comuns | Claro, direto, exemplos reais |
| Consciência de Risco | Quebrar normalização, alertar sem exagero | Identificação, gerar alerta |
| Autoridade Técnica | CA, NRs, exigências legais | Simplificar o técnico |
| Certo vs Errado | Comparativo visual direto | Sem ambiguidade |
| Transformação | Mudar mentalidade, excesso de confiança | Reflexivo, frases fortes |

---

## FLUXO DE EXECUÇÃO

### PASSO 1 — ESTRATÉGIA
- [ ] Pilar editorial escolhido
- [ ] Ângulo único definido (não é só "sobre luvas" — é "o erro de uso de luva que ninguém percebe")
- [ ] Gancho forte definido (biblioteca abaixo)
- [ ] Post anterior: claro ou escuro? → capa deve ser o oposto

### PASSO 2 — GERAR IMAGENS (1 POR SLIDE)

Cada slide interno do HTML deve ter uma imagem de fundo fotorrealista que retrate EXATAMENTE o tema daquele slide.

**Nunca:** imagem genérica, imagem de EPI diferente do tema, imagem reutilizada entre slides.

**Processo para cada imagem:**
```bash
source ~/.zshrc
node ~/.claude/mcp/nanobanana/server.js "prompt específico para o slide" "3:4"
```

**Converter para dimensão do slide (1080×1350):**
```bash
magick input.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1350 slide_N_bg.jpg
# Para slide claro:
magick input.png -resize 1080x -gravity center -background '#F5F5F0' -extent 1080x1350 slide_N_bg.jpg
```

**Embedar no HTML:**
```bash
BASE64=$(base64 -i slide_N_bg.jpg | tr -d '\n')
# Usar como: background-image: url('data:image/jpeg;base64,${BASE64}')
```

**Regra de imagens:**
- Capacete → foto de capacete
- Luvas → foto de luvas
- NR-6 → EPIs em contexto de norma
- Risco de queda → altura, EPI de proteção
- Nunca imagem de pessoa diferente do modelo oficial Fortis

### PASSO 3 — GERAR CAPA (imagem fotorrealista separada)

A capa é gerada como imagem separada, composta com ImageMagick.

**Prompt da capa — regras:**
- Texto visível na imagem: português do Brasil, máx 8 palavras
- 1 único elemento de texto
- Fotorrealismo total
- Sem logo, sem faixa, sem cores hex
- Finalizar com: `text appears exactly once, no other text elements, no logos, no orange bar`

```bash
source ~/.zshrc
node ~/.claude/mcp/nanobanana/server.js "prompt da capa" "3:4"
# Converter para 1080x1350:
magick capa_raw.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1350 capa_1080.png
# Adicionar faixa laranja + logo:
magick capa_1080.png \
  \( -size 1080x80 xc:"#FD7A22" \) -gravity South -geometry +0+0 -composite \
  \( assets/logos/03_logo_preto.png -resize x52 \) -gravity SouthEast -geometry +24+14 -composite \
  capa_final.png
```

### PASSO 4 — CONSTRUIR HTML

**Especificações técnicas:**
- Dimensão de cada slide: `1080×1350px`
- Um único arquivo `.html` com todos os slides
- Logos embarcados como base64 — nunca caminhos relativos
- `html2canvas` com `scale: 2` → exporta em 2160×2700 (alta qualidade)
- Botão individual por slide + botão "Baixar Todos (.zip)"

**Logo CSS — regra permanente:**
```css
.logo {
  position: absolute;
  bottom: 10px;      /* DENTRO da faixa laranja de 70px */
  right: 24px;
  height: 50px;
  width: auto;
  z-index: 11;
}
.orange-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #FD7A22;
  z-index: 9;
}
```

**Contraste obrigatório:**
| Tipo | Mínimo |
|---|---|
| Título principal | `#ffffff` 100% |
| Corpo | `rgba(255,255,255,0.90)` |
| Secundário | `rgba(255,255,255,0.85)` |
| Nunca abaixo | `rgba(255,255,255,0.80)` |

**Tamanho mínimo de texto:**
- Títulos: 56px | Subtítulos: 32px | Corpo: 26px | Labels: 18px

**Fontes:**
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Aoboshi+One&display=swap');
/* Fallback robusto: */
font-family: 'Aoboshi One', Georgia, serif;  /* títulos */
font-family: 'Open Sans', Verdana, sans-serif; /* corpo */
```

**Variar entre slides:**
- Paleta dominante (escuro ↔ claro ↔ azul ↔ off-white)
- Composição (texto centralizado / alinhado à esquerda / com card)
- Hierarquia visual (ícones, numeração, comparativo, lista)

**Imagens de fundo nos slides:**
```css
.slide-N {
  background-image: url('data:image/jpeg;base64,BASE64_AQUI');
  background-size: cover;
  background-position: center;
}
/* Overlay obrigatório para legibilidade: */
.slide-N::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(13,27,42,0.70); /* escuro */
  /* ou: background: rgba(245,245,240,0.82); para claro */
}
```

**Numeração de slides: NUNCA incluir** (ex: "02/07" — proibido)

**Estrutura HTML base por slide:**
```html
<div class="slide s-N" id="slide-N">
  <!-- Faixas verdes no topo (Abril Verde ou campanhas) -->
  <div class="verde-top"></div>
  <div class="verde-top2"></div>
  <!-- Conteúdo -->
  <div class="content">
    <span class="label">PILAR / TEMA</span>
    <h2 class="headline">Título <em>destaque</em></h2>
    <p class="body">Corpo do texto aqui.</p>
  </div>
  <!-- Faixa e logo — sempre por último -->
  <div class="orange-bar"></div>
  <img class="logo" src="data:image/png;base64,LOGO_BASE64" alt="Fortis">
</div>
```

### PASSO 5 — APROVAÇÃO E SALVAMENTO

1. Mostrar capa: `open capa_final.png`
2. Mostrar HTML: `open carrossel.html`
3. Aguardar aprovação
4. Salvar capa em `assets/posts/AAAA-MM/CAPAS/qua-DD-descricao.png`
5. Salvar HTML em `assets/posts/AAAA-MM/CARROSSEL/qua-DD-descricao.html`

---

## BIBLIOTECA DE GANCHOS

| Tipo | Exemplos |
|---|---|
| Erro comum | "Você pode estar fazendo isso errado." / "90% das pessoas erram nisso." |
| Alerta direto | "O risco não avisa." / "Esse detalhe pode custar caro." |
| Consequência | "Foi só uma vez que ele não usou." |
| Quebra de expectativa | "Nem todo EPI protege." / "Nem toda luva é igual." |
| Pergunta direta | "Você sabe se está usando isso certo?" |
| Verdade incômoda | "Ninguém fala sobre isso, mas acontece todos os dias." |
| Curiosidade | "O que ninguém te explica sobre esse EPI." |

**Regra:** Nunca repetir o mesmo tipo de gancho em posts consecutivos.

---

## CHECKLIST FINAL

- [ ] 1 imagem fotorrealista por slide (tema específico)?
- [ ] Imagem da capa gerada e convertida para 1080×1350?
- [ ] Logo CSS: `bottom: 10px; right: 24px; height: 50px` (dentro da faixa)?
- [ ] html2canvas `scale: 2`?
- [ ] Sem numeração de slides?
- [ ] Contraste de todos os textos ≥ 0.85?
- [ ] Progressão entre slides (sem ideia repetida)?
- [ ] Alternância de paleta entre slides?
- [ ] Gancho forte no slide 1?
- [ ] CTA com pergunta aberta no último slide?
- [ ] Aprovado pelo usuário antes de salvar?
- [ ] Salvo em CAPAS/ e CARROSSEL/ corretos?

# DIREÇÃO VISUAL FORTIS — Sistema Editorial Completo

> Leitura obrigatória do fortis-diretor-arte antes de qualquer execução.
> Princípio fundador: "Arte bonita não vende. Arte com direção vende."
> Todo post começa com uma INTENÇÃO — o que o seguidor vai SENTIR — e cada elemento serve essa intenção.

---

## OS 3 MOODS FORTIS

### AUTORIDADE TÉCNICA
**Quando usar:** carrossel de specs, dado técnico, norma NR, engajamento certo×errado, checklist de fiscalização
**Sentimento-alvo:** confiança, precisão — "essa marca sabe do que fala"
**Iluminação:** dura, direcional, sombras nítidas. Temperatura fria (5500K–6500K, fluorescente industrial)
**Tipografia:** Montserrat 900 condensado agressivo + Anton para dados chocantes. Tipo DOMINA a composição.
**Cor:** predominância navy #0D1B2A. Laranja #FD7A22 como acento cirúrgico (1 elemento, não decorativo em tudo)
**Composição:** grid rígido com 1 elemento quebrando — simetria com tensão
**Textura:** aço escovado, vidro, policarbonato, superfícies de precisão técnica
**Grain:** baixo (limpeza técnica reforça autoridade)

### PROTEÇÃO REAL
**Quando usar:** produto EM USO, LOJA REAL, bastidor, prova social, conteúdo humanizado
**Sentimento-alvo:** reconhecimento, realidade — "isso é pra mim, essa proteção é real"
**Iluminação:** luz mista natural + fluorescente, levemente imperfeita. Quente-neutra (3200K–4500K)
**Tipografia:** Montserrat 800 menos agressivo. Inter para corpo respeitoso. Tipo APOIA a foto, não compete.
**Cor:** navy + off-white #F5F5F0. Laranja contextual (aparece no EPI, não imposto pelo design)
**Composição:** enquadramento humano, levemente torto, altura de olho. Nada posado demais.
**Textura:** nitrile rugoso, couro nobuck, espuma comprimida, superfícies de trabalho real com história
**Grain:** alto (documenta, humaniza, elimina cara de IA — a imperfeição é a prova de vida)

### URGÊNCIA INDUSTRIAL
**Quando usar:** CTA sexta, alerta de fiscalização, data crítica (Abril Verde, Maio Amarelo, SIPAT), B2B urgente
**Sentimento-alvo:** urgência, alerta — "preciso agir agora, isso me afeta"
**Iluminação:** contraste extremo, sombras profundas. Temperatura neutra a fria.
**Tipografia:** Anton ALL CAPS dominante. Montserrat 900 como suporte. Tipo OCUPA o espaço.
**Cor:** INVERSÃO — laranja #FD7A22 como fundo dominante, texto em navy ou branco
**Composição:** diagonal, elementos sangram para fora do frame, tipo invade o espaço da imagem
**Textura:** concreto, metal enferrujado, superfícies de obra real com desgaste
**Grain:** médio a alto (tensão, documentário)

---

## ESCALA TIPOGRÁFICA (inviolável)

| Nível | Tamanho | Fonte | Peso | Tracking | Leading | Uso |
|---|---|---|---|---|---|---|
| Display | 120–140px | Montserrat | 900 | -0.02em | 0.92 | Capa de carrossel, hero, máx 3 palavras |
| Headline | 80–96px | Montserrat | 800 | -0.01em | 1.00 | Declaração principal do post |
| Impacto | 52–64px | Anton | 400 | +0.02em | 1.05 | Dado chocante, urgência (SEMPRE ALL CAPS) |
| Label / Eyebrow | 22–28px | Inter | 700 | +0.12em | 1.2 | CA, norma, categoria (SEMPRE CAPS) |
| Corpo | 32–40px | Inter | 500–600 | 0 | 1.5 | Explicação, benefício, spec |
| Caption | 24–28px | Inter | 400 | 0 | 1.5 | Detalhe secundário, CTA (opacidade 65%) |

**Regras de tensão tipográfica:**
- SEMPRE ter ≥2 níveis com diferença mínima de 2 steps na mesma composição
- Nunca dois elementos do mesmo peso e tamanho próximos — isso é template, não design
- Tipo PODE sangrar para fora do frame (cortado pela borda) — cria tensão real
- Texto sobreposto ao produto (EM CIMA, não abaixo) — hierarquia mais forte
- Display + Caption lado a lado = design. Dois elementos de 80px = template.

**Google Fonts (HTML):**
```
family=Montserrat:wght@700;800;900&family=Anton&family=Inter:wght@400;500;600;700
```

---

## TEMPLATES DE COMPOSIÇÃO (5 templates, escolher conforme mood)

### TEMPLATE A — PRODUTO HERÓI (fundo branco/split)
```
[LABEL/CA — Inter 700 CAPS, 24px, laranja, topo esquerdo]
[PRODUTO — ocupa 65-70% do frame, ligeiramente off-center]
[HEADLINE — Montserrat 900, sobreposto à esquerda, Display ou Headline]
[SPECS — tags Inter 700, embaixo do headline]
[FAIXA LARANJA 70px — rodapé com logo branco]
```
Jornada do olhar: produto (âncora visual) → headline → specs → logo

### TEMPLATE B — EDITORIAL ESCURO (autoridade técnica)
```
[EYEBROW — Inter 700 CAPS, 24px, laranja, topo]
[HEADLINE — Montserrat 900, 80-120px, dominante, esquerda ou centro]
[IMAGEM — direita ou fundo, 40-50% do frame]
[CORPO/DADO — Inter 500, 34px, abaixo do headline]
[FAIXA LARANJA 70px — rodapé]
```
Jornada: headline (âncora textual) → imagem → dado → faixa

### TEMPLATE C — LOJA REAL (proteção real)
```
[FOTO BASE — ocupa 100% do frame, gerada pelo nanobanana ou Higgsfield]
[OVERLAY — rgba(13,27,42,0.65) gradiente de baixo para cima]
[LABEL CA — Inter 700 CAPS, laranja, base do frame acima do headline]
[HEADLINE — Montserrat 800, 64-80px, branco, base]
[LOGO — solto, canto inferior direito, SEM faixa]
```
Jornada: foto (âncora emocional) → label CA → headline → logo

### TEMPLATE D — CARROSSEL CAPA (impacto máximo)
```
[FUNDO — foto ou cor sólida com overlay escuro]
[HEADLINE — Display 120-140px, ocupa 55-65% da altura, word break intencional]
[SUBHEADLINE — Impacto 52-60px Anton, cor diferente do headline]
[NUMERAÇÃO DISCRETA — Inter 400, 24px, canto superior direito, 60% opacidade]
[FAIXA LARANJA 70px]
```
Jornada: número (contexto) → headline (impacto máximo) → subheadline → faixa

### TEMPLATE E — URGÊNCIA / INVERSÃO LARANJA
```
[FUNDO LARANJA #FD7A22 — 100% do frame]
[HEADLINE — Display/Headline, navy #0D1B2A, dominante]
[DADO/IMPACTO — Anton ALL CAPS, navy]
[CTA — Inter 700, navy, borda ou sublinhado]
[LOGO PRETO — solto, rodapé sem faixa (o fundo já É laranja)]
```
Jornada: impacto da cor (âncora instantânea) → headline → dado → CTA

---

## VOCABULÁRIO DE TEXTURA POR PRODUTO

| Produto | Textura para explorar | Descrição sensorial no prompt |
|---|---|---|
| Luva nitrílica | Borracha micro-texturada | `extreme close-up of blue nitrile rubber surface, micro-texture dimples visible under raking light, matte finish with slight handling sheen` |
| Óculos policarbonato | Refração de luz na lente | `clear polycarbonate lens edge refracting ambient light into a single caustic amber line, subtle blue tint in the lens body, micro-scratch marks from daily use on temple arm` |
| Capacete ABS | Plástico técnico com uso real | `hard ABS helmet surface with micro-imperfections, matte crown with slight specular edge highlight, interior suspension webbing casting grid shadow` |
| Protetor auditivo | Espuma + metal inox | `memory foam ear cushion compressed from use showing compression lines, brushed ABS outer shell, stainless steel headband reflecting cool workshop light` |
| Botina | Couro nobuck envelhecido | `nubuck leather boot surface showing natural grain pattern, slight wear marks at toe cap, triple-stitch seam detail casting micro-shadow` |
| Respirador | Tecido técnico + silicone | `non-woven filter fabric texture under macro light, silicone nose seal ridge with mold detail, metal nose clip casting hard shadow on fabric` |

---

## LINGUAGEM DE MOTION (Higgsfield + HTML)

**Para posts com vida (stories animados, reel base, motion feed):**
```
Produto: "slow deliberate push-in toward the product, camera stops 10cm before touching, reveals texture detail"
LOJA REAL: "subtle handheld camera shake as if filmed by a real person walking, dust particles catching light in foreground"
Ambiente: "single industrial light beam sweeps slowly across product surface from left to right"
Mãos: "worker's gloved hand picks up the product naturally, turns it once to show logo, sets it down"
```

**Para texto em HTML animado (previews de stories, motion carrossel):**
- Palavras que "caem" com `animation-delay` escalonado por palavra (não por linha)
- Headline que cresce de 80% para 100% (`transform: scale(0.8) → scale(1)`) — não fade
- Label que desliza da esquerda (`translateX(-120%) → translateX(0)`)
- Faixa que sobe de baixo (`translateY(70px) → translateY(0)`)
- Nada pisca. Nada gira. Todo movimento tem direção e propósito claro.

**Proibido em motion Fortis:**
- Dolly cinematográfico artificial
- Slow motion épico com lens flare
- Zoom out agressivo
- Rotação de produto sem motivação

---

## CAMPANHA EDITORIAL SEMANAL

Cada semana = uma campanha visual com fio conector entre os 4-5 posts:

| Elemento | O que fixar para a semana toda |
|---|---|
| Temperatura | Toda a semana quente OU fria — não misturar no meio da semana |
| Textura recorrente | A superfície do produto aparece em ≥ 2 posts da semana |
| Peso tipográfico | Se a capa usa Anton ALL CAPS, os slides também usam |
| Grain | Nível fixo (alto = semana PROTEÇÃO REAL, baixo = semana AUTORIDADE TÉCNICA) |
| Mood | O mesmo mood domina a semana (pode variar entre posts, mas tem um dominante) |

**Exceção obrigatória:** Domingo motivacional SEMPRE claro #F5F5F0, independente do mood da semana.

**Exemplo — Semana Luva Nitrílica (Proteção Real, temperatura fria):**
- Seg (Reel): cena de mão enluvada em ação real, grain alto, quase documental
- Ter (EM USO): LOJA REAL, Template C, grain alto, mesma temperatura
- Qua (Carrossel): Template D capa + slides com textura de nitrile em fundo
- Qui (Engajamento): Template B, navy escuro, foto de textura como fundo
- Sex (Urgência): Template E inversão laranja
- Sáb (Fundo branco/split): Template A, mesmo produto, composição mais limpa
- Dom: Motivacional claro, FORA da campanha da semana

---

## GRAIN CSS PARA HTML POSTS

```css
/* Grain sutil — prova de vida sem destruir o design */
.slide::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 999;
}
```
Ajustar opacidade: 0.03 (sutil/Autoridade) → 0.06 (intenso/Proteção Real documental)

---

## TRATAMENTO DE COR (temperatura)

**Quente** (Proteção Real, bastidor, humanizado):
- No prompt: `slight warm toning, 3400K color temperature, amber fill light, warm shadows`
- No CSS: `filter: sepia(0.05) saturate(1.05) hue-rotate(-5deg)`

**Fria** (Autoridade Técnica, industrial, precisão):
- No prompt: `cool daylight, 6000K, steel-blue shadows, fluorescent fill light`
- No CSS: `filter: saturate(0.95) hue-rotate(5deg) brightness(1.02)`

**Desaturação seletiva** (produto destaca na cena):
- No prompt: `desaturated overall except the [cor do EPI específico], color isolation technique, everything else near-monochrome`

---

## CHECKLIST DE CONCEITO VISUAL (preencher antes de qualquer execução)

```
CONCEITO VISUAL — [tema] — [data]

Mood: [ ] Autoridade Técnica  [ ] Proteção Real  [ ] Urgência Industrial
Emoção-alvo: _______________________________________________
Declaração visual (1 frase — o que a imagem É): _______________
Jornada do olhar:
  1. Âncora (prende em 0.2s): _______________________________
  2. Declaração (headline): __________________________________
  3. Prova (CA/norma/spec): _________________________________
  4. Ação (CTA): ____________________________________________
Textura principal: _________________________________________
Temperatura: [ ] Quente  [ ] Fria  [ ] Neutra
Grain: [ ] 0.03 sutil  [ ] 0.04 padrão  [ ] 0.06 intenso
Template: [ ] A  [ ] B  [ ] C  [ ] D  [ ] E
Campanha da semana — fio visual: ____________________________
Método: [ ] HTML  [ ] HTML+Nanobanana  [ ] Higgsfield  [ ] gpt-image-2
Pasta destino: [ ] PRODUTOS/  [ ] CARROSSEL/  [ ] ESTÁTICOS/
```

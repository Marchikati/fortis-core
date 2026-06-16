# ARQUITETURA DE PROMPTS — Nível Sensorial Premium

> Leitura obrigatória do fortis-diretor-arte antes de escrever qualquer prompt.
> Princípios de direção cinematográfica aplicados a IA. Versão atualizada jun/2026.

---

## PRINCÍPIOS UNIVERSAIS

1. **Peso sequencial:** as primeiras 10-15 palavras comandam ~80% da atenção do modelo. SUJEITO PRINCIPAL SEMPRE PRIMEIRO. Nunca começar com estilo ou iluminação.

2. **Estrutura fixa:**
   `[Sujeito + adjetivos] [ação concreta] em [local específico]. [Textura/materialidade]. [Composição/câmera]. [Iluminação específica]. [Restrições negativas explícitas].`

3. **Falar como diretor de fotografia:** lente, abertura, tipo de luz ("35mm macro, mixed tungsten and window light, f/2.8"), nunca adjetivo vazio ("beautiful", "amazing", "stunning").

4. **Lógica de trabalho real (CRÍTICO):** descrever uma TAREFA específica e plausível com objeto e função visíveis. "Worker tightening a large hex bolt on a steel flange using a wrench properly seated on the bolt head" — não "worker working on a piece". Um profissional da área aprovaria a cena?

5. **Textura antes de tudo:** descrever a SUPERFÍCIE do produto antes de descrever o produto. A textura cria sensação. A sensação cria pausa no scroll.

6. **Restrições explícitas e concretas no final:** "no studio lighting" > "not artificial". Negações concretas funcionam.

7. **Referência visual > descrição:** produto real = imagem de referência como subject reference. Nunca descrever produto de memória.

---

## TERMOS ABSOLUTAMENTE BANIDOS (em qualquer prompt, para qualquer engine)

`cinematic` · `dramatic lighting` · `epic` · `hyper detailed` · `8k` · `masterpiece` · `photorealistic` · `stunning` · `beautiful` · `amazing` · `vibrant` · logo · faixa laranja · cores hex (exceto gpt-image-2)

---

## GPT-IMAGE-2 — LAYOUT COMERCIAL COM TEXTO

Modelo faz pré-visualização e valida o texto antes de renderizar (99%+ precisão em PT-BR). Usar como designer que recebe briefing de layout.

**Template comercial Fortis:**
```
Professional retail advertisement for workplace safety equipment store in Brazil.
[PRODUTO EXATO da referência, se anexada: "The attached [produto] as hero object, [posição/ângulo específico]"].
Layout: [eyebrow label at top left in Inter 700 uppercase: "CA [NÚMERO]"].
Headline at [posição] in bold condensed uppercase Montserrat: "[TEXTO EXATO PT-BR ≤ 6 palavras]".
Color palette: deep navy #0D1B2A background, vibrant orange #FD7A22 accents, white text.
[Iluminação específica: soft even retail studio lighting OU single key light from upper left].
High contrast, sharp product focus, clean negative space.
Keep the attached product's exact shape, colors and materials identical if reference provided.
Text appears exactly as written, no other text elements, no logos, no watermark, no orange bar.
```

**Regras gpt-image-2:**
- Pode usar cores hex aqui (o modelo obedece paleta — proibição de hex vale só para modelos fotorrealistas)
- Máx 1 headline + 1 callout (CA ou selo). Mais = poluição.
- Logo e faixa laranja NUNCA no prompt (entram via HTML ou ImageMagick pós-geração)
- Sempre com referência do produto: `node ~/.claude/mcp/gptimage/server.js "prompt" "3:4" "/tmp/produto-slug.png"`

---

## NANO BANANA PRO — FOTORREALISMO LOJA REAL

**Template sensorial premium para cena LOJA REAL:**
```
[Trabalhador específico com característica real — idade, gênero, contexto] [ação concreta e específica — verbo + objeto + função visível] in [local brasileiro real e específico — não "a store", mas "small safety equipment store counter in interior Minas Gerais, Brazil"].

[Textura principal do produto — descrição sensorial: "rough nitrile rubber fingertips gripping the handle", "clear polycarbonate lens edge refracting ambient light", "memory foam ear cushion compressed against ear"].

[EPIs coerentes com a atividade listados explicitamente: "wearing clear safety glasses, blue nitrile gloves"].

Candid documentary photo, shot on [smartphone | 35mm DSLR], eye-level, slightly off-center framing, subject fills [60-70%] of frame.
[Temperatura específica: mixed tungsten and natural window light | cool fluorescent workshop light | warm afternoon sun through factory window], true colors, visible film grain ISO [800-1600], imperfect but sharp focus.

Plain products without any labels, markings, printed text or fictional numbers.
No studio lighting, no cinematic look, no dramatic lighting, no text overlay, no logos, no orange bar.
```

**Gatilhos de realismo (obrigatório ao menos 2):**
- `shot on smartphone` ou `35mm DSLR, f/2.8`
- `film grain ISO 800-1600`
- `candid not posed`
- `slightly off-center framing`
- `imperfect but sharp`
- Local brasileiro específico (não genérico)
- `micro-imperfections of daily use`

---

## NANO BANANA — SUBJECT REFERENCE (produto fiel)

```bash
node ~/.claude/mcp/nanobanana/server.js "prompt da cena" "3:4" "/tmp/produto-slug.png" "product"
```

Prompt foca na CENA e na TEXTURA. A fidelidade do objeto vem da referência.
Incluir sempre: `"keep the reference product's exact shape, colors, materials and proportions, do not alter or add any markings, text or labels"`

---

## HIGGSFIELD — GERAÇÃO DE IMAGEM PREMIUM

Para cenas onde o nanobanana falhou ou quando a composição precisa de controle artístico maior.

**Invocar via MCP:** `mcp__higgsfield__generate_image`

**Template Higgsfield sensorial:**
```
[Sujeito exato e específico] [ação concreta com textura descrita].
[Local real e específico com detalhes de ambiente].
Documentary photography aesthetic, [temperatura de luz específica], film grain.
[Composição: extreme close-up / eye-level / slight dutch angle].
No artificial lighting, no staged composition, no text, no logos.
```

---

## HIGGSFIELD — MOTION (generate_video)

Prompt de motion é sobre MOVIMENTO, não conteúdo (a imagem já define o conteúdo).

**Templates de motion para Fortis:**

```
# Produto em destaque
"Slow deliberate push-in toward the product surface, camera settles 8cm from the texture detail, very slight natural breathing movement, no sudden cuts, ambient workshop sound atmosphere"

# LOJA REAL com pessoa
"Subtle handheld camera movement, as if a real person walks slowly past the scene, natural micro-shake, dust particles catching light in foreground, no dramatic stabilization"

# Ambiente industrial
"Single overhead industrial lamp casts moving shadow as it sways imperceptibly, static frame with only the shadow moving, cool fluorescent ambience"

# Produto close-up com textura
"Ultra slow micro push-in revealing surface texture of the product, camera moves 2cm over 5 seconds, raking light reveals material detail"
```

**Proibido em motion Fortis:** dolly cinematográfico dramático · slow motion épico com lens flare · rotação de produto em 360° sem motivação · zoom out agressivo · cortes de montagem rápida.

---

## CHECKLIST ANTES DE EXECUTAR QUALQUER PROMPT

- [ ] Sujeito nas primeiras 10 palavras?
- [ ] Ação concreta com objeto e função visíveis?
- [ ] Textura do produto descrita sensorialmente?
- [ ] Local específico (não genérico)?
- [ ] EPIs coerentes com a atividade listados?
- [ ] Temperatura de luz especificada?
- [ ] Grain e estilo de câmera definidos?
- [ ] Restrições negativas concretas no final?
- [ ] Zero termos banidos?
- [ ] Engine certa pelo roteamento (roteamento-imagem.md)?
- [ ] Referência de produto anexada (quando produto real)?
- [ ] Texto (se houver) entre aspas com posição definida?

# ESTÉTICA HÍBRIDA FORTIS — Banco de Estilos

Perfil = loja educativa e vendedora de verdade. Não estúdio de IA.

## TIPOGRAFIA SOCIAL (substitui Aoboshi One em todo conteúdo novo)

| Uso | Fonte | Peso | Regra |
|---|---|---|---|
| Headline / título | **Montserrat** | 800-900 | caps ou sentence case, line-height 1.05-1.15 |
| Impacto / urgência (capas de reel, sexta URGÊNCIA) | **Anton** | 400 (já é pesada) | ALL CAPS, condensada, máx 5 palavras |
| Corpo / explicação | **Inter** | 500-700 | nunca abaixo de 52px em carrossel, 44px em estático |
| Labels / eyebrows | **Inter** | 700 | caps, tracking +0.05em |

Google Fonts: `family=Montserrat:wght@700;800;900&family=Anton&family=Inter:wght@400;500;600;700`
ImageMagick (fontes locais): instalar uma vez em `~/Library/Fonts/` (Montserrat-Black.ttf, Anton-Regular.ttf, Inter-Bold.ttf). Fallback de sistema: Verdana Bold.
Por quê: tipografia nativa de rede social, máxima legibilidade mobile. Aoboshi One aposentada (era serif decorativa, lia mal em tela pequena).

## OS 3 ESTILOS

| Estilo | Quando | Engine | Faixa laranja |
|---|---|---|---|
| **LOJA REAL** | bastidor, produto na mão, dica, prova social | Nano Banana Pro | dispensável (logo solto 52px canto SE) — mas SEMPRE com camada editorial: headline + info útil (CA/norma/benefício). Foto crua sozinha = reprovado |
| **COMERCIAL LIMPO** | produto da semana, oferta, texto na arte, datas | gpt-image-2 | obrigatória (80px, logo dentro) |
| **AVATAR CINEMATOGRÁFICO** | SÓ reels especiais, máx 1×/semana | Gemini i2i + Higgsfield | n/a (vídeo) |

## REGRAS DE VARIAÇÃO (invioláveis)

- Nunca 2 posts seguidos no mesmo estilo
- Registrar estilo na coluna do calendário a cada post
- Semana ideal: 3 LOJA REAL / 3 COMERCIAL LIMPO / 1 tipográfico (domingo)
- Avatar oficial PROIBIDO fora de reel especial
- Faixa laranja: **alternar post a post** — se o post anterior teve faixa, o próximo pode ir sem; se foi sem, o próximo pode ter. Máx 50% da semana sem faixa.
- Rastrear em STATUS.md: "Última faixa laranja: sim | não — próximo pode ser X"

## RECEITAS DE PROMPT — LOJA REAL (inglês, Nano Banana Pro)

Base obrigatória em todas: `shot on smartphone, natural light, slightly off-center framing, imperfect but sharp, no studio lighting, no cinematic look, no dramatic lighting`

1. **Balcão**: `real Brazilian safety equipment store counter, [PRODUTO] on counter with box and tag, mixed fluorescent and window light, eye-level phone photo`
2. **Mão segurando**: `customer hand holding [PRODUTO] inside a safety equipment store, shelves blurred naturally in background, daylight from storefront`
3. **Prateleira/estoque**: `stocked shelf of a real Brazilian PPE store, boxes slightly uneven, price tags removed, fluorescent store light`
4. **Em uso real**: `worker putting on [PRODUTO] at a real job site in Brazil, dusty environment, handheld phone photo, candid not posed`
5. **Bastidor**: `behind the counter of a small Brazilian safety store, cardboard boxes being opened, natural daylight, candid documentary feel`

## RECEITAS DE PROMPT — COMERCIAL LIMPO (inglês, gpt-image-2)

Base obrigatória: `professional retail advertisement, clean composition, text in Brazilian Portuguese, text appears exactly once, no logos, no orange bar`

1. **Produto herói**: `[PRODUTO] hero shot on neutral light background, soft even retail lighting, headline "[TEXTO PT-BR máx 8 palavras]"`
2. **Certo × errado**: `split comparison layout, left side wrong usage, right side correct usage of [PRODUTO], labels "ERRADO" and "CERTO"`
3. **Data comemorativa**: `commemorative retail layout for [DATA], [ELEMENTO VISUAL DO TEMA], headline "[TEXTO PT-BR]"`
4. **Specs visuais**: `clean infographic-style product card for [PRODUTO], 3 short feature callouts in Brazilian Portuguese`

## AVATAR CINEMATOGRÁFICO (só reel especial)

Modelo oficial: `Brazilian male worker, approximately 35-42 years old, short dark stubble beard, short dark hair, white hard hat, orange high-visibility safety vest over black shirt, serious and confident expression`
Higgsfield Soul Character ID: `4055d093-c0f0-4951-a65b-8e5aff3a7b60`

## TERMOS BANIDOS EM QUALQUER PROMPT

`cinematic`, `dramatic lighting`, `epic`, `hyper detailed`, `8k`, `masterpiece`, logo, faixa laranja, cores hex.

## COMPOSIÇÃO PÓS-GERAÇÃO

- LOJA REAL: `magick in.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1350 out.png` + logo solto `-gravity SouthEast -geometry +24+24` (logo branco ou preto conforme fundo)
- COMERCIAL LIMPO: composite atual com faixa 80px #FD7A22 + logo dentro da faixa `-geometry +24+14 -resize x52`

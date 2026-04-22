Design Rules — Fortis

All design must:

- prioritize clarity and readability
- be mobile-first
- have strong hierarchy
- use contrast correctly
- follow brand colors

Avoid:

- visual pollution
- excessive effects
- unreadable text
- repeated layouts

Design must support the message, not compete with it.

---

FEED BALANCE — LIGHT VS DARK

The feed must never be entirely dark.

Alternate between dark and light posts to maintain visual balance.

Pattern to follow:

- Dark post → next must be lighter
- Two consecutive dark posts → never acceptable
- Sunday motivational → always light or neutral background

Light post palette (apply when alternating):
- Off-white backgrounds: #F5F5F0, #FAFAF5
- Light concrete or industrial textures (bright, not gloomy)
- High contrast: dark text on light background
- Orange and blue as accent only

Dark post palette:
- Deep navy: #0D1B2A, #162032
- Near-black: #0D0D0D
- High contrast: white or orange text on dark background

When in doubt, choose light.

A dark feed kills reach. A varied feed retains attention.

---

IMAGE GENERATION WORKFLOW

CRITICAL — All final posts must be exactly 1080x1350px (Instagram 4:5).
Imagen 4 generates 896x1280 (3:4). Always convert before compositing:
  magick input.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1350 output_1080.png

Posts with people (model/character):
- Claude generates the photo via Imagen 4
- Claude converts to 1080x1350
- Claude composites overlay + text + orange bar + logo via ImageMagick
- Claude shows result to user for approval before saving

Posts without people:
- Claude generates via Nano Banana
- Claude converts to 1080x1350 if needed
- Claude adds orange bar and logo via ImageMagick
- Claude shows result to user for approval before saving

Logo rule:
- Never include logo in generation prompts — AI generates fake logos
- Logo always added in post-processing via ImageMagick
- logo preto (03_logo_preto.png) → faixa laranja ou fundo claro
- logo branco (04_logo_branco.png) → fundo escuro (navy/preto)
- CSS position in HTML: bottom: 10px; right: 24px; height: 50px (inside 70px orange bar)
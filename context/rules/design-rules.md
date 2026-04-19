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

Posts with people (model/character):
- Claude generates the prompt only
- User executes manually to control the brand model
- User adds logo manually

Posts without people (abstract, typographic, geometric):
- Claude executes Nano Banana
- Orange bar (#FD7A22) added via ImageMagick post-processing
- Logo added manually by user OR via ImageMagick for fully automated posts

Logo rule:
- Never include logo in Nano Banana prompts — AI always generates a fake logo
- Logo is always added in post-processing (manually or ImageMagick)
- Only apply automatic logo compositing when the post needs no manual intervention
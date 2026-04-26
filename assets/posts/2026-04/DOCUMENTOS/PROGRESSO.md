# Progresso — Produção de Conteúdo Abril 2026

**Última atualização:** 13 de abril de 2026  
**Pasta do projeto:** `~/Desktop/fortis-core/assets/posts/2026-04/`  
**Planejamento completo:** `~/Desktop/fortis-core/planejamento-abril-2026.html`

---

## ✅ CONCLUÍDO

### Dom 12 — Estático Motivacional (já publicado antes)
- Imagem: `dom-12-estatico-motivacional.png` (fundo claro, gerado via Nano Banana)
- Status: pendente publicação (aguarda usuário adicionar logo)

### Seg 13 — Reel: Como colocar protetor auricular corretamente
- Pasta: `seg-13-reel-auditiva/`
- Vídeo final: `~/Desktop/fortis-core/assets/posts/2026-04/seg-13-reel-auditiva/` ← verificar caminho exato
- Arquivo Remotion: `~/Desktop/fortis-core/video/src/ReelAuditiva.jsx`
- Narração: `~/Desktop/fortis-core/video/public/narracao.mp3` (34.6s, trimado)
- Imagens do vídeo: usuário insere manualmente (modelo-errado.png, modelo-certo.png, capa.png)
- Status: ✅ vídeo renderizado `reel-auditiva.mp4` (4.1MB, 35s, 1080x1920)
- Observação: usuário ainda não publicou — aguarda inserção de imagens

### Qua 15 — Carrossel: Tipos de Biqueira do Calçado de Segurança
- Capa: `qua-15-capa-biqueiras.png` (2 calçados no chão de fábrica, barra laranja aplicada)
- Slides HTML: `qua-15-carrossel-biqueiras.html` (8 slides com imagens — baixar via botão ZIP)
- Imagens dos slides: `image-1776040723099.png` (aço), `image-1776040776896.png` (composite), `image-1776040841489.png` (plástica)
- Status: ✅ HTML completo com capa + imagens nos slides 3/4/5
- Observação: usuário precisa abrir o HTML e clicar "Baixar Todos" para exportar os PNGs

---

## ✅ CONCLUÍDO: Sex 17 — Carrossel: 4 Formas de Usar Luva Errado

- Capa: `sex-17-capa-luvas.png` (fundo navy #0D1B2A, barra laranja aplicada via ImageMagick)
- Capa raw: `sex-17-capa-luvas-raw.png` (sem barra laranja)
- Slides HTML: `sex-17-carrossel-luvas.html` (8 slides internos, logo embutido base64)
- Pilar: Certo vs. Errado / Consciência de risco
- Fundo: ESCURO navy #0D1B2A ✅ (post anterior Qua 15 era claro)
- Status: ✅ HTML completo com 8 slides (slides 2–9) + capa gerada
- Observação: usuário precisa abrir o HTML e clicar "Baixar Todos" para exportar os PNGs. Adicionar logo manualmente na capa.

---

## 📅 CALENDÁRIO RESTANTE (13–30 abril)

| Data | Formato | Tema | Status |
|------|---------|------|--------|
| Seg 13 | Reel | Protetor auricular — técnica correta | ✅ Produzido |
| Qua 15 | Carrossel | Tipos de biqueira do calçado | ✅ Produzido |
| Sex 17 | Carrossel | 4 formas de usar luva errado | ✅ Produzido |
| Dom 19 | Estático | Motivacional (fundo claro) | ✅ Produzido |
| Seg 20 | Carrossel | Respirador: filtros e usos | Pendente |
| Qua 22 | Reel | Cinto de segurança altura — certo vs. errado | Pendente |
| Sex 24 | Carrossel | Como ler o CA de um EPI | Pendente |
| Dom 26 | Estático | Motivacional (fundo claro) | Pendente |
| **Ter 28** | **Especial** | **Abril Verde — Universalização da Proteção** | **Pendente** |
| Qua 29 | Carrossel | Óculos de segurança: grau + proteção | Pendente |
| Sex 30 | Reel | Recap mês da prevenção | Pendente |

---

## 🗒️ REGRAS IMPORTANTES LEMBRAR

- **Feed alternância:** nunca 2 posts escuros seguidos. Dom = sempre claro.
- **Logo:** nunca colocar logo no prompt do Nano Banana — usuário adiciona depois
- **Pessoa no post:** só gerar prompt, enviar ao usuário para execução manual
- **Sem pessoa:** executar Nano Banana + pós-processar barra laranja com ImageMagick
- **Voz ElevenLabs:** voz "fortis" — nunca usar sigla "EPI" na narração (substituir por "equipamentos de proteção")
- **Norma técnica:** ABNT NBR ISO 20345 (calçados), sempre citar quando relevante

---

## 🛠️ FERRAMENTAS E CAMINHOS

- Imagens: `node ~/.claude/mcp/nanobanana/server.js "prompt"`
- Voz: `node ~/.claude/mcp/elevenlabs/server.js "fortis" "texto"`
- Vídeo: `cd ~/Desktop/fortis-core/video && npx remotion render ReelAuditiva`
- Logo base64: `base64 -i [logo.png] | tr -d '\n' > /tmp/logo_b64.txt`
- Barra laranja: `magick input.png \( -size 1080x70 xc:"#FD7A22" \) -geometry +0+1280 -composite output.png`

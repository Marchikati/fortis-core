# REGRAS DE PRODUÇÃO — INOVA FORTIS EPIs
> Documento vivo. Atualizar sempre que surgir novo erro ou aprendizado.

---

## NANO BANANA — PROMPTS DE IMAGEM

### REGRAS OBRIGATÓRIAS

**Texto na imagem:**
- Usar APENAS UM elemento de texto por prompt
- Texto curto, sem quebras longas: max 10 palavras
- Nunca colocar texto principal + texto secundário no mesmo prompt → modelo duplica
- Sempre incluir: `text appears exactly once, no other text elements, no captions`
- Texto sempre em português do Brasil

**O que NUNCA mencionar no prompt:**
- Logo, logotipo, marca → modelo gera logo falso
- Barra laranja, faixa colorida, rodapé colorido → modelo coloca no lugar errado
- Cor específica de marca (#FD7A22, etc.) → pode gerar elementos indesejados
- Dois textos distintos no mesmo prompt → causa duplicação

**Para imagens com pessoa:**
- Sempre descrever cena completa: trabalhador com tronco visível, contexto industrial
- Nunca: "close-up of hands" isolado → gera membros sem contexto
- Modelo: "Brazilian male worker in his 30s [fazendo ação específica] at [local específico]"
- Posts com pessoa: APENAS gerar prompt → enviar ao usuário para execução manual

**Estrutura padrão de prompt (sem pessoa):**
```
[Estilo visual], [fundo/cenário], single [tipo de texto] text appearing exactly once: '[TEXTO EM PT-BR]', [elementos gráficos], no other text elements, no logos, no orange bar, [ratio]
```

**Estrutura padrão de prompt (com pessoa):**
```
Ultra-realistic photograph of a Brazilian [gênero] worker in [idade]s [ação específica completa] at [local industrial específico], [detalhes de equipamento], [iluminação], high contrast, sharp focus, photorealistic, 16:9 landscape, no text, no logos
```

---

## PÓS-PROCESSAMENTO — IMAGEMAGICK

### Barra laranja no rodapé

**Sempre verificar dimensões antes:**
```bash
magick identify arquivo.png | awk '{print $3}'
# retorna: LARGURAxALTURA
```

**Fórmula:**
- Altura da barra: 70px
- Posição Y = ALTURA - 70

```bash
magick input.png \
  \( -size LARGURAx70 xc:"#FD7A22" \) \
  -geometry +0+$(ALTURA-70) -composite \
  output.png
```

**Exemplo para 1856x2304:**
```bash
magick input.png \( -size 1856x70 xc:"#FD7A22" \) -geometry +0+2234 -composite output.png
```

---

## HTML DE CARROSSÉIS

### Logo
```css
.logo-img {
  position: absolute;
  bottom: 10px;       /* dentro da barra laranja de 70px */
  right: 24px;
  height: 50px;       /* centralizado na barra */
  width: auto;
  z-index: 11;
}
```

### Imagens embutidas (base64)
- **Sempre redimensionar antes de embedar**
- Tamanho máximo por imagem: 1080px wide, JPEG 85%
- Imagem de zona (ex: 1080×540): `magick input.png -resize 1080x540^ -gravity center -extent 1080x540 -quality 85 output.jpg`
- Capa: redimensionar para 1080×1350 antes de base64
- Meta: HTML final máximo ~5MB

### Regras visuais
- **Nunca** adicionar numeração de slides (02/09, etc.)
- **Sempre** incluir capa como slide 1 no HTML
- **Sempre** incluir botão "Baixar Todos (.zip)" e botão individual por slide
- html2canvas: `scale: 2` para qualidade 2× (exporta em 2160×2700px)
- Texto: opacity mínima 0.85 para secundário, 1.0 para principal

### Contraste de texto obrigatório
| Tipo | Cor mínima |
|------|-----------|
| Título principal | `#ffffff` (100%) |
| Corpo/bullets | `rgba(255,255,255,0.90)` |
| Texto secundário | `rgba(255,255,255,0.85)` |
| Nunca abaixo de | `rgba(255,255,255,0.80)` |

---

## REGRAS DE FEED

| Regra | Detalhe |
|-------|---------|
| Alternância | Nunca 2 posts escuros seguidos |
| Domingo | Sempre fundo claro (#F5F5F0 ou industrial claro) |
| Fundo escuro | Navy #0D1B2A ou preto #0D0D0D |
| Fundo claro | #F5F5F0 ou texturas industriais claras |

---

## FLUXO DE VERIFICAÇÃO ANTES DE ENTREGAR

### Imagem gerada (Nano Banana)
- [ ] Texto aparece apenas uma vez?
- [ ] Não há logo falso?
- [ ] Não há faixas coloridas em posição errada?
- [ ] Resolução gerada: verificar com `magick identify`
- [ ] Barra laranja adicionada via ImageMagick (não pelo modelo)?

### HTML de carrossel
- [ ] Logo dentro da barra laranja (bottom: 10px)?
- [ ] Nenhuma numeração de slides?
- [ ] Capa embutida como slide 1?
- [ ] Tamanho do arquivo HTML ≤ 5MB?
- [ ] Contraste de todos os textos ≥ 0.85?
- [ ] html2canvas scale: 2?
- [ ] Botão ZIP funcionando?

### Estático
- [ ] Texto sem duplicação?
- [ ] Barra laranja no rodapé correto?
- [ ] Usuário informado para adicionar logo manualmente?

---

## SITE DA MARCA
Sempre usar: **fortisepis.com.br**

## NARRAÇÃO (ELEVENLABS)
- Voz Fortis: `"fortis"`
- NUNCA usar sigla "EPI" → substituir por "equipamentos de proteção" ou "êpêí"
- Comando: `node ~/.claude/mcp/elevenlabs/server.js "fortis" "texto"`

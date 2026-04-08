# /gerar-conteudo

Gera o briefing completo de conteúdo para um dia específico do calendário Fortis.

**Como usar:**
- `/gerar-conteudo` → gera o brief do dia atual
- `/gerar-conteudo 07/04` → gera o brief para a data informada
- `/gerar-conteudo amanha` → gera o brief do próximo dia

## Instruções

Quando este comando for invocado:

1. **Identifique a data** — use a data informada pelo usuário ou o dia atual (hoje é sempre referenciado pelo sistema). Converta para formato YYYY-04-DD para buscar no calendário.

2. **Leia o calendário** — acesse o arquivo `02_execucao_criativa/calendario_abril_2026.json` e localize a entrada para a data solicitada.

3. **Leia os arquivos de marca** antes de gerar qualquer conteúdo:
   - `01_marca/01_posicionamento.md`
   - `01_marca/02_voz_da_marca.md`
   - `02_execucao_criativa/06_regras_de_proibicao.md`

4. **Gere o briefing completo** no formato abaixo, adaptado ao formato do dia (Reel, Carrossel ou Estático).

---

## Formato de saída obrigatório

### CABEÇALHO
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORTIS · BRIEF DO DIA — [DATA]
[FORMATO] · [TEMA]
Pilar: [PILAR] · Retenção prevista: [%]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### GANCHO
O gancho principal do conteúdo, exatamente como deve aparecer no primeiro frame/slide.

### SE FOR REEL — entregar:

**PROMPT VEO3 / RUNWAY (em inglês):**
Prompt completo para geração de vídeo IA. Incluir: cena, ação, iluminação, estilo visual, paleta de cores, texto overlay, duração, ritmo.

**SCRIPT CAPCUT:**
Sequência frame a frame com timing, texto overlay e cor de cada elemento. Formato pronto para montar no CapCut.

**LEGENDA (caption) completa** com quebras de linha naturais para o Instagram.

**HASHTAGS** — separadas por espaço, 15 no máximo.

**CTA DE SEGUIMENTO** — frase específica para o último frame.

### SE FOR CARROSSEL — entregar:

**PROMPT DE CAPA (em inglês):**
Prompt completo para Midjourney / Ideogram / DALL-E. Incluir: cena fotorrealista, texto em português que deve aparecer, composição, iluminação, logo Fortis, linha laranja no rodapé, proporção 1080x1350px.

**SPECS CANVA — slide a slide:**
Para cada slide:
- Número e nome do slide
- Cor de fundo (hex)
- Todos os textos com fonte, tamanho e cor (hex)
- Layout (centralizado, topo, divisão etc.)
- Elementos visuais (linha, ícone, caixa colorida)
- Posicionamento do logo

**LEGENDA completa** para o Instagram.

**HASHTAGS.**

**CTA DE SEGUIMENTO** — qual slide e texto exato.

### SE FOR ESTÁTICO — entregar:

**SPECS CANVA completo:**
Layout detalhado com todos os elementos, posições, fontes, cores e textos exatos.

**PROMPT alternativo** para gerar via IA de imagem se preferir.

**LEGENDA completa.**

**HASHTAGS.**

---

## Regras de geração

- Nunca usar linguagem genérica ou de influenciador
- Nunca suavizar o risco
- Manter voz da marca: firme, técnica, acessível, direta
- CTA de seguimento deve ser específico, nunca "segue minha página"
- Cores da marca: Azul #365EB5 · Laranja #FD7A22 · Amarelo #FFD754 · Preto #0d0d0d
- Fontes: Aoboshi One para títulos · Open Sans para corpo
- Dimensão: sempre 1080x1350px (4:5)
- Logo: sempre no rodapé, branco sobre fundo colorido
- Se o conteúdo do dia tiver `"status": "feito"`, informar que já foi gerado e perguntar se quer o brief de outro dia

---

## Após entregar o brief, sempre perguntar:

"Quer que eu gere agora:
→ O HTML completo dos slides (carrossel)?
→ O prompt de capa formatado?
→ O script detalhado para CapCut?
→ Ou o brief do próximo dia?"

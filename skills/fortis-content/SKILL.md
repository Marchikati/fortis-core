---
name: fortis-content
description: >
  Sistema completo de produção de conteúdo em massa para a Inova Fortis EPIs.
  Use este skill SEMPRE que o usuário pedir qualquer tipo de conteúdo para a Fortis:
  carrossel, reel, post estático, stories, roteiro, narração, imagem, vídeo, calendário editorial
  ou planejamento de conteúdo. Também ativa quando o usuário disser "cria um conteúdo",
  "faz um carrossel", "preciso de um reel", "gera uma imagem", "faz a narração",
  "planeja o mês", "cria o calendário" ou qualquer variação — se o contexto for Fortis EPIs,
  este skill deve ser invocado antes de qualquer resposta.
---

# Fortis Content — Sistema de Produção

Você é o sistema de produção de conteúdo da **Inova Fortis EPIs**.
Antes de qualquer execução, leia `references/marca.md` para carregar o contexto completo da marca.

## Fluxo obrigatório por tipo de conteúdo

Identifique o que foi pedido e execute o fluxo correspondente sem parar entre etapas.

---

### CARROSSEL

1. Escolher pilar editorial (ver `references/marca.md` → Pilares)
2. Definir ângulo único e gancho forte
3. Criar estrutura: capa + 6–8 slides internos + slide de fechamento
4. Gerar todos os slides em HTML completo (ver regras abaixo)
5. Gerar capa como prompt em inglês (ver regras abaixo)
6. Executar imagem da capa se não houver pessoa na cena
7. Entregar CTA coerente

**Regras do HTML:**
- Dimensão por slide: `1080×1350px` (proporção 4:5)
- Um único arquivo `.html` com todos os slides internos
- Logo da Fortis em todos os slides como base64 (nunca caminho relativo)
- Posição do logo: canto inferior direito, acima da linha laranja
- Linha laranja `#FD7A22` de 70px no rodapé de cada slide
- Botão "Baixar PNG" por slide + botão "Baixar Todos (.zip)" no topo
- Usar `html2canvas` para captura e `JSZip` para empacotamento
- Variar layout, paleta dominante e composição entre slides — nunca todos iguais
- Tamanho mínimo de texto: títulos 56px, subtítulos 32px, corpo 26px, labels 18px
- Nenhum texto com opacity abaixo de 0.6 ou cor abaixo de `#666666` em fundo escuro

**Regras da capa (gerada externamente):**
- Sempre um prompt completo em inglês
- Texto visível na imagem sempre em português do Brasil
- Um único elemento de texto por prompt
- Descrever cena realista + iluminação cinematográfica + composição
- Finalizar com: `"text appears exactly once, no other text elements, no logos, no orange bar"`
- NUNCA incluir logo, linha laranja ou cores hex no prompt (gera artefatos)
- Alternância claro/escuro: verificar o post anterior antes de definir o fundo

**Se a cena tiver pessoa:**
→ Gerar apenas o prompt em inglês, não executar. Enviar ao usuário para execução manual.
Descrição obrigatória do modelo: `Brazilian male worker, approximately 35-42 years old, short dark stubble beard, short dark hair, white hard hat, orange high-visibility safety vest over black shirt, serious and confident expression, cinematic dramatic industrial lighting`

**Se não tiver pessoa:**
→ Antes de executar: confirmar que a imagem retrata EXATAMENTE o produto do conteúdo.
  Carrossel de capacete = imagem de capacete. Carrossel de luvas = imagem de luvas.
  NUNCA usar imagem genérica ou de produto diferente do tema.
  NUNCA usar imagem que pareça gerada por IA — prompts devem forçar fotorrealismo de produto,
  iluminação de estúdio ou industrial real, sem brilhos artificiais ou composições impossíveis.
→ Executar: `node ~/.claude/mcp/nanobanana/server.js "prompt gerado"`
→ Verificar dimensões: `magick identify arquivo.png | awk '{print $3}'`
→ Adicionar barra laranja: `magick arquivo.png \( -size LARGURAx70 xc:"#FD7A22" \) -geometry +0+$(ALTURA-70) -composite arquivo_final.png`
→ Informar nome do arquivo final

---

### REEL / VÍDEO

1. Criar roteiro completo (gancho 3s + desenvolvimento + fechamento + CTA)
2. Gerar capa do Reel (mesmo fluxo da capa do carrossel)
3. Gerar narração via ElevenLabs
4. Montar via Remotion quando houver imagem + áudio

**Regras de narração:**
- Frases curtas, pausas com ponto, ritmo natural para fala
- Nunca usar a sigla "EPI" — substituir por "equipamentos de proteção"
- Se absolutamente necessário mencionar a sigla, escrever como "êpêí"
- Executar: `node ~/.claude/mcp/elevenlabs/server.js "fortis" "texto otimizado"`
- Informar nome do arquivo gerado

---

### POST ESTÁTICO

1. Definir objetivo: educativo, reflexivo ou comercial
2. Criar texto principal (headline + corpo curto + CTA)
3. Gerar prompt de imagem seguindo as mesmas regras da capa
4. Executar Nano Banana (se sem pessoa) ou entregar prompt (se com pessoa)

---

### STORIES

- 4–7 stories por dia em três horários: 8h, 12h, 20h
- Usar stickers interativos: enquetes, caixa de perguntas, quiz
- Temas: bastidores, enquete sobre EPI, dica rápida, reforço do post do dia
- Exemplos de perguntas: "Você usa cinto de segurança todo dia?", "Qual equipamento você mais esquece?"

---

### CALENDÁRIO EDITORIAL

Montar grade semanal com este padrão base:

| Dia | Formato | Horário | Pilar sugerido |
|---|---|---|---|
| Terça | Reel de alerta | 19h | Consciência de Risco |
| Quarta | Carrossel educativo | 12h | Educação |
| Quarta | Post estático | 18h | Autoridade Técnica |
| Quinta | Carrossel técnico (NR/CA) | 11h | Autoridade Técnica |
| Quinta | Reel educativo | 19h | Certo vs Errado |
| Sexta | Post estático reflexivo | 17h | Transformação de Mentalidade |
| Diário | Stories | 8h + 12h + 20h | Variado |
| Segunda / Sáb / Dom | Apenas stories | — | Leve / motivacional |

---

## Regras críticas de execução

**Imagem:**
- Nunca logo no prompt (gera logos falsas)
- Nunca linha laranja no prompt (adicionar via ImageMagick depois)
- Nunca dois textos distintos no mesmo prompt
- Nunca dois posts escuros seguidos no feed
- Imagen 4 (`imagen-4:generateContent`) é superior ao Gemini Flash para cenas industriais

**Engajamento 2026:**
- CTAs que geram pergunta aberta são prioridade — comentários valem 150x mais que curtidas
- Responder comentários nos primeiros 30–60 minutos após publicação
- Ganchos devem fazer o público pensar: "isso pode acontecer comigo"

**Imagem x Conteúdo:**
- Imagem deve retratar EXATAMENTE o EPI do tema — capacete = foto de capacete, luva = foto de luva
- Nunca usar imagem de outro produto mesmo que esteja disponível nos assets
- Verificar visualmente o asset antes de usar — não confiar só no nome do arquivo
- Fotorrealismo obrigatório: iluminação natural ou industrial real, texturas reais, sem brilhos de IA
- Antes de escolher qualquer imagem do assets, confirmar que ela condiz com o tema do slide

**Conteúdo:**
- Nunca genérico, nunca repetitivo, nunca apenas estético
- Todo conteúdo deve ensinar, alertar ou corrigir comportamento
- Progressão obrigatória entre slides — nunca repetir a mesma ideia

**Ferramentas:**
- Não sugerir. Executar.
- Se a API retornar erro: reportar o erro exato e exibir o que seria gerado
- Não fingir que a execução ocorreu

---

## Contexto da marca

Leia `references/marca.md` para:
- Posicionamento, essência e crença central
- 5 pilares editoriais com diretrizes de cada um
- Público-alvo com dores e gatilhos
- Identidade visual completa (cores, tipografia, logo)
- Biblioteca de ganchos por categoria
- Tipos de CTA e quando usar cada um
- Regras de proibição

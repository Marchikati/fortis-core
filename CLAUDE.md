PROJETO INOVA FORTIS EPIs — SISTEMA DE CARROSSÉIS

Você está trabalhando com a marca Inova Fortis EPIs.

Antes de criar qualquer conteúdo, leia sempre:

* 01_marca/01_posicionamento.md
* 01_marca/02_voz_da_marca.md
* 01_marca/03_publico.md
* 01_marca/04_pilares_editoriais.md
* 01_marca/05_essencia_da_marca.md
* 01_marca/06_territorio_de_comunicacao.md
* 01_marca/07_identidade_visual.md
* 01_marca/08_momento_da_marca.md

Utilize também:

* 02_execucao_criativa/01_Estrutura_de_Carrossel.md
* 02_execucao_criativa/02_ganchos.md
* 02_execucao_criativa/03_Direção_Visual_de_Carrossel.md
* 02_execucao_criativa/04_cta.md
* 02_execucao_criativa/05_conteudo_comercial.md
* 02_execucao_criativa/06_regras_de_proibicao.md
* 02_execucao_criativa/07_template_de_entrega.md

Referências visuais:

* 03_referencias/

Assets da marca:

* 04_assets/

REGRAS OBRIGATÓRIAS

* Nunca gerar conteúdo genérico
* Nunca repetir fórmulas de forma óbvia
* Sempre seguir o posicionamento da marca
* Sempre manter clareza e utilidade
* Sempre ensinar algo aplicável
* Sempre considerar os pilares editoriais
* Evitar clichês
* Evitar linguagem vazia
* Evitar excesso de informação
* Evitar redundância entre ideia e execução

DIREÇÃO DE CONTEÚDO

Sempre que criar um carrossel:

1. Escolher um pilar editorial
2. Definir um ângulo claro para o tema
3. Criar um gancho forte
4. Garantir valor real no conteúdo
5. Manter progressão entre os slides
6. Inserir CTA coerente
7. Entregar no formato definido em 07_template_de_entrega.md

DIREÇÃO VISUAL

* Seguir 03_Direção_Visual_de_Carrossel.md
* Garantir contraste e legibilidade
* Utilizar elementos visuais com função
* Evitar poluição visual
* Garantir leitura fácil em mobile
* Variar composição, tipografia e ritmo visual entre carrosséis

CAPA — REGRA CRÍTICA

* Sempre gerar como prompt completo em inglês
* Não entregar a capa como layout
* Incluir cena realista
* Incluir texto em português
* Incluir tipografia e composição
* Incluir linha laranja no rodapé
* Incluir logo visível e proporcional
* Evitar repetição de estilo entre capas

OBJETIVO

Criar carrosséis que:

* prendam atenção
* ensinem algo útil
* gerem reflexão
* sejam compartilháveis
* reforcem autoridade
* apoiem vendas de forma natural

DIREÇÃO ESTRATÉGICA

A Fortis tem dois objetivos principais:

* construir autoridade
* gerar vendas de forma natural

O conteúdo deve:

* educar
* corrigir comportamento
* gerar consciência
* preparar o público para compra

Evitar:

* venda direta agressiva
* conteúdo sem valor
* propaganda evidente
* repetição visual
* repetição de lógica
* respostas engessadas

REGRA FINAL

O conteúdo da Fortis não existe para preencher feed.

Ele existe para ensinar, gerar confiança e, como consequência, vender.

---

FLUXO DE PRODUÇÃO AUTOMÁTICO

Sempre que o pedido envolver vídeo, Reel, carrossel com imagem ou qualquer conteúdo com assets:

1. ROTEIRO — Criar estrutura completa antes de qualquer execução
2. IMAGEM — Gerar via Nano Banana (execução obrigatória)
3. ÁUDIO — Gerar via ElevenLabs (execução obrigatória)
4. VÍDEO — Montar via Remotion quando aplicável

Não parar entre etapas para confirmar.
Não sugerir ferramentas. Executar.

---

GERAÇÃO DE IMAGEM — EXECUÇÃO OBRIGATÓRIA

Sempre que o conteúdo exigir imagem (capa de carrossel, capa de Reel, slide visual):

ETAPA 1 — CRIAR PROMPT
- Prompt sempre em inglês
- Texto visível na imagem sempre em português do Brasil
- Incluir: cena realista, iluminação cinematográfica, composição de anúncio
- NUNCA incluir logo no prompt — o Nano Banana gera logos falsas
- NUNCA incluir linha laranja no prompt — adicionar via ImageMagick depois
- NUNCA mencionar cores de marca (#FD7A22, etc.) — gera elementos em posição errada
- NUNCA colocar dois textos distintos no mesmo prompt — o modelo duplica frases
- SEMPRE usar apenas UM elemento de texto por prompt
- SEMPRE incluir ao final: "text appears exactly once, no other text elements, no logos, no orange bar"
- Para imagens com pessoa: descrever trabalhador completo (tronco visível + ação específica)
- NUNCA usar "close-up of hands" isolado — gera membros sem contexto
- Revisar o prompt antes de executar — se estiver fraco, melhorar

ETAPA 2 — VERIFICAR DIMENSÕES APÓS GERAÇÃO

Sempre executar antes do pós-processamento:
magick identify imagem_gerada.png | awk '{print $3}'
→ Anotar LARGURA e ALTURA para calcular posição da barra

ETAPA 3 — VERIFICAR SE HÁ PESSOA NA CENA

Se o post exigir pessoa (modelo da Fortis):
→ Gerar apenas o prompt em inglês
→ Enviar o prompt ao usuário para execução manual
→ Não executar o Nano Banana
→ Usuário adiciona logo e faz ajustes finais manualmente

Se o post NÃO exigir pessoa:
→ Executar o Nano Banana normalmente
→ Verificar imagem gerada antes de prosseguir (texto duplicado? artefatos?)
→ Pós-processar com ImageMagick para adicionar barra laranja (#FD7A22) no rodapé

ETAPA 4 — PÓS-PROCESSAMENTO (só para posts sem pessoa)

# Verificar dimensões primeiro:
magick identify imagem_gerada.png | awk '{print $3}'
# Exemplo resultado: 1856x2304 → LARGURA=1856, ALTURA=2304, Y=2234

magick imagem_gerada.png \
  \( -size LARGURAx70 xc:"#FD7A22" \) -geometry +0+$(ALTURA-70) -composite \
  imagem_final.png

ETAPA 5 — INFORMAR
- Se executou: informar nome do arquivo gerado e pós-processado
- Se enviou prompt: informar que o prompt está pronto para execução manual
- Se houver erro de API: reportar o erro e exibir o prompt

REGRA CRÍTICA DE FEED — ALTERNÂNCIA CLARO/ESCURO
- Nunca dois posts escuros seguidos
- Domingo (motivacional) → sempre fundo claro ou neutro
- Verificar o post anterior antes de definir o fundo do próximo
- Posts claros: fundo #F5F5F0 ou texturas industriais claras
- Posts escuros: navy #0D1B2A ou preto #0D0D0D

---

GERAÇÃO DE ÁUDIO — EXECUÇÃO OBRIGATÓRIA

Sempre que o conteúdo exigir narração, locução ou voz (Reels, roteiros com fala):

ETAPA 1 — PREPARAR TEXTO
- Otimizar o texto para fala: frases curtas, ritmo natural, pausas marcadas com ponto
- Remover formatação visual (bullets, símbolos, emojis)
- REGRA CRÍTICA DE NARRAÇÃO: nunca usar a sigla "EPI" em narrações
  - Substituir sempre por "equipamentos de proteção"
  - Se a sigla for necessária por contexto, escrever como "êpêí" para leitura correta
  - Essa substituição é obrigatória e deve ser feita antes de executar o script

ETAPA 2 — EXECUTAR

node ~/.claude/mcp/elevenlabs/server.js "fortis" "texto otimizado"

Voz padrão para Fortis: "fortis"

ETAPA 3 — INFORMAR
- Informar o nome do arquivo de áudio gerado
- Se houver erro de API, reportar o erro e exibir o texto que seria narrado

REGRA: nunca substituir a execução por uma transcrição sem gerar o arquivo.

---

MONTAGEM DE VÍDEO — REMOTION

Quando o pedido for vídeo ou Reel com animação:

1. Usar os assets gerados nas etapas anteriores (imagem + áudio)
2. Referenciar o roteiro criado na etapa 1 do fluxo
3. Montar via Remotion com os arquivos gerados
4. Entregar o vídeo pronto para exportação

Remotion é usado apenas quando há roteiro + assets disponíveis.
Não iniciar a montagem sem ter imagem e áudio gerados.

---

REGRA DE EXECUÇÃO — SEM SUGESTÃO

As ferramentas abaixo não são opcionais e não devem ser apenas sugeridas:

- node ~/.claude/mcp/nanobanana/server.js → para imagens
- node ~/.claude/mcp/elevenlabs/server.js → para áudio
- Remotion → para vídeos

Se a API retornar erro:
- Reportar o erro exato
- Informar o arquivo que seria gerado
- Não fingir que a execução ocorreu

Se a API funcionar:
- Informar o nome do arquivo gerado
- Continuar para a próxima etapa do fluxo sem parar

Nunca descrever o que seria feito no lugar de fazer.


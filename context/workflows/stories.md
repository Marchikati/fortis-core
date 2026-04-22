# WORKFLOW — STORIES | Inova Fortis EPIs

> Leia APENAS este arquivo para criar stories. Ele contém tudo.

---

## ALMA DA MARCA

**Posicionamento:** A loja que te ensina a se proteger de verdade.
**Tom nos stories:** mais leve que o feed, mas nunca vazio. Bastidores, perguntas, reforço do post.
**Nunca:** motivacional vazio, conteúdo sem propósito, linguagem de influenciador.

---

## ESTRUTURA DIÁRIA

Mínimo **5 stories por dia** nos dias com post no feed.
Três momentos: **8h · 12h · 20h**

```
8h  → 1–2 stories de abertura (bastidores OU teaser do post)
12h → 1–2 stories de meio de dia (dica rápida OU enquete OU repost do post)
20h → 1–2 stories de fechamento (reflexão OU quiz OU CTA de comentários)
```

---

## TIPOS DE STORY (variar sempre)

| Tipo | Quando usar | Sticker |
|---|---|---|
| Teaser do post | Antes de publicar o feed | Seta / "novo post" |
| Repost do feed | Logo após publicar | Botão de compartilhamento |
| Dica rápida | Qualquer horário | Caixinha de texto |
| Enquete sobre EPI | 12h ou 20h | Enquete |
| Quiz técnico | 20h | Quiz |
| Caixinha de perguntas | 12h | Caixinha de perguntas |
| Bastidores | 8h | Sem sticker / espontâneo |
| Contagem regressiva | Antes de lançamento | Contagem regressiva |
| Produto em destaque | 12h ou 20h | Link + produto |

**Regra:** Pelo menos 1 story interativo por dia (enquete, quiz ou caixinha).

---

## EXEMPLOS DE PERGUNTAS PARA STICKERS

**Enquetes:**
- "Você verifica o CA antes de comprar EPI?" → Sim / Às vezes
- "Capacete com CA vencido protege?" → Sim / Não
- "Você usa luva todo dia?" → Sempre / Quando lembro

**Quiz:**
- "O que significa CA?" → Certificado de Aprovação / Código de Acesso
- "Qual é a NR que regula EPIs?" → NR-6 / NR-10

**Caixinha de perguntas:**
- "Qual EPI você tem mais dúvida sobre como usar?"
- "Já teve algum problema com equipamento sem CA?"
- "O que você quer aprender sobre segurança do trabalho?"

---

## ROTEIRO PADRÃO POR DIA (adaptar ao tema do feed)

### Dia com carrossel no feed:
```
8h  → Story 1: teaser — foto do produto + "Você sabe o que mudou na NR-6?"
8h  → Story 2: enquete — pergunta relacionada ao tema
12h → Story 3: repost do carrossel + "Salva esse conteúdo 👆"
12h → Story 4: dica rápida do slide 3 do carrossel
20h → Story 5: caixinha — "Alguma dúvida sobre isso?"
```

### Dia com reel no feed:
```
8h  → Story 1: bastidores do vídeo / teaser
12h → Story 2: repost do reel
12h → Story 3: enquete sobre o tema
20h → Story 4: quiz
20h → Story 5: CTA — "Comentou no reel? A gente responde."
```

### Dia com post estático:
```
8h  → Story 1: teaser da frase do post
12h → Story 2: repost do post + pergunta
20h → Story 3: produto relacionado ao tema
20h → Story 4: enquete
20h → Story 5: caixinha de perguntas
```

---

## FORMATO TÉCNICO — OBRIGATÓRIO

Stories são **sempre 9:16 vertical — 1080×1920px**.

Nunca usar o formato de post do feed (1080×1350) para stories — proporcão errada, aparece cortado.

```bash
# Gerar imagem para story (se necessário via Nano Banana):
node ~/.claude/mcp/nanobanana/server.js "prompt" "9:16"
# Converter para 1080x1920:
magick input.png -resize 1080x -gravity center -background '#0D1B2A' -extent 1080x1920 story.png
```

**Zona segura de texto nos stories:**
- Topo: não colocar texto nos primeiros 150px (cobertos pela UI da plataforma)
- Rodapé: não colocar texto nos últimos 250px (cobertos pela caixinha de resposta)
- Zona segura: entre y=150 e y=1670

---

## VISUAL DOS STORIES

- Fundo: pode ser foto do produto, print do post ou gradiente com a cor da marca
- Texto: curto, direto, legível em mobile
- Logo: não obrigatório em todo story, mas manter identidade visual
- Evitar poluição visual — stories são rápidos

---

## SALVAMENTO

Stories não precisam de arquivo salvo — são criados no momento da publicação.
Registrar apenas o **planejamento** no calendário do mês (`context/calendarios/AAAA-MM.md`).

---

## CHECKLIST FINAL

- [ ] Mínimo 5 stories planejados?
- [ ] Pelo menos 1 interativo (enquete, quiz ou caixinha)?
- [ ] Três horários cobertos (8h, 12h, 20h)?
- [ ] Temas alinhados ao post do dia?
- [ ] Planejamento registrado no calendário do mês?

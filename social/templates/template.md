TEMPLATE DE ENTREGA — INOVA FORTIS EPIs

Sempre que criar um carrossel, seguir este formato.

1. Pilar editorial
   Informar o pilar escolhido.

2. Estrutura
   Informar a lógica do conteúdo.

3. Capa

Entregar apenas um prompt completo em inglês para ferramenta externa de geração de imagem.

O prompt deve incluir:

* cena realista
* ambientação coerente
* texto em português
* tipografia
* composição visual
* linha laranja no rodapé
* logo da Fortis
* cores da marca
* formato 1080x1350px, proporção 4:5

EXEMPLO

Create a realistic industrial construction scene with a Brazilian worker using proper safety equipment, cinematic lighting, strong contrast, professional composition, Portuguese text: "VOCÊ ESTÁ FAZENDO ISSO ERRADO", clean typography, orange line at the bottom, Fortis logo visible, brand colors blue #365EB5 and orange #FD7A22, mobile-first vertical layout, 1080x1350px, 4:5 ratio.

4. Slides internos em HTML

Os slides internos (do slide 2 em diante) devem ser entregues como um arquivo HTML completo.

PADRÃO OBRIGATÓRIO DO HTML

* Um único arquivo .html com todos os slides
* Dimensão de cada slide: 1080x1350px (proporção 4:5)
* Identidade visual da marca aplicada: cores, tipografia, contraste
* Variação de layout entre slides — não repetir composição
* Elementos visuais em todos os slides (linhas, blocos, ícones, destaques)

LOGO OBRIGATÓRIO

O logo da Fortis deve aparecer em todos os slides.

* Arquivo: 04_assets/04_logo_branco.png
* Posição: canto inferior direito, acima da linha laranja
* Tamanho: proporcional e legível
* Fundo: transparente (nunca adicionar fundo ao logo)
* O logo deve ser embutido no HTML como base64 — nunca usar caminho relativo (src="04_assets/...")
* Motivo: caminhos relativos falham no html2canvas quando o arquivo é aberto via file://, impedindo o download

BOTÕES DE DOWNLOAD

O arquivo HTML deve incluir:

* Botão individual "Baixar PNG" em cada slide
* Botão geral "Baixar Todos os Slides (.zip)" no topo da página
* Barra de progresso durante a geração do zip
* Biblioteca html2canvas para captura
* Biblioteca JSZip para empacotamento

5. CTA

Entregar uma chamada para ação coerente com o conteúdo.

REGRA FINAL

A capa é prompt para ferramenta externa.

Os slides internos são HTML pronto para visualizar e baixar.

Não misturar os dois formatos.


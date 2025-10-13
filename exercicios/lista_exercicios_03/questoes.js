const exercicios = [
    {
        id: 1,
        pergunta: "Qual é a declaração DOCTYPE correta para HTML5?",
        codigo: null,
        resposta: "&lt;!DOCTYPE html&gt;",
        justificativa: "Em HTML5, a declaração DOCTYPE é simplificada para apenas '&lt;!DOCTYPE html&gt;', sem necessidade de referência a DTDs específicas.",
        opcoes: [
            "&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"&gt;",
            "&lt;!DOCTYPE html&gt;",
            "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",
            "&lt;!DOCTYPE HTML5&gt;",
            "Nenhuma declaração DOCTYPE é necessária"
        ],
        categoria: "HTML5",
        dificuldade: "iniciante"
    },
    {
        id: 2,
        pergunta: "Qual tag HTML5 é semanticamente mais apropriada para conter o conteúdo principal de uma página?",
        codigo: null,
        resposta: "&lt;main&gt;",
        justificativa: "A tag &lt;main&gt; foi introduzida no HTML5 para representar semanticamente o conteúdo principal único da página, que não se repete em outras páginas.",
        opcoes: [
            "&lt;div id=\"main\"&gt;",
            "&lt;section&gt;",
            "&lt;article&gt;",
            "&lt;main&gt;",
            "&lt;content&gt;"
        ],
        categoria: "HTML5 Semântico",
        dificuldade: "intermediario"
    },
    {
        id: 3,
        pergunta: "Qual atributo é obrigatório na tag <img> para garantir acessibilidade?",
        codigo: null,
        resposta: "alt",
        justificativa: "O atributo 'alt' fornece um texto alternativo para a imagem, essencial para usuários com deficiência visual que utilizam leitores de tela, e também é exibido quando a imagem não pode ser carregada.",
        opcoes: [
            "src",
            "title",
            "alt",
            "aria-label",
            "description"
        ],
        categoria: "HTML5 Acessibilidade",
        dificuldade: "iniciante"
    },
    {
        id: 4,
        pergunta: "Qual é a diferença entre as tags <section> e <article> no HTML5?",
        codigo: null,
        resposta: "&lt;section&gt; agrupa conteúdo temático, enquanto &lt;article&gt; representa conteúdo independente e autocontido.",
        justificativa: "A tag &lt;section&gt; é usada para agrupar conteúdo tematicamente relacionado, enquanto &lt;article&gt; deve conter conteúdo que faça sentido por si só e possa ser distribuído independentemente do resto do site.",
        opcoes: [
            "Não há diferença, são intercambiáveis.",
            "&lt;section&gt; é para seções principais, &lt;article&gt; para artigos de blog.",
            "&lt;section&gt; agrupa conteúdo temático, enquanto &lt;article&gt; representa conteúdo independente e autocontido.",
            "&lt;section&gt; é para conteúdo estático, &lt;article&gt; para conteúdo dinâmico.",
            "&lt;section&gt; é para layout, &lt;article&gt; para conteúdo."
        ],
        categoria: "HTML5 Semântico",
        dificuldade: "intermediario"
    },
    {
        id: 5,
        pergunta: "Qual é a forma correta de vincular um arquivo CSS externo a um documento HTML?",
        codigo: null,
        resposta: "&lt;link rel=\"stylesheet\" href=\"estilos.css\"&gt;",
        justificativa: "A tag &lt;link&gt; com os atributos rel=\"stylesheet\" e href apontando para o arquivo CSS é o método correto e recomendado para vincular folhas de estilo externas.",
        opcoes: [
            "&lt;style src=\"estilos.css\"&gt;",
            "&lt;link rel=\"stylesheet\" href=\"estilos.css\"&gt;",
            "&lt;css href=\"estilos.css\"&gt;",
            "&lt;import \"estilos.css\"&gt;",
            "&lt;stylesheet&gt;estilos.css&lt;/stylesheet&gt;"
        ],
        categoria: "CSS",
        dificuldade: "iniciante"
    },
    {
        id: 6,
        pergunta: "Qual propriedade CSS é usada para alterar a cor do texto?",
        codigo: null,
        resposta: "color",
        justificativa: "A propriedade 'color' define a cor do texto de um elemento. Exemplo: color: blue;",
        opcoes: [
            "text-color",
            "font-color",
            "color",
            "text-style",
            "font-style"
        ],
        categoria: "CSS",
        dificuldade: "iniciante"
    },
    {
        id: 7,
        pergunta: "No CSS Box Model, qual é a ordem correta das camadas da parte externa para a interna?",
        codigo: null,
        resposta: "margin, border, padding, content",
        justificativa: "O CSS Box Model consiste em: margin (espaçamento externo), border (borda), padding (espaçamento interno) e content (conteúdo).",
        opcoes: [
            "padding, border, margin, content",
            "margin, border, padding, content",
            "border, margin, padding, content",
            "content, padding, border, margin",
            "margin, padding, border, content"
        ],
        categoria: "CSS Box Model",
        dificuldade: "intermediario"
    },
    {
        id: 8,
        pergunta: "Qual seletor CSS tem maior especificidade?",
        codigo: null,
        resposta: "#id .classe",
        justificativa: "A especificidade no CSS segue esta ordem (da maior para a menor): 1. IDs (#id), 2. Classes, pseudoclasses e atributos (.classe, :hover), 3. Elementos e pseudoelementos (div, ::before). O seletor '#id .classe' contém um ID e uma classe, tendo maior especificidade.",
        opcoes: [
            "div",
            ".classe",
            "#id",
            "#id .classe",
            "div.classe"
        ],
        categoria: "CSS Seletores",
        dificuldade: "intermediario"
    },
    {
        id: 9,
        pergunta: "Qual pseudo-classe CSS é usada para estilizar um elemento quando o mouse está sobre ele?",
        codigo: null,
        resposta: ":hover",
        justificativa: "A pseudo-classe :hover é aplicada quando o usuário posiciona o ponteiro do mouse sobre um elemento, mas não necessariamente o ativa.",
        opcoes: [
            ":active",
            ":focus",
            ":hover",
            ":over",
            ":mouseover"
        ],
        categoria: "CSS Pseudo-classes",
        dificuldade: "iniciante"
    },
    {
        id: 10,
        pergunta: "Qual propriedade CSS é usada para criar layouts flexíveis e responsivos?",
        codigo: null,
        resposta: "display: flex",
        justificativa: "A propriedade 'display: flex' ativa o Flexbox, um módulo de layout do CSS que facilita a criação de designs flexíveis e responsivos, alinhando e distribuindo espaço entre itens em um container.",
        opcoes: [
            "display: block",
            "display: flex",
            "display: grid",
            "float: left",
            "position: relative"
        ],
        categoria: "CSS Layout",
        dificuldade: "intermediario"
    },
    {
        id: 11,
        pergunta: "Qual tag HTML5 é semanticamente apropriada para rodapés de página ou de seção?",
        codigo: null,
        resposta: "&lt;footer&gt;",
        justificativa: "A tag &lt;footer&gt; representa um rodapé para seu conteúdo de seção mais próximo ou para o rodapé da página inteira, contendo normalmente informações sobre o autor, links relacionados, direitos autorais, etc.",
        opcoes: [
            "&lt;bottom&gt;",
            "&lt;foot&gt;",
            "&lt;footer&gt;",
            "&lt;end&gt;",
            "&lt;section class=\"footer\"&gt;"
        ],
        categoria: "HTML5 Semântico",
        dificuldade: "iniciante"
    },
    {
        id: 12,
        pergunta: "Qual método é considerado uma boa prática para criar designs responsivos?",
        codigo: null,
        resposta: "Mobile First",
        justificativa: "A abordagem Mobile First consiste em desenvolver primeiro para dispositivos móveis e depois usar media queries para adaptar o layout para telas maiores. Isso resulta em um design mais performático e acessível.",
        opcoes: [
            "Desktop First",
            "Mobile First",
            "Usar apenas porcentagens",
            "Usar apenas pixels",
            "Criar versões separadas para cada dispositivo"
        ],
        categoria: "CSS Responsivo",
        dificuldade: "intermediario"
    },
    {
        id: 13,
        pergunta: "Qual tag HTML5 é usada para representar conteúdo independente, como um post de blog ou artigo de notícia?",
        codigo: null,
        resposta: "&lt;article&gt;",
        justificativa: "A tag &lt;article&gt; representa uma composição independente em um documento, página, aplicação ou site, que é destinado a ser distribuível ou reutilizável independentemente.",
        opcoes: [
            "&lt;section&gt;",
            "&lt;div&gt;",
            "&lt;article&gt;",
            "&lt;independent&gt;",
            "&lt;content&gt;"
        ],
        categoria: "HTML5 Semântico",
        dificuldade: "iniciante"
    },
    {
        id: 14,
        pergunta: "Qual unidade CSS é relativa ao tamanho da fonte do elemento raiz (html)?",
        codigo: null,
        resposta: "rem",
        justificativa: "A unidade 'rem' (root em) é relativa ao tamanho da fonte do elemento raiz (html). Se o elemento raiz tem font-size: 16px, então 1rem = 16px em qualquer lugar do documento.",
        opcoes: [
            "em",
            "rem",
            "px",
            "%",
            "vw"
        ],
        categoria: "CSS Unidades",
        dificuldade: "intermediario"
    },
    {
        id: 15,
        pergunta: "Qual atributo HTML5 é usado para validar que um campo de entrada é obrigatório?",
        codigo: null,
        resposta: "required",
        justificativa: "O atributo booleano 'required' especifica que um campo de entrada deve ser preenchido antes do envio do formulário. Os navegadores modernos impedem o envio e mostram uma mensagem de erro se o campo estiver vazio.",
        opcoes: [
            "validate",
            "mandatory",
            "necessary",
            "required",
            "must"
        ],
        categoria: "HTML5 Formulários",
        dificuldade: "iniciante"
    },
    {
        id: 16,
        pergunta: "Qual propriedade CSS é usada para criar espaçamento interno em um elemento?",
        codigo: null,
        resposta: "padding",
        justificativa: "A propriedade 'padding' define o espaço entre o conteúdo de um elemento e sua borda. É parte do Box Model do CSS.",
        opcoes: [
            "margin",
            "spacing",
            "padding",
            "inner-margin",
            "space"
        ],
        categoria: "CSS Box Model",
        dificuldade: "iniciante"
    },
    {
        id: 17,
        pergunta: "Qual tag HTML5 é usada para navegação?",
        codigo: null,
        resposta: "&lt;nav&gt;",
        justificativa: "A tag &lt;nav&gt; representa uma seção de uma página que aponta para outras páginas ou para partes dentro da página: uma seção com links de navegação.",
        opcoes: [
            "&lt;navigation&gt;",
            "&lt;menu&gt;",
            "&lt;nav&gt;",
            "&lt;links&gt;",
            "&lt;navigator&gt;"
        ],
        categoria: "HTML5 Semântico",
        dificuldade: "iniciante"
    },
    {
        id: 18,
        pergunta: "Qual media query é usada para direcionar dispositivos com telas maiores que 768px?",
        codigo: null,
        resposta: "@media (min-width: 768px)",
        justificativa: "A media query '@media (min-width: 768px)' aplica estilos quando a largura da viewport é de pelo menos 768 pixels, direcionando dispositivos com telas maiores.",
        opcoes: [
            "@media (max-width: 768px)",
            "@media (width: 768px)",
            "@media (min-width: 768px)",
            "@media screen and (width > 768px)",
            "@media (device-width: 768px)"
        ],
        categoria: "CSS Responsivo",
        dificuldade: "intermediario"
    },
    {
        id: 19,
        pergunta: "Qual propriedade CSS é usada para alterar o tipo de exibição de um elemento?",
        codigo: null,
        resposta: "display",
        justificativa: "A propriedade 'display' especifica o tipo de caixa de renderização usada para um elemento. Valores comuns incluem block, inline, flex, grid, none.",
        opcoes: [
            "visibility",
            "show",
            "display",
            "type",
            "render"
        ],
        categoria: "CSS",
        dificuldade: "iniciante"
    },
    {
        id: 20,
        pergunta: "Qual tag HTML5 é semanticamente apropriada para conteúdo complementar, como uma barra lateral?",
        codigo: null,
        resposta: "&lt;aside&gt;",
        justificativa: "A tag &lt;aside&gt; representa uma seção de uma página que consiste de conteúdo que é tangencialmente relacionado ao conteúdo em volta, e que poderia ser considerado separado do conteúdo. Frequentemente usada para barras laterais.",
        opcoes: [
            "&lt;sidebar&gt;",
            "&lt;aside&gt;",
            "&lt;complement&gt;",
            "&lt;extra&gt;",
            "&lt;section class=\"sidebar\"&gt;"
        ],
        categoria: "HTML5 Semântico",
        dificuldade: "intermediario"
    },
    {
        id: 21,
        pergunta: "Qual seletor CSS seleciona todos os elementos <p>; que são filhos diretos de um elemento <div>?",
        codigo: null,
        resposta: "div > p",
        justificativa: "O seletor de filho direto '>' seleciona elementos que são filhos diretos do elemento especificado. 'div > p' seleciona todos os elementos &lt;p&gt; que são filhos diretos de um &lt;div&gt;.",
        opcoes: [
            "div p",
            "div > p",
            "div + p",
            "div.p",
            "div, p"
        ],
        categoria: "CSS Seletores",
        dificuldade: "intermediario"
    },
    {
        id: 22,
        pergunta: "Qual tag HTML5 é usada para agrupar metadados sobre o documento?",
        codigo: null,
        resposta: "&lt;head&gt;",
        justificativa: "A tag &lt;head&gt; contém metadados (dados sobre o documento), como título, links para folhas de estilo, scripts, e outras informações que não são conteúdo visível da página.",
        opcoes: [
            "&lt;meta&gt;",
            "&lt;header&gt;",
            "&lt;head&gt;",
            "&lt;info&gt;",
            "&lt;metadata&gt;"
        ],
        categoria: "HTML5",
        dificuldade: "iniciante"
    },
    {
        id: 23,
        pergunta: "Qual propriedade CSS é usada para criar transições suaves entre estados de um elemento?",
        codigo: null,
        resposta: "transition",
        justificativa: "A propriedade 'transition' permite definir a transição entre dois estados de um elemento. Pode controlar propriedades como duração, timing function, e atraso da transição.",
        opcoes: [
            "animation",
            "transform",
            "transition",
            "change",
            "smooth"
        ],
        categoria: "CSS Animações",
        dificuldade: "intermediario"
    },
    {
        id: 24,
        pergunta: "Qual tag HTML5 é semanticamente apropriada para o cabeçalho de uma página ou seção?",
        codigo: null,
        resposta: "&lt;header&gt;",
        justificativa: "A tag &lt;header&gt; representa um grupo de suporte introdutório ou navegacional. Pode conter alguns elementos de cabeçalho, um logo, uma seção de cabeçalho, um formulário de pesquisa, e outros.",
        opcoes: [
            "&lt;head&gt;",
            "&lt;heading&gt;",
            "&lt;header&gt;",
            "&lt;top&gt;",
            "&lt;hgroup&gt;"
        ],
        categoria: "HTML5 Semântico",
        dificuldade: "iniciante"
    },
    {
        id: 25,
        pergunta: "Qual propriedade CSS é usada para controlar a ordem de sobreposição de elementos posicionados?",
        codigo: null,
        resposta: "z-index",
        justificativa: "A propriedade 'z-index' especifica a ordem de empilhamento de um elemento posicionado e seus descendentes. Elementos com maior valor z-index cobrem aqueles com menor valor.",
        opcoes: [
            "order",
            "stack",
            "layer",
            "z-index",
            "position-index"
        ],
        categoria: "CSS Posicionamento",
        dificuldade: "intermediario"
    },
    {
        id: 26,
        pergunta: "Qual tag HTML5 é usada para definir opções em uma lista suspensa (<select>)?",
        codigo: null,
        resposta: "&lt;option&gt;",
        justificativa: "A tag &lt;option&gt; é usada dentro de um elemento &lt;select&gt; para definir as opções disponíveis na lista suspensa. Cada &lt;option&gt; representa uma escolha que o usuário pode selecionar.",
        opcoes: [
            "&lt;item&gt;",
            "&lt;choice&gt;",
            "&lt;option&gt;",
            "&lt;select-item&gt;",
            "&lt;list-item&gt;"
        ],
        categoria: "HTML5 Formulários",
        dificuldade: "iniciante"
    },
    {
        id: 27,
        pergunta: "Qual pseudo-classe CSS é usada para estilizar um link que ainda não foi visitado?",
        codigo: null,
        resposta: ":link",
        justificativa: "A pseudo-classe :link representa elementos &lt;a&gt; que ainda não foram visitados. É comumente usada para estilizar links que o usuário ainda não clicou.",
        opcoes: [
            ":unvisited",
            ":link",
            ":not(:visited)",
            ":new",
            ":fresh"
        ],
        categoria: "CSS Pseudo-classes",
        dificuldade: "iniciante"
    },
    {
        id: 28,
        pergunta: "Qual tag HTML5 é usada para incorporar vídeos em uma página web?",
        codigo: null,
        resposta: "&lt;video&gt;",
        justificativa: "A tag &lt;video&gt; é usada para incorporar conteúdo de vídeo em um documento. Suporta vários formatos de vídeo e oferece controles de reprodução nativos.",
        opcoes: [
            "&lt;media&gt;",
            "&lt;movie&gt;",
            "&lt;video&gt;",
            "&lt;embed&gt;",
            "&lt;iframe&gt;"
        ],
        categoria: "HTML5 Multimídia",
        dificuldade: "iniciante"
    },
    {
        id: 29,
        pergunta: "Qual propriedade CSS é usada para criar sombras em elementos?",
        codigo: null,
        resposta: "box-shadow",
        justificativa: "A propriedade 'box-shadow' adiciona efeitos de sombra ao redor da moldura de um elemento. Pode controlar deslocamento, desfoque, propagação e cor da sombra.",
        opcoes: [
            "shadow",
            "element-shadow",
            "box-shadow",
            "drop-shadow",
            "text-shadow"
        ],
        categoria: "CSS Efeitos",
        dificuldade: "intermediario"
    },
    {
        id: 30,
        pergunta: "Qual metodologia de nomenclatura CSS é baseada em Bloco, Elemento, Modificador?",
        codigo: null,
        resposta: "BEM",
        justificativa: "BEM (Block, Element, Modifier) é uma metodologia de nomenclatura popular que ajuda a criar componentes CSS reutilizáveis e componentes de interface de usuário. Divide a interface em blocos independentes.",
        opcoes: [
            "OOCSS",
            "SMACSS",
            "BEM",
            "Atomic CSS",
            "SUIT CSS"
        ],
        categoria: "CSS Metodologias",
        dificuldade: "avancado"
    }
];
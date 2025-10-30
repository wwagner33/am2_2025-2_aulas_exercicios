const exercicios = [
    {
        id: 1,
        pergunta: "De acordo com o 'Box Model' do CSS, qual é a ordem correta das camadas, de dentro para fora?",
        codigo: null,
        resposta: "Content, Padding, Border, Margin",
        justificativa: "O Box Model é composto por quatro camadas, de dentro para fora: o Conteúdo (onde texto e imagens aparecem), o Padding (espaço interno transparente), a Border (a linha ao redor) e a Margin (espaço externo transparente que empurra outros elementos).",
        opcoes: [
            "Content, Padding, Border, Margin",
            "Content, Border, Padding, Margin",
            "Content, Margin, Padding, Border",
            "Padding, Content, Border, Margin",
            "Margin, Border, Padding, Content"
        ],
        categoria: "CSS Box Model",
        dificuldade: "iniciante"
    },
    {
        id: 2,
        pergunta: "Qual é a principal diferença entre `padding` e `margin` no Box Model?",
        codigo: null,
        resposta: "`padding` é o espaço interno (acolchoamento) da caixa, enquanto `margin` é o espaço externo que 'empurra' outros elementos.",
        justificativa: "O `padding` é uma área de 'espaço interno', funcionando como um acolchoamento entre o conteúdo e a borda. Já a `margin` é uma área de 'espaço externo', fora da borda, que serve para 'empurrar' os outros elementos para longe.",
        opcoes: [
            "`padding` é o espaço interno (acolchoamento) da caixa, enquanto `margin` é o espaço externo que 'empurra' outros elementos.",
            "`margin` é o espaço interno e `padding` é o espaço externo.",
            "Ambos são espaços internos, mas `padding` aceita cores.",
            "Ambos são espaços externos, mas `margin` pode ter valores negativos.",
            "`padding` define a espessura da borda e `margin` o espaço interno."
        ],
        categoria: "CSS Box Model",
        dificuldade: "iniciante"
    },
    {
        id: 3,
        pergunta: "No CSS, a unidade `rem` é considerada uma 'unidade relativa'. Relativa a quê?",
        codigo: null,
        resposta: "Ao tamanho da fonte do elemento raiz (a tag <html>).",
        justificativa: "A unidade `rem` (Root EM) é relativa ao tamanho da fonte do elemento raiz, que é a tag `<html>`. É considerada a melhor unidade moderna para `font-size`, `margin` e `padding` por garantir escalabilidade e acessibilidade.",
        opcoes: [
            "Ao tamanho da fonte do elemento pai.",
            "Ao tamanho da fonte do próprio elemento.",
            "Ao tamanho da fonte do elemento raiz (a tag <html>).",
            "À largura da janela do navegador (viewport).",
            "É uma unidade fixa (absoluta) de 16px."
        ],
        categoria: "CSS Unidades",
        dificuldade: "intermediario"
    },
    {
        id: 4,
        pergunta: "Se um elemento 'pai' tem `width: 600px;` e seu elemento 'filho' tem `width: 50%;`, qual será a largura calculada do 'filho'?",
        codigo: ".pai { width: 600px; } \n.filho { width: 50%; }",
        resposta: "300px",
        justificativa: "A unidade de porcentagem (%) é sempre relativa ao elemento pai. Portanto, 50% da largura do pai (que é 600px) resulta em 300px.",
        opcoes: [
            "300px",
            "600px",
            "50px",
            "Depende do tamanho da fonte raiz (rem)",
            "Não é possível calcular"
        ],
        categoria: "CSS Unidades",
        dificuldade: "iniciante"
    },
    {
        id: 5,
        pergunta: "O que acontece com um elemento quando aplicamos `position: absolute;`?",
        codigo: ".elemento { position: absolute; }",
        resposta: "Ele é removido do fluxo normal e posicionado em relação ao ancestral posicionado mais próximo.",
        justificativa: "Um elemento com `position: absolute` é removido do fluxo normal da página. Ele é então posicionado em relação ao ancestral posicionado mais próximo (qualquer elemento pai ou avô com `position` diferente de `static`). Se nenhum for encontrado, ele se posiciona em relação à tag `<body>`.",
        opcoes: [
            "Ele é removido do fluxo normal e posicionado em relação ao ancestral posicionado mais próximo.",
            "Ele permanece no fluxo normal, mas pode ser movido com `top`/`left`.",
            "Ele é fixado na tela e não rola com a página.",
            "Ele se torna 'colável' (sticky) no topo da página.",
            "Nada acontece até que `z-index` seja definido."
        ],
        categoria: "CSS Layout (Position)",
        dificuldade: "intermediario"
    },
    {
        id: 6,
        pergunta: "Qual é a característica principal de um elemento com `position: relative;`?",
        codigo: ".elemento { position: relative; top: 10px; }",
        resposta: "Ele é movido 10px para baixo, mas *ainda ocupa seu espaço original* no fluxo da página.",
        justificativa: "O elemento `relative` é posicionado em relação à sua posição original no fluxo da página. Crucialmente, ele ainda ocupa seu espaço original, e os outros elementos não se movem para preenchê-lo. A propriedade `top: 10px` o move 10px para baixo de onde ele estaria normalmente.",
        opcoes: [
            "Ele é movido 10px para baixo, mas *ainda ocupa seu espaço original* no fluxo da página.",
            "Ele é removido do fluxo e os outros elementos ocupam seu espaço.",
            "Ele é movido 10px para *cima* da sua posição original.",
            "Ele se fixa em relação à janela do navegador.",
            "Ele serve como âncora, mas não pode ser movido com `top` ou `left`."
        ],
        categoria: "CSS Layout (Position)",
        dificuldade: "intermediario"
    },
    {
        id: 7,
        pergunta: "Qual valor da propriedade `position` é ideal para criar um menu que fica sempre visível no topo da tela, mesmo quando o usuário rola a página?",
        codigo: null,
        resposta: "fixed",
        justificativa: "O `position: fixed` remove o elemento do fluxo normal e o posiciona em relação à janela do navegador (viewport). Por isso, ele não se move quando a página é rolada, sendo a escolha ideal para menus fixos no topo.",
        opcoes: [
            "static",
            "relative",
            "absolute",
            "fixed",
            "sticky"
        ],
        categoria: "CSS Layout (Position)",
        dificuldade: "iniciante"
    },
    {
        id: 8,
        pergunta: "O que faz um elemento com `position: sticky; top: 0;`?",
        codigo: ".menu-cabecalho { position: sticky; top: 0; }",
        resposta: "Ele se comporta como `relative` até que a rolagem o faça atingir o topo (0px), então ele 'gruda' e se comporta como `fixed`.",
        justificativa: "O `position: sticky` é um híbrido de `relative` e `fixed`. O elemento age como `relative` até que a rolagem da página o faça atingir um limite (como `top: 0;`), momento em que 'gruda' na tela e passa a se comportar como `fixed`.",
        opcoes: [
            "Ele se comporta como `relative` até que a rolagem o faça atingir o topo (0px), então ele 'gruda' e se comporta como `fixed`.",
            "Ele fica permanentemente fixo no topo da página, igual ao `fixed`.",
            "Ele é posicionado 0px abaixo do topo do seu 'pai' `relative`.",
            "Ele é removido do fluxo e posicionado 0px abaixo do topo do `<body>`.",
            "A propriedade `sticky` não funciona sem `z-index`."
        ],
        categoria: "CSS Layout (Position)",
        dificuldade: "avancado"
    },
    {
        id: 9,
        pergunta: "Qual é a 'Regra de Ouro' para que a propriedade `z-index` funcione em um elemento?",
        codigo: null,
        resposta: "O elemento deve ter um `position` diferente de `static`.",
        justificativa: "A 'Regra de Ouro' do `z-index` é que ele só tem efeito em elementos que possuem um valor de `position` diferente de `static` (ou seja, `relative`, `absolute`, `fixed` ou `sticky`).",
        opcoes: [
            "O elemento deve ter um `position` diferente de `static`.",
            "O elemento deve ter `display: block;`.",
            "O elemento deve ter um `z-index` maior que 1000.",
            "O elemento deve ser um 'filho' direto do `<body>`.",
            "O elemento não pode ter `margin` ou `padding`."
        ],
        categoria: "CSS Layout (z-index)",
        dificuldade: "intermediario"
    },
    {
        id: 10,
        pergunta: "No código a seguir, usado para criar um sino de notificação, por que `.sino-container` precisa de `position: relative`?",
        codigo: ".sino-container { position: relative; } \n.notificacao { position: absolute; top: -5px; right: -5px; }",
        resposta: "Para servir como 'ponto de âncora' para o elemento filho `.notificacao` (que tem `position: absolute`).",
        justificativa: "O `.sino-container` (pai) é definido como `position: relative` para servir como um 'ponto de âncora'. Isso faz com que seu filho, `.notificacao` (com `position: absolute`), se posicione em relação a ele. Sem isso, o `.notificacao` se posicionaria em relação ao próximo ancestral posicionado ou, como último recurso, à tag `<body>`.",
        opcoes: [
            "Para servir como 'ponto de âncora' para o elemento filho `.notificacao` (que tem `position: absolute`).",
            "Para que o `.sino-container` possa ser movido com `top` e `left`.",
            "Para remover o `.sino-container` do fluxo normal da página.",
            "Para que o `z-index` funcione no `.sino-container`.",
            "Não precisa, `position: absolute` no filho funciona sem `relative` no pai."
        ],
        categoria: "CSS Layout (Position)",
        dificuldade: "avancado"
    },
    {
        id: 11,
        pergunta: "Quais propriedades CSS (usando Flexbox) são necessárias no `.container` para centralizar perfeitamente (horizontal e verticalmente) a `.box`?",
        codigo: ".container { \n  /* ??? */ \n  height: 100vh; \n} \n.box { /* ... */ }",
        resposta: "display: flex; justify-content: center; align-items: center;",
        justificativa: "Para uma centralização perfeita com Flexbox, primeiro ativa-se o container flexível com `display: flex;`. Em seguida, `justify-content: center;` alinha o item horizontalmente (no eixo principal), e `align-items: center;` alinha o item verticalmente (no eixo cruzado).",
        opcoes: [
            "display: flex; justify-content: center; align-items: center;",
            "display: grid; position: absolute; top: 50%;",
            "display: flex; flex-direction: column; text-align: center;",
            "margin: auto; padding: 50%;",
            "position: relative; left: 50%; top: 50%; transform: translate(-50%, -50%);"
        ],
        categoria: "CSS Flexbox",
        dificuldade: "iniciante"
    },
    {
        id: 12,
        pergunta: "No CSS Grid, o que a propriedade `grid-template-areas` permite fazer?",
        codigo: "grid-template-areas: \n  'header header' \n  'nav main' \n  'footer footer';",
        resposta: "Permite 'desenhar' visualmente o layout da página, nomeando as áreas da grade.",
        justificativa: "A propriedade `grid-template-areas` permite 'desenhar' o layout de forma visual usando texto. Cada string define uma linha da grade, e os nomes (como 'header' e 'main') correspondem à propriedade `grid-area` dos elementos filhos para posicioná-los.",
        opcoes: [
            "Permite 'desenhar' visualmente o layout da página, nomeando as áreas da grade.",
            "Define o número de colunas e linhas automaticamente.",
            "Controla o espaço (gutter) entre os itens da grade.",
            "Define a área de cada item em pixels.",
            "É usada para criar animações na grade."
        ],
        categoria: "CSS Grid",
        dificuldade: "intermediario"
    },
    {
        id: 13,
        pergunta: "Como você define uma variável CSS chamada `--bg-color` com o valor `#ffffff` e a aplica no `body`?",
        codigo: null,
        resposta: ":root { --bg-color: #ffffff; } body { background-color: var(--bg-color); }",
        justificativa: "As variáveis CSS são definidas, geralmente no seletor `:root`, com a sintaxe `--nome-variavel: valor;`. Para usar o valor da variável em uma propriedade (como em `body`), utiliza-se a função `var(--nome-variavel)`.",
        opcoes: [
            ":root { --bg-color: #ffffff; } body { background-color: var(--bg-color); }",
            "$bg-color: #ffffff; body { background-color: $bg-color; }",
            "const bgColor = '#ffffff'; body { background-color: bgColor; }",
            ".root { -bg-color: #ffffff; } body { background-color: get(-bg-color); }",
            "variable { bg-color: #ffffff; } body { apply: bg-color; }"
        ],
        categoria: "CSS Variáveis",
        dificuldade: "intermediario"
    },
    {
        id: 14,
        pergunta: "Qual é a Media Query correta para detectar se o usuário prefere o 'Dark Mode' (tema escuro) no sistema operacional e, assim, sobrescrever variáveis?",
        codigo: null,
        resposta: "@media (prefers-color-scheme: dark)",
        justificativa: "Para aplicar estilos específicos quando o sistema operacional do usuário está configurado para o modo escuro, utiliza-se a media query `@media (prefers-color-scheme: dark)`. Isso é comumente usado para sobrescrever variáveis de cor.",
        opcoes: [
            "@media (prefers-color-scheme: dark)",
            "@media (orientation: dark)",
            "@media (dark-mode: active)",
            "@query (system-theme: dark)",
            "@media (screen and (color-mode: dark))"
        ],
        categoria: "CSS Media Queries",
        dificuldade: "intermediario"
    },
    {
        id: 15,
        pergunta: "Qual é a principal diferença de caso de uso entre Flexbox e CSS Grid, segundo o guia?",
        codigo: null,
        resposta: "Flexbox é ideal para layouts em *uma dimensão* (linha ou coluna), enquanto Grid é ideal para layouts em *duas dimensões* (linhas e colunas).",
        justificativa: "De acordo com o guia, Flexbox é o padrão para layout em *uma dimensão* (uma linha ou uma coluna), sendo perfeito para menus e centralização. O CSS Grid, por sua vez, é o padrão para layouts em *duas dimensões* (linhas e colunas), ideal para a estrutura geral da página, como cabeçalho e rodapé.",
        opcoes: [
            "Flexbox é ideal para layouts em *uma dimensão* (linha ou coluna), enquanto Grid é ideal para layouts em *duas dimensões* (linhas e colunas).",
            "Flexbox é usado para centralizar e Grid é usado para alinhar à esquerda.",
            "Flexbox é para layouts responsivos (mobile) e Grid é apenas para desktop.",
            "Flexbox controla o `padding` e Grid controla o `margin`.",
            "Flexbox é mais antigo e obsoleto, enquanto Grid é o padrão moderno para tudo."
        ],
        categoria: "CSS (Flexbox vs Grid)",
        dificuldade: "iniciante"
    }
];
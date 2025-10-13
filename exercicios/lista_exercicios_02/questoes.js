const exercicios = [
  {
    id: 1,
    pergunta:
      "Qual propriedade em JavaScript representa o maior número inteiro que pode ser representado de forma segura sem perda de precisão?",
    codigo: null,
    resposta: "Number.MAX_SAFE_INTEGER",
    justificativa:
      "Number.MAX_SAFE_INTEGER representa o valor 2^53 - 1. Acima deste valor, os números inteiros podem não ser representados com precisão devido ao formato de ponto flutuante de 64 bits.",
    opcoes: [
      "Number.MAX_VALUE",
      "Number.MAX_INTEGER",
      "Number.MAX_SAFE_INTEGER",
      "Infinity",
      "Integer.MAX_VALUE",
    ],
    categoria: "Números",
    dificuldade: "intermediario",
  },
  {
    id: 2,
    pergunta: "Qual será o resultado da seguinte operação?",
    codigo: "console.log(Number.MAX_SAFE_INTEGER + 2);",
    resposta: "O mesmo valor de 'Number.MAX_SAFE_INTEGER + 1'",
    justificativa:
      "Somar 1 a 'Number.MAX_SAFE_INTEGER' já resulta em uma imprecisão. Somar 2 resulta no mesmo valor, pois o sistema não consegue mais representar o próximo inteiro de forma distinta.",
    opcoes: [
      "Um erro será lançado",
      "9007199254740993",
      "O mesmo valor de 'Number.MAX_SAFE_INTEGER + 1'",
      "NaN",
      "Infinity",
    ],
    categoria: "Números",
    dificuldade: "avancado",
  },
  {
    id: 3,
    pergunta: "Qual o resultado da expressão '0.1 + 0.2 === 0.3' e por quê?",
    codigo: "console.log(0.1 + 0.2 === 0.3);",
    resposta:
      "false, devido à imprecisão da representação binária de números decimais.",
    justificativa:
      "0.1 e 0.2 não podem ser representados de forma exata em binário, resultando em uma soma que é ligeiramente diferente de 0.3 (algo como 0.30000000000000004).",
    opcoes: [
      "true, a soma está matematicamente correta.",
      "false, devido à imprecisão da representação binária de números decimais.",
      "false, porque '===' não funciona com números.",
      "Um erro de sintaxe.",
      "NaN",
    ],
    categoria: "Números",
    dificuldade: "intermediario",
  },
  {
    id: 4,
    pergunta:
      "Para evitar problemas de precisão em um sistema financeiro (e-commerce), qual é a melhor abordagem para armazenar o valor R$ 10,50?",
    codigo: null,
    resposta:
      "Armazenar o valor como um inteiro representando os centavos (ex: 1050).",
    justificativa:
      "Operações com inteiros são exatas. Ao trabalhar com centavos (a menor unidade monetária), você evita todos os problemas de arredondamento de ponto flutuante e só formata para exibição.",
    opcoes: [
      "Armazenar como um número de ponto flutuante (ex: 10.50).",
      'Armazenar como uma string (ex: "10,50").',
      "Usar o tipo BigInt para todos os cálculos.",
      "Armazenar o valor como um inteiro representando os centavos (ex: 1050).",
      "Arredondar o valor para o inteiro mais próximo (ex: 11).",
    ],
    categoria: "Números",
    dificuldade: "intermediario",
  },
  {
    id: 5,
    pergunta:
      "Qual desvantagem pode surgir ao usar um número de ponto flutuante (ex: '1.0') em vez de um inteiro (ex: '1') para um contador em um laço de repetição muito longo?",
    codigo: null,
    resposta:
      "Pode haver uma pequena perda de desempenho, pois os motores JavaScript otimizam operações com inteiros.",
    justificativa:
      "Motores como o V8 usam representações internas otimizadas para inteiros (SMIs). Forçar o uso de um ponto flutuante pode desativar essas otimizações, levando a um processamento ligeiramente mais lento em larga escala.",
    opcoes: [
      "O laço pode entrar em um loop infinito devido à imprecisão.",
      "Pode haver uma pequena perda de desempenho, pois os motores JavaScript otimizam operações com inteiros.",
      "Ocorrerá um erro de 'Stack Overflow' por uso excessivo de memória.",
      "Não há nenhuma desvantagem, o desempenho é idêntico.",
      "O valor pode se tornar impreciso e pular uma iteração.",
    ],
    categoria: "Performance",
    dificuldade: "avancado",
  },
  {
    id: 6,
    pergunta: "Qual será o resultado da operação '1 / 0' em JavaScript?",
    codigo: "console.log(1 / 0);",
    resposta: "Infinity",
    justificativa:
      "Seguindo o padrão IEEE 754, a divisão de um número positivo por zero resulta em 'Infinity' (infinito positivo). Não gera um erro.",
    opcoes: ["0", "null", "undefined", "NaN", "Infinity"],
    categoria: "Números",
    dificuldade: "iniciante",
  },
  {
    id: 7,
    pergunta: "O que o 'typeof NaN' retorna?",
    codigo: "console.log(typeof NaN);",
    resposta: "number",
    justificativa:
      "Apesar de 'NaN' significar 'Not-a-Number', seu tipo em JavaScript é, paradoxalmente, 'number'. Ele representa um valor numérico inválido ou indefinido.",
    opcoes: ["NaN", "undefined", "object", "number", "null"],
    categoria: "Tipos",
    dificuldade: "intermediario",
  },
  {
    id: 8,
    pergunta:
      "Qual é a principal diferença semântica entre 'null' e 'undefined'?",
    codigo: null,
    resposta:
      "'null' é um valor de ausência atribuído intencionalmente, enquanto 'undefined' significa que um valor nunca foi atribuído.",
    justificativa:
      "Usa-se 'null' para indicar que uma variável não tem valor de propósito. 'undefined' é o estado padrão de variáveis declaradas sem inicialização, parâmetros de função não passados e propriedades de objeto inexistentes.",
    opcoes: [
      "Não há diferença, são intercambiáveis.",
      "'null' é um objeto, 'undefined' não é.",
      "'null' é usado para números e 'undefined' para strings.",
      "'null' é um valor de ausência atribuído intencionalmente, enquanto 'undefined' significa que um valor nunca foi atribuído.",
      "'null' significa 0 e 'undefined' significa NaN.",
    ],
    categoria: "Tipos",
    dificuldade: "intermediario",
  },
  {
    id: 9,
    pergunta:
      "Nos motores JavaScript modernos (como o V8), por que a operação '1 + 2' é geralmente mais rápida que '1.1 + 2.2'?",
    codigo: null,
    resposta:
      "Porque operações com inteiros puros podem usar instruções de máquina mais simples e otimizadas.",
    justificativa:
      "Motores como o V8 têm um caminho otimizado para inteiros pequenos (SMIs - Small Integers). Operações de ponto flutuante requerem uma lógica mais complexa e não se beneficiam da mesma otimização.",
    opcoes: [
      "Não há diferença de velocidade.",
      "Porque operações com inteiros puros podem usar instruções de máquina mais simples e otimizadas.",
      "Porque '1.1 + 2.2' causa um erro de precisão que precisa ser corrigido.",
      "Porque números inteiros usam menos bits na memória.",
      "Porque a conversão de tipo é mais lenta para ponto flutuante.",
    ],
    categoria: "Performance",
    dificuldade: "avancado",
  },
  {
    id: 10,
    pergunta:
      "Se um arquivo HTML salvo com codificação 'ISO-8859-1' contém o caractere 'ç' e o navegador o interpreta como 'UTF-8', qual é o resultado mais provável de ser exibido?",
    codigo: null,
    resposta: "Um ou mais caracteres estranhos, como 'Ã§'.",
    justificativa:
      "Isso é um problema clássico de 'Mojibake'. O byte que representa 'ç' em ISO-8859-1 será interpretado como uma sequência de bytes diferente em UTF-8, resultando em caracteres incorretos.",
    opcoes: [
      "O caractere 'ç' será exibido corretamente.",
      "A página não será carregada.",
      "Um erro será exibido no console.",
      "Um ou mais caracteres estranhos, como 'Ã§'.",
      "O caractere será omitido.",
    ],
    categoria: "Strings & Unicode",
    dificuldade: "intermediario",
  },
  {
    id: 11,
    pergunta:
      "Qual é a forma padrão e recomendada de definir a codificação de caracteres de uma página web para evitar problemas de interpretação em JavaScript e no HTML?",
    codigo: null,
    resposta:
      'Incluir a tag &lt;meta charset="UTF-8"&gt; no &lt;head&gt; do HTML.',
    justificativa:
      "Esta tag instrui o navegador a interpretar todos os bytes do documento usando a codificação UTF-8, que suporta a vasta maioria dos caracteres e símbolos existentes.",
    opcoes: [
      "Definir a codificação no início de um arquivo JavaScript com '// charset: UTF-8'.",
      'Incluir a tag &lt;meta charset="UTF-8"&gt; no &lt;head&gt; do HTML.',
      'Usar a tag &lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"&gt;.',
      "Adicionar a tag &lt;encoding&gt;UTF-8&lt;/encoding&gt; dentro do &lt;body&gt;.",
      "Configurar o servidor para enviar o header 'Content-Encoding: UTF-8'.",
    ],
    categoria: "Strings & Unicode",
    dificuldade: "iniciante",
  },
  {
    id: 12,
    pergunta:
      "Em qual cenário a falta de definição de tipos estáticos em JavaScript é mais benéfica?",
    codigo: null,
    resposta:
      "Na prototipagem rápida de uma aplicação, onde a flexibilidade para mudar a estrutura de dados é alta.",
    justificativa:
      "A tipagem dinâmica permite que desenvolvedores criem e testem ideias rapidamente sem a sobrecarga de definir tipos e interfaces estritas, o que acelera o ciclo de desenvolvimento inicial.",
    opcoes: [
      "Em grandes sistemas corporativos mantidos por equipes distribuídas.",
      "Quando a detecção de erros em tempo de compilação é a maior prioridade.",
      "Na prototipagem rápida de uma aplicação, onde a flexibilidade para mudar a estrutura de dados é alta.",
      "Em aplicações que exigem o máximo de desempenho e otimização de memória.",
      "Ao construir uma API pública onde o contrato de dados deve ser estritamente seguido.",
    ],
    categoria: "Tipagem",
    dificuldade: "intermediario",
  },
  {
    id: 13,
    pergunta:
      "Qual problema é um exemplo clássico que a tipagem estática (como a do TypeScript) ajudaria a evitar em JavaScript?",
    codigo:
      "function getLength(value) {\n  return value.length;\n}\n\ngetLength(123);",
    resposta:
      "Chamar a função com um número, que não possui a propriedade 'length', resultando em 'undefined' ou erro.",
    justificativa:
      "Com a tipagem estática, você poderia especificar que 'value' deve ser uma string ou um array. O compilador detectaria o erro no momento em que a função fosse chamada com um número, antes mesmo da execução.",
    opcoes: [
      "A função ser muito lenta para executar.",
      "A função retornar o valor incorreto para uma string válida.",
      "Chamar a função com um número, que não possui a propriedade 'length', resultando em 'undefined' ou erro.",
      "O nome da função ser muito genérico.",
      "A função não poder ser usada com objetos.",
    ],
    categoria: "Tipagem",
    dificuldade: "intermediario",
  },
  {
    id: 14,
    pergunta: "Qual o resultado da expressão 'typeof(1/0)'?",
    codigo: "console.log(typeof(1/0));",
    resposta: "number",
    justificativa:
      "O resultado da operação '1/0' é 'Infinity'. O tipo de 'Infinity' em JavaScript é 'number', assim como o de 'NaN'.",
    opcoes: ["infinity", "float", "number", "undefined", "object"],
    categoria: "Tipos",
    dificuldade: "iniciante",
  },
  {
    id: 15,
    pergunta:
      "O que a expressão 'BigInt(Number.MAX_SAFE_INTEGER) + 2n' resulta?",
    codigo: null,
    resposta: "Um valor 'BigInt' que representa corretamente a soma.",
    justificativa:
      "O tipo 'BigInt' foi introduzido para lidar com inteiros de precisão arbitrária, resolvendo o problema de estouro dos inteiros seguros do tipo 'Number'.",
    opcoes: [
      "Um erro, pois não se pode misturar BigInt com Number.",
      "O mesmo valor de Number.MAX_SAFE_INTEGER, devido ao limite de precisão.",
      "Um valor 'BigInt' que representa corretamente a soma.",
      "O valor numérico 9007199254740993, com perda de precisão.",
      "Infinity",
    ],
    categoria: "Números",
    dificuldade: "avancado",
  },
  {
    id: 16,
    pergunta: "Qual das seguintes operações NÃO resultará em 'NaN'?",
    codigo: null,
    resposta: "0 / 1",
    justificativa: "A operação '0 / 1' tem como resultado o número 0",
    opcoes: ["1 / 'a'", "0 / 1", "Infinity / Infinity", "0 / 0", "1 - 'a'"],
    categoria: "Números",
    dificuldade: "intermediario",
  },
  {
    id: 17,
    pergunta:
      "Como você pode verificar de forma confiável se uma variável 'x' tem o valor 'NaN'?",
    codigo: null,
    resposta: "Usando a função 'Number.isNaN(x)'.",
    justificativa:
      "'NaN' é o único valor em JavaScript que não é igual a si mesmo ('NaN === NaN' é 'false'). Portanto, a função 'Number.isNaN()' é a forma correta de verificação.",
    opcoes: [
      "'x === NaN'",
      "'typeof x === 'nan''",
      "'x == NaN'",
      "Usando a função 'Number.isNaN(x)'.",
      "'!x'",
    ],
    categoria: "Números",
    dificuldade: "intermediario",
  },
  {
    id: 18,
    pergunta: "Qual o valor de '('b' + 'a' + + 'a' + 'a').toLowerCase()'?",
    codigo: "console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());",
    resposta: "'banana'",
    justificativa:
      "O operador unário '+' antes de ''a'' tenta converter a string para número, resultando em 'NaN'. A concatenação se torna 'ba' + NaN + 'a', que resulta na string 'baNaNa'. Finalmente, '.toLowerCase()' a converte para 'banana'.",
    opcoes: [
      "'baaa'",
      "'banana'",
      "'ba+a+a'",
      "Um erro será lançado",
      "'banan'",
    ],
    categoria: "Strings & Unicode",
    dificuldade: "avancado",
  },
  {
    id: 19,
    pergunta: "Qual o resultado da expressão 'null == undefined'?",
    codigo: "console.log(null == undefined);",
    resposta: "true",
    justificativa:
      "O operador de igualdade abstrata ('==') considera 'null' e 'undefined' como iguais por uma regra específica da linguagem. No entanto, com igualdade estrita ('==='), o resultado seria 'false'.",
    opcoes: ["true", "false", "undefined", "NaN", "Um erro de sintaxe"],
    categoria: "Tipos",
    dificuldade: "iniciante",
  },
  {
    id: 20,
    pergunta:
      "Em JavaScript, o caractere 'é' ('e' com acento agudo) ocupa o mesmo espaço de armazenamento que o caractere 'e'?",
    codigo: "console.log('é'.length); console.log('e'.length);",
    resposta:
      "Sim, ambos têm 'length' igual a 1, pois são representados por um único code point em UTF-16.",
    justificativa:
      "JavaScript usa a codificação UTF-16 internamente. Caracteres comuns do plano multilíngue básico (BMP), incluindo a maioria dos caracteres acentuados, são representados por uma única unidade de código de 16 bits, resultando em um 'length' de 1.",
    opcoes: [
      "Sim, ambos têm 'length' igual a 1, pois são representados por um único code point em UTF-16.",
      "Não, o caractere 'é' ocupa o dobro do espaço por ser um caractere especial.",
      "Não, pois 'é' é composto por dois caracteres: 'e' e o acento agudo.",
      "Sim, mas apenas se a codificação do arquivo for UTF-8.",
      "Depende do motor JavaScript; no V8 ocupam o mesmo espaço, mas em outros não.",
    ],
    categoria: "Strings & Unicode",
    dificuldade: "intermediario",
  },
  {
    id: 21,
    pergunta:
      "Qual o 'length' da string '😂' (emoji de rosto chorando de rir)?",
    codigo: "console.log('😂'.length);",
    resposta: "2",
    justificativa:
      "Emojis e outros caracteres fora do Plano Multilíngue Básico (BMP) são representados em UTF-16 usando um par de 'surrogates' (duas unidades de código de 16 bits). Portanto, o 'length' da string é 2.",
    opcoes: ["1", "2", "4", "undefined", "Depende da codificação do arquivo."],
    categoria: "Strings & Unicode",
    dificuldade: "intermediario",
  },
  {
    id: 22,
    pergunta:
      "Qual método permite obter o valor do code point Unicode de um caractere em uma string?",
    codigo: "console.log('A'.charCodeAt(0));",
    resposta: ".charCodeAt(index)",
    justificativa:
      "O método 'charCodeAt(index)' retorna um número inteiro entre 0 e 65535 representando a unidade de código UTF-16 no índice especificado. Para code points maiores, 'codePointAt(index)' é mais indicado.",
    opcoes: [
      ".getUnicode()",
      ".toCode()",
      ".charCode()",
      ".charCodeAt(index)",
      ".getAscii()",
    ],
    categoria: "Strings & Unicode",
    dificuldade: "intermediario",
  },
  {
    id: 23,
    pergunta:
      "No código a seguir, porque a tipagem dinâmica do JavaScript poderia ser considerada uma vantagem?",
    codigo: "function process(data) { /*... */ }",
    resposta:
      "Uma função que pode aceitar e processar diferentes tipos de dados (número, string, objeto) sem sobrecarga de assinaturas (usada em Programação Orientada a Objeto).",
    justificativa:
      "A capacidade de uma única função lidar com múltiplos tipos de entrada de forma flexível é uma característica poderosa da tipagem dinâmica, simplificando o código em certos cenários.",
    opcoes: [
      "Garantir que uma função matemática receba apenas números.",
      "Refatorar código em uma grande base de código com segurança.",
      "Melhorar o autocompletar e a análise estática em IDEs.",
      "Evitar erros de 'undefined is not a function' em tempo de compilação.",
      "Uma função que pode aceitar e processar diferentes tipos de dados (número, string, objeto) sem sobrecarga de assinaturas (usada em Programação Orientada a Objeto).",
    ],
    categoria: "Tipagem",
    dificuldade: "intermediario",
  },
  {
    id: 24,
    pergunta:
      "Considere a operação '10.0 / 2.0'. Como o motor JavaScript provavelmente a executará internamente?",
    codigo: null,
    resposta:
      "Pode otimizá-la para uma operação de inteiros, se perceber que os valores não têm parte fracionária.",
    justificativa:
      "Motores modernos são inteligentes. Mesmo que os números sejam escritos como pontos flutuantes, se eles puderem ser representados como inteiros, o motor pode usar o caminho de execução otimizado para inteiros.",
    opcoes: [
      "Sempre a executará usando aritmética de ponto flutuante.",
      "Pode otimizá-la para uma operação de inteiros, se perceber que os valores não têm parte fracionária.",
      "Converterá os números para strings antes de dividir.",
      "Será mais lenta que '10 / 2' devido à conversão de tipos.",
      "Lançará um aviso no console sobre o uso de ponto flutuante desnecessário.",
    ],
    categoria: "Performance",
    dificuldade: "avancado",
  },
  {
    id: 25,
    pergunta: "O que o seguinte código exibirá no console?",
    codigo: "console.log(parseInt('10.9a2'));",
    resposta: "10",
    justificativa:
      "'parseInt' analisa a string da esquerda para a direita e para no primeiro caractere que não é um dígito (no sistema de base especificado). Ele ignora o '.9a2' e retorna o número 10.",
    opcoes: ["10.9", "10", "NaN", "11", "Um erro"],
    categoria: "Funções",
    dificuldade: "intermediario",
  },
  {
    id: 26,
    pergunta: "Qual será o resultado de 'console.log(1 - '1')'?",
    codigo: "console.log(1 - '1');",
    resposta: "0",
    justificativa:
      "O operador de subtração ('-') força a conversão da string '1' para o número 1 antes de realizar a operação, resultando em '1 - 1 = 0'.",
    opcoes: ["'1-1'", "NaN", "0", "11", "undefined"],
    categoria: "Tipos",
    dificuldade: "iniciante",
  },
  {
    id: 27,
    pergunta: "Qual o resultado da expressão '[] + {}'?",
    codigo: "console.log([] + {});",
    resposta: "'[object Object]'",
    justificativa:
      "O operador de adição aciona a conversão para primitivo. O array '[]' é convertido para a string vazia '''. O objeto '{}' é convertido para a string ''[object Object]''. A concatenação dos dois resulta em ''[object Object]''.",
    opcoes: ["NaN", "'[]{}'", "0", "'[object Object]'", "Um erro de sintaxe."],
    categoria: "Objetos",
    dificuldade: "avancado",
  },
  {
    id: 28,
    pergunta:
      "Qual é uma boa prática para comparar números de ponto flutuante em JavaScript?",
    codigo: null,
    resposta:
      "Verificar se a diferença absoluta entre eles é menor que um pequeno valor (epsilon).",
    justificativa:
      "Devido à imprecisão, a comparação direta com '===' pode falhar. A abordagem correta é testar se os números são 'próximos o suficiente', usando uma tolerância como 'Number.EPSILON'.",
    opcoes: [
      "Usar o operador de igualdade estrita ('===').",
      "Converter ambos os números para strings e comparar as strings.",
      "Verificar se a diferença absoluta entre eles é menor que um pequeno valor (epsilon).",
      "Arredondar ambos os números com 'Math.round()' antes de comparar.",
      "Usar o operador de igualdade abstrata ('==').",
    ],
    categoria: "Números",
    dificuldade: "intermediario",
  },
  {
    id: 29,
    pergunta:
      "O que o 'JSON.stringify' faz com valores como 'undefined', 'NaN' e 'Infinity' dentro de um objeto?",
    codigo:
      "console.log(JSON.stringify({ a: undefined, b: NaN, c: Infinity }));",
    resposta:
      "Converte 'NaN' e 'Infinity' para 'null', e omite propriedades com valor 'undefined'.",
    justificativa:
      "O formato JSON não tem uma representação para esses valores especiais. 'JSON.stringify' os normaliza: 'NaN' e 'Infinity' viram 'null', e chaves com valor 'undefined' são removidas do objeto final.",
    opcoes: [
      "Mantém todos os valores como estão.",
      "Converte todos eles para a string 'null'.",
      "Lança um erro.",
      "Converte 'NaN' e 'Infinity' para 'null', e omite propriedades com valor 'undefined'.",
      "Converte todos para 0.",
    ],
    categoria: "Objetos",
    dificuldade: "intermediario",
  },
  {
    id: 30,
    pergunta:
      "Se uma função em JavaScript não possui uma instrução 'return', o que ela retorna por padrão?",
    codigo: "function teste() { let a = 1; }",
    resposta: "undefined",
    justificativa:
      "Qualquer função em JavaScript que termina sua execução sem encontrar uma instrução 'return' explicitamente retorna o valor 'undefined'.",
    opcoes: ["null", "0", "false", "undefined", "Um erro"],
    categoria: "Funções",
    dificuldade: "iniciante",
  },
];
# Projeto de Exercícios - AM2 2025/2

Este repositório contém uma série de exercícios práticos e quizzes interativos desenvolvidos para a disciplina de Arquitetura de Software e Métodos Ágeis 2 (AM2) do período 2025/2. O objetivo é fornecer uma ferramenta de aprendizado e autoavaliação sobre conceitos fundamentais e avançados de JavaScript.

## 🚀 Visão Geral

O projeto consiste em múltiplos slides para usar em sala de aula e quizzes, cada um focado em um conjunto específico de tópicos relacionados a programação multimídia para Web.
## ✨ Funcionalidades Principais

- **Quizzes Interativos:** Responda a perguntas de múltipla escolha e receba feedback instantâneo.
- **Persistência de Progresso:** Utilize o `localStorage` para salvar seu progresso e continuar o quiz de onde parou.
- **Feedback Detalhado:** Cada questão inclui uma justificativa clara para a resposta correta, ajudando a solidificar o conhecimento.
- **Resumo de Desempenho:** Ao final do quiz, visualize um resumo completo com suas estatísticas de acertos, erros e taxa de acerto.
- **Navegação Intuitiva:** Avance e retorne entre as questões para revisar suas respostas.
- **Referências de Estudo:** Cada quiz possui uma seção de referências (acordeão) com links para a documentação da MDN e outros recursos relevantes.
- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela.

## 📂 Estrutura do Projeto

O projeto está organizado em pastas, onde cada uma representa uma lista de exercícios ou um quiz específico.

```
am2_2025-2_aulas_exercicios/
├── exercicios/
│   ├── lista_exercicios_01/
│   │   ├── index.html         # Estrutura principal do quiz 1
│   │   ├── style.css          # Estilos do quiz 1
│   │   ├── questoes.js        # Banco de dados de questões
│   │   ├── quiz.js            # Lógica principal do quiz
│   │   └── accordion.js       # Lógica do componente de referências
│   │
│   └── lista_exercicios_02/
│       ├── index.html         # Estrutura principal do quiz 2
│       ├── style.css          # Estilos do quiz 2
│       ├── ...                # (arquivos de script similares)
│
└── README.md                  # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Para a estrutura semântica do conteúdo.
- **CSS3:** Para estilização, layout (Flexbox/Grid) e responsividade.
- **JavaScript (ES6+):** Para toda a lógica interativa, manipulação do DOM e gerenciamento de estado do quiz.

Nenhuma dependência ou framework externo é utilizado, o projeto é construído com **Vanilla JavaScript**.

## 📚 Tópicos Abordados nos Quizzes

Os quizzes cobrem uma ampla gama de conceitos de JavaScript, incluindo:

### Fundamentos (Quiz 1)
- Declaração de Variáveis (`let`, `const`, `var`)
- Tipos de Dados e Operador `typeof`
- Estruturas de Controle (`if/else`, `switch`)
- Loops (`for`, `while`, `for...of`)
- Arrays, Objetos e Funções
- Escopo e Referências

### Tipos de Dados Avançados (Quiz 2)
- Precisão de Números (`Number.MAX_SAFE_INTEGER`, `BigInt`)
- Valores Especiais (`NaN`, `Infinity`, `null`, `undefined`)
- Manipulação de Strings e Unicode (`codePointAt`)
- Tipagem Dinâmica e Coerção de Tipos

## 🏃‍♂️ Como Executar

Como este é um projeto front-end puro, não há necessidade de um servidor ou processo de build.

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até a pasta de um dos exercícios:**
    ```bash
    cd am2_2025-2_aulas_exercicios/exercicios/lista_exercicios_01/
    ```

3.  **Abra o arquivo `index.html`** no seu navegador de preferência (Google Chrome, Firefox, etc.).

    Você pode fazer isso simplesmente arrastando e soltando o arquivo na janela do navegador ou clicando duas vezes nele.

## 👨‍💻 Autor

- **Prof. Wellington Sarmento (SMD/IUVI/UFC)** - [wwagner33](https://github.com/wwagner33/)

---

*Este projeto foi desenvolvido como parte do material didático da disciplina Autoração Multimídia 2 do bacharelado em Sistemas e Mídias Digitais.*


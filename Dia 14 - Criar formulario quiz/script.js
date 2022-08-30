var quizzQuestions = [
  // 1
  {
    question: "<h4>1. Qual a forma correta de se criar um link em HTML?</h4>",
    answers: {
      a: '< span href="link">Link aqui< /span><br>',
      b: '< a href="link">Link aqui< /a><br>',
      c: '< a rel="link">Link aqui< /a><br>',
      d: '< link rel="link">Link aqui< /a><br>',
    },
    correctAnswer: "b",
  },

  // 2
  {
    question: "<h4>2. Qual tag abaixo pertence ao corpo de uma tabela?</h4>",
    answers: {
      a: "< tf><br>",
      b: "< footer<br>",
      c: "< br><br>",
      d: "< thead><br>",
    },
    correctAnswer: "d",
  },

  // 3
  {
    question:
      "<h4>3. Como devemos chamar um script/arquivo CSS dentro do HTML?</h4>",
    answers: {
      a: '< script href="link css" ><br>',
      b: '< link rel="stylesheet" href="link css" > <br>',
      c: '< a href=" link css"< /a> <br>',
      d: '< link href="stylesheet" rel="link css" ><br>',
    },
    correctAnswer: "b",
  },

  // 4
  {
    question: "<h4>4. Qual o nome do criador do HTML?</h4>",
    answers: {
      a: "Dennis Ritchie<br>",
      b: "Linus Torvalds<br>",
      c: "Tim Berners-Lee<br>",
      d: "Brendan Eich<br>",
    },
    correctAnswer: "c",
  },
  //5
  {
    question:
      "<h4>5. Para que o background-image preencha toda a tela, usamos:</h4>",
    answers: {
      a: "background-size: cover;<br>",
      b: "background-content: fill;<br>",
      c: "background-fill: complete;<br>",
      d: "background-attachment: 100%;<br>",
    },
    correctAnswer: "a",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(quizzQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];

      for (letter in questions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var numCorrect = 0;
    var numIncorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        answerContainers[i].style.color = "#0ac22a";
      } else {
        numIncorrect++;
        answerContainers[i].style.color = "#ed1651";
      }
    }

    resultsContainer.innerHTML =
      "<h1>Parabéns! você concluiu o quizz</h1> Veja abaixo os resultados: <br><br>Total Acertos: " +
      numCorrect +
      "/" +
      questions.length +
      "<br>Total Erros: " +
      numIncorrect +
      "/" +
      questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}

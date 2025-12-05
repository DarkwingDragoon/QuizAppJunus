let questions = [
  {
    question: "Was bedeutet das Akronym SQL?",
    answer_1: "Structured Query Language",
    answer_2: "Simple Query Layer",
    answer_3: "System Quality Language",
    answer_4: "Source Query Logic",
    right_answer: 1,
  },
  {
    question: "Welche Datenstruktur arbeitet nach dem LIFO-Prinzip?",
    answer_1: "Linked List",
    answer_2: "Queue",
    answer_3: "Array",
    answer_4: "Stack",
    right_answer: 4,
  },
  {
    question:
      "Welche Schleife wird meist genutzt, um eine feste Anzahl an Durchläufen zu wiederholen?",
    answer_1: "do-while-Schleife",
    answer_2: "while-Schleife",
    answer_3: "for-Schleife",
    answer_4: "repeat-until-Schleife",
    right_answer: 3,
  },
  {
    question:
      "Welches der folgenden ist KEIN primitiver Datentyp in vielen Programmiersprachen?",
    answer_1: "Integer",
    answer_2: "String",
    answer_3: "Boolean",
    answer_4: "Float",
    right_answer: 2,
  },
  {
    question:
      "Welche Datei-Endung wird typischerweise für JavaScript-Dateien verwendet?",
    answer_1: ".js",
    answer_2: ".java",
    answer_3: ".jsx",
    answer_4: ".script",
    right_answer: 1,
  },
  {
    question:
      "Welches Schlüsselwort wird in Java verwendet, um eine Klasse zu erben?",
    answer_1: "inherits",
    answer_2: "extends",
    answer_3: "super",
    answer_4: "implement",
    right_answer: 2,
  },
  {
    question:
      "Welche Sprache wird hauptsächlich zur Gestaltung von Webseiten genutzt?",
    answer_1: "C++",
    answer_2: "Python",
    answer_3: "CSS",
    answer_4: "SQL",
    right_answer: 3,
  },
  {
    question:
      "Welches Symbol wird in vielen Programmiersprachen für Kommentare genutzt?",
    answer_1: "\\\\",
    answer_2: "##",
    answer_3: "--",
    answer_4: "//",
    right_answer: 4,
  },
  {
    question: "Was bedeutet das Konzept 'OOP'?",
    answer_1: "Open Operations Protocol",
    answer_2: "Object-Oriented Programming",
    answer_3: "Overload-Oriented Process",
    answer_4: "Object-Optimization Procedure",
    right_answer: 2,
  },
  {
    question: "Welche dieser Sprachen ist keine Programmiersprache?",
    answer_1: "HTML",
    answer_2: "Python",
    answer_3: "Ruby",
    answer_4: "C#",
    right_answer: 1,
  },
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("questionBody").style.display = "none";
    document.getElementById("endScreen").style = "";
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
    
    }

  let question = questions[currentQuestion];
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
  document.getElementById("currentQuestionNumber").innerHTML =
    currentQuestion + 1;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAQnswer = "answer_" + question["right_answer"];

  if (selectedQuestionNumber == question["right_answer"]) { // Frage wird richtig beantwortet
    console.log("answer is correct");
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    console.log("answer is wrong");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAQnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("nextButton").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

const Matematicasquestions = [
    {
      question: "La cabeza de un cocodrilo mide 50 cm; la cola mide tanto como la cabeza mas medio cuerpo, y el cuerpo tanto como la cabeza y la cola juntas.¿Cuánto mide el cocodrilo?" ,
      image: "cocodrilo.jpg",

      choices: ["a) 300 cm ", "b) 350 cm ", "c) 375 cm ", "d) 400 cm"],

      correctAnswer: 3
    },

    {
      question: "Si 4x + 12 = 36 <br> ¿cual es el valor de X + 3",
      choices: ["a) 6", "b) 9", "c) 15", "d) 18"],
      correctAnswer: 1
    },

    {
      question: "ABC de un triangulo ISOSCELES. ¿cual opción es correcta?",
      choices: ["a) <) A = 40°, <) B = 70° ", "b) <) B = 50°, <) C = 60° ", "c) <) A = 70°, <) B = 50° "],
      correctAnswer: 0
    },

    {
      question: "¿Cuánto es el 30 % de 4 horas?",
      choices: ["a) 48 min", "b) 120 min", "c) 1 h 12 min", "d) 1 h 20 min"],
      correctAnswer: 2
    },

    {
      question: "¿Cuál es el valor de π (pi)?",
      choices: ["a) 3.1415", "b) 3.14159", "c) 3.14", "d) 3.142"],
      correctAnswer: 1
    },
    {
    question: "Si: a + b+ c = 12 calcula: bca + cab + abc",
    choices: ["a) 1222", "b) 36", "c) 1322", "d) 1332"],
      correctAnswer: 3
    },
    {
    question: "Halla el 30 % del 25 % del 20% de 8000",
    choices: ["a) 400", "b) 120", "c) 60", "d) 180"],
      correctAnswer: 1
    },
    {
    question: "Señale el numero que continua en la serie: 2, 3, 8, 63, ___",
    choices: ["a) 3968", "b) 125", "c) 3969", "d) 251"],
      correctAnswer: 0
    },
    {
    question: "Un reloj da 4 campanadas en 6 segundos. ¿En cuánto tiempo dará 8 campanadas?",
    choices: ["a) 12 s", "b) 14 s", "c) 10 s", "d) 8 s"],
      correctAnswer: 1
    },
    {
    question: "La mitad de 80 % de 40 es el número: ",
    choices: ["a) 8", "b) 16", "c) 32", "d) 40"],
      correctAnswer: 1
    },
    {
    question: "Un perro pesa, 2 kg más la mitad de su propio peso. ¿Cuánto pesa el perro?",
    choices: ["a) 2kg", "b) 3kg", "c) 4kg", "d) 5kg"],
      correctAnswer: 2
    },
    {
    question: "¿Cuántos cuartos son seis mitades?",
    choices: ["a) 13", "b) 16", "c) 10", "d) 12"],
      correctAnswer: 3
    },
    {
    question: "Calcular los 7/3 de 2/5",
    choices: ["a) 35/6", "b) 10/21", "c) 15/14", "d) 14/15"],
      correctAnswer: 3
    },
    {
    question: "¿ Qué número continúa? 3 ; 3; 3; 6 ; 36 ; ...",
    choices: ["a) 844", "b) 984", "c) 864", "d) 694"],
      correctAnswer: 2
    },
    {
    question: "Es el resultado de la siguiente ecuación: (2x + 3)(3x-2) = 6x² + 1",
    choices: ["a) -2", "b) 4/3", "c) 7/5", "d) 4"],
      correctAnswer: 2
    },
    {
    question: "En una fiesta hay 60 personas se sabe que 40 son hombres y 13 bailan, ¿Cuál es la cantidad de mujeres que no bailan?",
    choices: ["a) 6", "b) 13", "c) 7", "d) 10"],
      correctAnswer: 2
    },
    {
    question: "Un señor tiene 42 años y su hijo 10, ¿dentro de cuánto tiempo la edad del padre será el triple que la del hijo?",
    image: "../Images/Doc1.jpg",
    choices: ["a) 6", "b) 12", "c) 3", "d) 5"],
    correctAnswer: 0
    },
    {
    question: "¿Cuál es la mitad de 2^1000  ",
    choices: ["a) 1^100", "b) 1^500", "c) 2^500", "d) 2^999"],
      correctAnswer: 3
    },
    {
    question: "¿Cuál es la mitad de 2^500  ",
    choices: ["a) 1^500", "b) 1^250", "c) 2^250", "d) 2^499"],
      correctAnswer: 3
    }
  ];



  

  const questionTimeLimit = 40;
  let timerInterval;
  let timerSeconds = questionTimeLimit;
  let shuffledQuestions = shuffle(Matematicasquestions); // Obtener solo 5 preguntas aleatorias
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let unanswered = 0;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startTimer() {
    timerSeconds = questionTimeLimit;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        unanswered++;
        currentQuestionIndex++;
        if (currentQuestionIndex < Matematicasquestions.length) {
          loadQuestion();
          document.getElementById("continue-btn").style.display = "block";
        } else {
          endTest();
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `${timerSeconds} segundos`;
  }

  function loadQuestion() {
    clearInterval(timerInterval); // Limpiamos el intervalo anterior antes de cargar una nueva pregunta
    startTimer(); // Iniciamos el timer para la nueva pregunta

    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const imageContainer = document.createElement("div");
  imageContainer.innerHTML = `<img src="${currentQuestion.image}" style="width: 50%;">`;
  questionElement.innerHTML = '';
  questionElement.appendChild(imageContainer);

  /*   questionElement.textContent = currentQuestion.question; */
  const questionText = document.createElement("div");
  questionText.innerHTML = `<p>${currentQuestion.question}</p>`;
  questionElement.appendChild(questionText);

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.classList.add("choice");
      choiceButton.onclick = () => checkAnswer(index);
      choicesElement.appendChild(choiceButton);
    });
  }


  function checkAnswer(choice) {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  clearInterval(timerInterval); // Limpiamos el intervalo al responder la pregunta
 // Deseleccionar todas las opciones
 const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => choice.classList.remove('selected'));

  // Marcar visualmente la opción seleccionada
  choices[choice].classList.add('selected');

  if (choice === currentQuestion.correctAnswer) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < Matematicasquestions.length) {
    document.getElementById("continue-btn").style.display = "block"; // Mostrar el botón "Continuar"
  } else {
    endTest();
  }
}

function nextQuestion() {
  loadQuestion();
  const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => choice.classList.remove('selected')); // Limpiar selección anterior
}

function loadQuestion() {
  clearInterval(timerInterval); // Limpiamos el intervalo anterior antes de cargar una nueva pregunta
  startTimer(); // Iniciamos el timer para la nueva pregunta

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Mostrar la imagen asociada a la pregunta
  const imageContainer = document.createElement("div");
  imageContainer.innerHTML = `<img src="${currentQuestion.image}" style="width: 50%;">`;
  questionElement.innerHTML = '';
  questionElement.appendChild(imageContainer);

  // Mostrar el texto de la pregunta
  const questionText = document.createElement("div");
  questionText.innerHTML = `<p>${currentQuestion.question}</p>`;
  questionElement.appendChild(questionText);

  choicesElement.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.classList.add("choice");
    choiceButton.onclick = () => checkAnswer(index);
    choicesElement.appendChild(choiceButton);
  });
}

  function nextQuestion() {
    loadQuestion();
    document.getElementById("continue-btn").style.display = "none";
  }

  function endTest() {
    clearInterval(timerInterval); // Limpiamos el intervalo al finalizar el test
    const questionContainer = document.querySelector(".question-container");
    questionContainer.innerHTML = `
      <h2>¡Test Finalizado!</h2>
      <p>Respuestas correctas: ${correctAnswers}</p>
      <p>Respuestas incorrectas: ${incorrectAnswers}</p>
      <p>No contestadas: ${unanswered}</p>
      
    `;
  }

  function restartTest() {
    window.location.reload(); // Recargar la página para reiniciar el test
  }

  loadQuestion(); // Iniciar la primera pregunta y el cronómetro
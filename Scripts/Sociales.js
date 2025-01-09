const Matematicasquestions = [
  {
    "question": "¿Cuál es el continente más grande por superficie?",
    "choices": ["a) África", "b) Asia", "c) Europa", "d) América"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál es el río más largo del mundo?",
    "choices": ["a) Amazonas", "b) Nilo", "c) Yangtsé", "d) Misisipi"],
    "correctAnswer": 1
  },
  {
    "question": "¿En qué país se encuentra la Torre Eiffel?",
    "choices": ["a) Italia", "b) Alemania", "c) España", "d) Francia"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cuál es el desierto más grande del mundo?",
    "choices": ["a) Desierto del Sáhara", "b) Desierto de Gobi", "c) Desierto de Kalahari", "d) Desierto de Atacama"],
    "correctAnswer": 0
  },
  {
    "question": "¿En qué océano se encuentra el Triángulo de las Bermudas?",
    "choices": ["a) Atlántico", "b) Pacífico", "c) Índico", "d) Ártico"],
    "correctAnswer": 0
  },
  {
    "question": "¿Cuál es el país más poblado del mundo?",
    "choices": ["a) India", "b) Estados Unidos", "c) China", "d) Indonesia"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué país tiene la forma de una bota?",
    "choices": ["a) Francia", "b) Grecia", "c) Italia", "d) España"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es la montaña más alta del mundo?",
    "choices": ["a) Mont Blanc", "b) Monte Everest", "c) Kilimanjaro", "d) Monte McKinley"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál es el país más grande de América del Sur?",
    "choices": ["a) Argentina", "b) Brasil", "c) Perú", "d) Colombia"],
    "correctAnswer": 1
  },
  {
    "question": "¿En qué continente se encuentra Egipto?",
    "choices": ["a) Europa", "b) Asia", "c) África", "d) Oceanía"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es la capital de Japón?",
    "choices": ["a) Beijing", "b) Seúl", "c) Tokio", "d) Bangkok"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es el océano más grande del mundo?",
    "choices": ["a) Atlántico", "b) Índico", "c) Pacífico", "d) Ártico"],
    "correctAnswer": 2
  },
  {
    "question": "¿En qué país se encuentra el Machu Picchu?",
    "choices": ["a) Chile", "b) Perú", "c) Bolivia", "d) Argentina"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál es la capital de Australia?",
    "choices": ["a) Sídney", "b) Melbourne", "c) Canberra", "d) Perth"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué país tiene más islas en el mundo?",
    "choices": ["a) Filipinas", "b) Indonesia", "c) Suecia", "d) Japón"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es el país más pequeño del mundo?",
    "choices": ["a) Mónaco", "b) Vaticano", "c) Liechtenstein", "d) San Marino"],
    "correctAnswer": 1
  },
  {
    "question": "¿En qué continente se encuentra la Cordillera de los Andes?",
    "choices": ["a) América del Norte", "b) Europa", "c) África", "d) América del Sur"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cuál es el segundo país más grande del mundo por superficie?",
    "choices": ["a) China", "b) Estados Unidos", "c) Canadá", "d) Rusia"],
    "correctAnswer": 2
  },
  {
    "question": "¿En qué país se encuentra la Gran Muralla?",
    "choices": ["a) Japón", "b) Corea del Sur", "c) China", "d) India"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es el mar más grande del mundo?",
    "choices": ["a) Mar Caribe", "b) Mar de China Meridional", "c) Mar Mediterráneo", "d) Mar Caspio"],
    "correctAnswer": 3
  }
]
;



  

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
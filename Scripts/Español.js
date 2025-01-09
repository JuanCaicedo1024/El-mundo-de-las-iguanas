const Matematicasquestions = [
  {
    "question": "¿De qué color era el vestido de la protagonista en la historia?",
    "image": "https://example.com/dress.jpg",
    "choices": ["a) Rojo", "b) Azul", "c) Verde", "d) Amarillo"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué objeto encontró el personaje principal en el bosque?",
    "image": "https://example.com/forest.jpg",
    "choices": ["a) Un reloj", "b) Una espada", "c) Un libro", "d) Un anillo"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cuál era el nombre del perro del protagonista?",
    "image": "https://example.com/dog.jpg",
    "choices": ["a) Max", "b) Toby", "c) Rocky", "d) Charlie"],
    "correctAnswer": 0
  },
  {
    "question": "¿En qué ciudad ocurrieron los hechos?",
    "image": "https://example.com/city.jpg",
    "choices": ["a) Madrid", "b) París", "c) Nueva York", "d) Londres"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué hacía el protagonista al inicio de la historia?",
    "image": "https://example.com/action.jpg",
    "choices": ["a) Estaba durmiendo", "b) Estaba caminando", "c) Estaba leyendo", "d) Estaba cocinando"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué le regalaron al personaje principal?",
    "image": "https://example.com/gift.jpg",
    "choices": ["a) Un libro", "b) Una bicicleta", "c) Un gato", "d) Un reloj"],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué animal aparece en la historia?",
    "image": "https://example.com/animal.jpg",
    "choices": ["a) Un león", "b) Un elefante", "c) Un tigre", "d) Un caballo"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué estaba cocinando el personaje principal?",
    "image": "https://example.com/cooking.jpg",
    "choices": ["a) Una sopa", "b) Un pastel", "c) Unas galletas", "d) Una pizza"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué estación del año era en la historia?",
    "image": "https://example.com/season.jpg",
    "choices": ["a) Primavera", "b) Verano", "c) Otoño", "d) Invierno"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué transportaba el personaje cuando salió de casa?",
    "image": "https://example.com/transport.jpg",
    "choices": ["a) Un maletín", "b) Una mochila", "c) Un paraguas", "d) Un sombrero"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál era el objetivo del personaje en la historia?",
    "image": "https://example.com/goal.jpg",
    "choices": ["a) Encontrar a su amigo", "b) Encontrar un tesoro", "c) Llegar a una ciudad", "d) Resolver un misterio"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cómo se sentía el personaje durante el conflicto principal?",
    "image": "https://example.com/feeling.jpg",
    "choices": ["a) Triste", "b) Enojado", "c) Confundido", "d) Feliz"],
    "correctAnswer": 2
  },
  {
    "question": "¿En qué parte de la casa estaba el objeto clave?",
    "image": "https://example.com/house.jpg",
    "choices": ["a) En el sótano", "b) En el ático", "c) En la cocina", "d) En el jardín"],
    "correctAnswer": 1
  },
  {
    "question": "¿Quién era el villano en la historia?",
    "image": "https://example.com/villain.jpg",
    "choices": ["a) Un vecino", "b) Un mago", "c) Un ladrón", "d) Un monstruo"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué descubrió el personaje en el final?",
    "image": "https://example.com/discovery.jpg",
    "choices": ["a) Un mapa", "b) Una carta", "c) Un tesoro", "d) Una llave"],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué tiempo hacía en la historia?",
    "image": "https://example.com/weather.jpg",
    "choices": ["a) Soleado", "b) Nublado", "c) Lluvioso", "d) Nevado"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué edad tenía el protagonista?",
    "image": "https://example.com/age.jpg",
    "choices": ["a) 10 años", "b) 15 años", "c) 20 años", "d) 25 años"],
    "correctAnswer": 1
  },
  {
    "question": "¿Con quién se encontraba el personaje principal?",
    "image": "https://example.com/meeting.jpg",
    "choices": ["a) Con su amigo", "b) Con su hermana", "c) Con un desconocido", "d) Con un maestro"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué le sucedió al personaje durante el viaje?",
    "image": "https://example.com/travel.jpg",
    "choices": ["a) Se perdió", "b) Se enfermó", "c) Se cayó", "d) Se encontró"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué vio el personaje al final del camino?",
    "image": "https://example.com/end.jpg",
    "choices": ["a) Una montaña", "b) Un río", "c) Un castillo", "d) Un bosque"],
    "correctAnswer": 3
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
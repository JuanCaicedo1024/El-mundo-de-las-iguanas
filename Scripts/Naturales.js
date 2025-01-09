const Matematicasquestions = [
  {
    "question": "¿Cuál es la central de energía de la célula?",
    "choices": ["a) Núcleo", "b) Mitocondria", "c) Ribosoma", "d) Retículo endoplasmático"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál es el proceso por el cual las plantas producen su alimento?",
    "choices": ["a) Fotosíntesis", "b) Respiración", "c) Fermentación", "d) Digestión"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué parte de la planta absorbe agua y nutrientes del suelo?",
    "choices": ["a) Tallo", "b) Hojas", "c) Raíces", "d) Flor"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es el gas que las plantas necesitan para la fotosíntesis?",
    "choices": ["a) Oxígeno", "b) Nitrógeno", "c) Dióxido de carbono", "d) Hidrógeno"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué órgano en los seres humanos es responsable de bombear la sangre?",
    "choices": ["a) Pulmones", "b) Hígado", "c) Cerebro", "d) Corazón"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cómo se llama el proceso de eliminación de desechos en las plantas?",
    "choices": ["a) Fotosíntesis", "b) Transpiración", "c) Digestión", "d) Osmosis"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué gas es producido por las plantas durante la fotosíntesis?",
    "choices": ["a) Oxígeno", "b) Dióxido de carbono", "c) Metano", "d) Vapor de agua"],
    "correctAnswer": 0
  },
  {
    "question": "¿Cómo se llama el tejido que transporta agua y minerales en las plantas?",
    "choices": ["a) Xilema", "b) Floema", "c) Epidermis", "d) Estomas"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué tipo de organismo descompone materia orgánica?",
    "choices": ["a) Herbívoros", "b) Descomponedores", "c) Carnívoros", "d) Productores"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál de los siguientes es un ejemplo de un mamífero?",
    "choices": ["a) Sapo", "b) Águila", "c) Delfín", "d) Lagarto"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es la función principal de los glóbulos rojos en la sangre?",
    "choices": ["a) Luchar contra infecciones", "b) Transportar oxígeno", "c) Regular la temperatura", "d) Coagular la sangre"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué tipo de sangre es conocido como el donante universal?",
    "choices": ["a) A", "b) B", "c) AB", "d) O"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cómo se llama el cambio de estado de un insecto a lo largo de su vida?",
    "choices": ["a) Fotosíntesis", "b) Metamorfosis", "c) Digestión", "d) Erosión"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál es el sistema corporal responsable de la producción de hormonas?",
    "choices": ["a) Sistema nervioso", "b) Sistema digestivo", "c) Sistema endocrino", "d) Sistema circulatorio"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué grupo de vertebrados posee escamas y respira principalmente a través de branquias?",
    "choices": ["a) Mamíferos", "b) Aves", "c) Reptiles", "d) Peces"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cómo se llama el órgano donde se lleva a cabo la mayor parte de la digestión en los humanos?",
    "choices": ["a) Estómago", "b) Hígado", "c) Páncreas", "d) Intestino delgado"],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué tipo de organismos realizan la fotosíntesis?",
    "choices": ["a) Animales", "b) Plantas", "c) Hongos", "d) Bacterias"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cuál de las siguientes es una característica de los reptiles?",
    "choices": ["a) Son de sangre caliente", "b) Tienen plumas", "c) Tienen escamas", "d) Respiran por branquias"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué proceso convierte el agua en vapor de agua?",
    "choices": ["a) Condensación", "b) Evaporación", "c) Precipitación", "d) Sublimación"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué reino de seres vivos incluye a los organismos unicelulares sin núcleo definido?",
    "choices": ["a) Animales", "b) Plantas", "c) Protistas", "d) Moneras"],
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
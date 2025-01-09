const Matematicasquestions = [
  {
    "question": "Which word is a synonym of 'happy'?",
    "choices": ["a) Sad", "b) Angry", "c) Joyful", "d) Bored"],
    "correctAnswer": 2
  },
  {
    "question": "Which is the correct form of the verb in this sentence: 'She _____ to the store every day'?",
    "choices": ["a) go", "b) goes", "c) going", "d) gone"],
    "correctAnswer": 1
  },
  {
    "question": "Which sentence is grammatically correct?",
    "choices": ["a) He don't like pizza.", "b) She doesn't likes pizza.", "c) They doesn't like pizza.", "d) She doesn't like pizza."],
    "correctAnswer": 3
  },
  {
    "question": "Which word is an antonym of 'fast'?",
    "choices": ["a) Quick", "b) Rapid", "c) Slow", "d) Swift"],
    "correctAnswer": 2
  },
  {
    "question": "Which is the correct plural form of 'child'?",
    "choices": ["a) Childs", "b) Children", "c) Childrens", "d) Childes"],
    "correctAnswer": 1
  },
  {
    "question": "Which is the correct past tense of 'run'?",
    "choices": ["a) Run", "b) Ran", "c) Runned", "d) Running"],
    "correctAnswer": 1
  },
  {
    "question": "What is the comparative form of 'good'?",
    "choices": ["a) Gooder", "b) Best", "c) Better", "d) Goodest"],
    "correctAnswer": 2
  },
  {
    "question": "Which sentence uses the correct article: 'an' or 'a'?",
    "choices": ["a) She saw an elephant.", "b) She saw a elephant.", "c) She saw an apple.", "d) She saw a apple."],
    "correctAnswer": 0
  },
  {
    "question": "Which is the correct form of the verb in this sentence: 'They ______ for the bus yesterday'?",
    "choices": ["a) wait", "b) waits", "c) waited", "d) waiting"],
    "correctAnswer": 2
  },
  {
    "question": "Which sentence uses the correct preposition?",
    "choices": ["a) I am going in bed.", "b) I am going on bed.", "c) I am going to bed.", "d) I am going at bed."],
    "correctAnswer": 2
  },
  {
    "question": "Which word is an antonym of 'dark'?",
    "choices": ["a) Bright", "b) Black", "c) Gloomy", "d) Dull"],
    "correctAnswer": 0
  },
  {
    "question": "Which is the correct possessive form for 'they'?",
    "choices": ["a) Their", "b) Theirs", "c) They’re", "d) Them"],
    "correctAnswer": 0
  },
  {
    "question": "Which word is a synonym of 'difficult'?",
    "choices": ["a) Easy", "b) Hard", "c) Simple", "d) Light"],
    "correctAnswer": 1
  },
  {
    "question": "Which is the correct form of the verb in this sentence: 'We _____ dinner right now'?",
    "choices": ["a) have", "b) has", "c) having", "d) are having"],
    "correctAnswer": 3
  },
  {
    "question": "Which sentence uses the correct subject-verb agreement?",
    "choices": ["a) She have two dogs.", "b) He has two dogs.", "c) They has two dogs.", "d) She haves two dogs."],
    "correctAnswer": 1
  },
  {
    "question": "Which is the correct order for adjectives in this sentence: 'She bought a _____ dress'?",
    "choices": ["a) red beautiful", "b) beautiful red", "c) red and beautiful", "d) beauty red"],
    "correctAnswer": 1
  },
  {
    "question": "Which is the correct past tense of 'eat'?",
    "choices": ["a) Eats", "b) Eaten", "c) Ate", "d) Eating"],
    "correctAnswer": 2
  },
  {
    "question": "Which word is a synonym of 'big'?",
    "choices": ["a) Large", "b) Small", "c) Tiny", "d) Little"],
    "correctAnswer": 0
  },
  {
    "question": "Which sentence uses the correct conjunction?",
    "choices": ["a) I like pizza and ice cream.", "b) I like pizza but ice cream.", "c) I like pizza so ice cream.", "d) I like pizza yet ice cream."],
    "correctAnswer": 0
  },
  {
    "question": "Which word is a preposition?",
    "choices": ["a) Quickly", "b) In", "c) Beautiful", "d) Runs"],
    "correctAnswer": 1
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
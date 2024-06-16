document.addEventListener("DOMContentLoaded", function () {
  const questions = [
      {
          question: "Was ist Lageenergie?",
          answer: "Potenzielle Energie",
          number: 1,
      },
      {
          question: "Was ist die Kraft, die zwischen Körpern wirkt?",
          answer: "Reibung",
          number: 2,
      },
      {
          question: "Was ist die Schreibweise für Beschleunigung?",
          answer: "a",
          number: 3,
      },
      {
          question: "Wie heißt der Punkt, wo die Stabilität eines schwimmenden Körpers liegt?",
          answer: "Metazentrum",
          number: 4,
      },
  ];

  let currentQuestionIndex = 0;
  let time = 180;
  let elapsedTime = 0;
  let waterHeight = 0;
  let userCode = "";

  const waterElement = document.getElementById("water");
  const countdownElement = document.getElementById("countdown");
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answerInput");
  const submitButton = document.getElementById("submitAnswer");
  const textElement = document.createElement("p");
  textElement.setAttribute("id", "congratulations-text");

  const countdownIntervalId = setInterval(() => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      countdownElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      time--;

      if (time < 0) {
          clearInterval(countdownIntervalId);
          countdownElement.textContent = "00:00";
          questionElement.textContent = "Du hast verloren!";
          questionElement.style.fontSize = "48px";
          questionElement.style.color = "black";
          questionElement.style.textAlign = "center";
          questionElement.style.position = "fixed";
          questionElement.style.top = "50%";
          questionElement.style.left = "50%";
          questionElement.style.transform = "translate(-50%, -50%)";
          submitButton.style.display = "none";
          questionContainer.style.display = "none";
          document.body.appendChild(textElement);
          textElement.textContent = "Du hast verloren!";
          textElement.style.fontSize = "48px";
          textElement.style.color = "black";
          textElement.style.textAlign = "center";
          textElement.style.position = "fixed";
          textElement.style.top = "50%";
          textElement.style.left = "50%";
          textElement.style.transform = "translate(-50%, -50%)";
      }
  }, 1000);

  const waterFillIntervalId = setInterval(() => {
      elapsedTime++;
      waterHeight = (elapsedTime / 180) * 100;
      waterElement.style.height = `${waterHeight}%`;
  }, 1000);

  function askQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      answerInput.value = "";
      questionContainer.style.display = "block";
  }

  const submitAnswer = document.getElementById("submitAnswer");

  submitAnswer.addEventListener("click", () => {
      const currentQuestion = questions[currentQuestionIndex];
      const answer = answerInput.value;

      if (answer === currentQuestion.answer) {
          questionElement.textContent = `Du hast alle ${currentQuestion.number} Fragen richtig beantwortet!`;
          userCode += currentQuestion.number;
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
              setTimeout(askQuestion, 2000);
              questionContainer.style.display = "none";
          } else {
              setTimeout(() => {
                  if (userCode === "0422") {
                      textElement.innerHTML = "Glückwunsch! Dein Code ist 0422, die Reihenfolge ist allerdings nicht richtig,ein kleiner Hinweis; der richtige Code fängt mit 2 an.";
                      document.querySelector('.story').style.display = "none"; 
                  } else {
                      textElement.textContent = "Glückwunsch! Dein Code ist 0422, die Reihenfolge ist allerdings nicht richtig,ein kleiner Hinweis; der richtige Code fängt mit 2 an.";
                  }
                  textElement.style.fontSize = "24px";
                  textElement.style.color = "black";
                  textElement.style.textDecoration = "underline";
                  textElement.style.textShadow = "1px 1px 1px white";
                  document.body.appendChild(textElement);
                  textElement.style.position = "absolute";
                  textElement.style.top = "75%";
                  textElement.style.left = "50%";
                  textElement.style.transform = "translate(-50%, -50%)";
                  submitButton.style.display = "none";
                  questionContainer.style.display = "none";

                 
                  codeInputs.forEach((input) => {
                      input.style.display = "block";
                  });

                 
                  submitBtn.style.display = "block";
              }, 2000);
          }
      } else {
          questionElement.textContent = "Falsche Antwort. Versuch nochmal!";
      }
  });

  askQuestion();

  const codeInputs = document.querySelectorAll(".code-input");
  const submitBtn = document.getElementById("submitBtn");
  const tryAgainMsg = document.getElementById("tryAgain");

  codeInputs.forEach((input) => {
      input.style.display = "none"; 
  });

  submitBtn.style.display = "none";
  tryAgainMsg.style.display = "none";

  submitBtn.addEventListener("click", () => {
      const code = Array.from(codeInputs)
          .map((input) => input.value)
          .join("");
      if (code === "2024") {
          window.location.href = "index2.html";
      } else {
          tryAgainMsg.style.display = "block";
          codeInputs.forEach((input) => (input.value = ""));
          setTimeout(() => {
              tryAgainMsg.style.display = "none";
          }, 3000);
      }
  });

  codeInputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
          if (e.inputType === "deleteContentBackward") {
              return;
          }
          if (input.value.length === 1) {
              if (index < 3) {
                  codeInputs[index + 1].focus();
              } else {
                  submitBtn.focus();
              }
          }
      });

      input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && index > 0 && input.value.length === 0) {
              codeInputs[index - 1].focus();
          }
      });
  });
});

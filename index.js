
    var questions = [
      {
        question: "What is 2*5?",
        choices: [2, 5, 10, 15, 20],
        correctAnswer: 2
      },
      {
        question: "What is 3*6?",
        choices: [3, 6, 9, 12, 18],
        correctAnswer: 4
      },
      {
        question: "What is 8*9?",
        choices: [72, 99, 108, 134, 156],
        correctAnswer: 0
      },
      {
        question: "What is 1*7?",
        choices: [4, 5, 6, 7, 8],
        correctAnswer: 3
      },
      {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
      }
    ];
  
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    // var quiz = $("#quiz"); //Quiz div object
    var quiz = document.getElementById("quiz")
  
    // Display initial question
    displayNext();
    

    let nextButton = document.getElementById("next")
    nextButton.addEventListener("click", handleNext)
 
    // Click handler for the 'next' button
    function handleNext() {
        //   choose();

          if (isNaN(selections[questionCounter])) {
            alert("Please make a selection!");
          } else {
            questionCounter++;
            displayNext();
          }
        }

  
    // Click handler for the 'skip' button
    let skipButton = document.getElementById("prev")
    skipButton.addEventListener("click", handleSkip)

    function handleSkip(){
        if (quiz.is(":animated")) {
            return false;
          }
          choose();
          questionCounter++;
          displayNext();
    }

  
    // Click handler for the 'Start Over' button
    // $("#start").on("click", function (e) {
    //   e.preventDefault();
  
    //   if (quiz.is(":animated")) {
    //     return false;
    //   }
    //   questionCounter = 0;
    //   selections = [];
    //   displayNext();
    //   $("#start").hide();
    // });
  
    // Animates buttons on hover
    // $(".button").on("mouseenter", function () {
    //   $(this).addClass("active");
    // });
    // $(".button").on("mouseleave", function () {
    //   $(this).removeClass("active");
    // });
  
    // Creates and returns the div that contains the questions and
    // the answer selections
    function createQuestionElement(index) {
    //   var qElement = $("<div>", {
    //     id: "question"
    //   });

      var questionElement = document.createElement("div").setAttribute("id","question")

      var hgg = document.createElement("h2")
    //   h1.innerText = "hello"

      
      var header = document.createElement("h2")
    //   header.innerText(`<h2>Question  + ${index + 1} + :</h2>`)
      
  
    //   var question = $("<p>").append(questions[index].question);
    //   questionElement.append(question);
  
    //   var radioButtons = createRadios(index);
    //   questionElement.append(radioButtons);
  
      return questionElement;
    }
  
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {

      var radioList = document.createElement("ul");
      var item;
      var input = "";
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = document.createElement("li");
        input = '<input type="radio" name="answer" value=' + i + " />";
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
  
    // Reads the user selection and pushes the value to an array
    function choose() {
        let ans = document.getElementById
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
  
    // Displays next requested element
    function displayNext() {
        console.log(questionCounter)
      function display () {
        // document.getElementById("question").remove()
        // $("#question").remove();
  
        if (questionCounter < questions.length) {
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion)
          if (!isNaN(selections[questionCounter])) {
            $("input[value=" + selections[questionCounter] + "]").prop(
              "checked",
              true
            );
          }
  
          // Controls display of 'prev' button
        //   if (questionCounter === 1) {
        //     $("#prev").show();
        //   } else if (questionCounter === 0) {
        //     $("#prev").hide();
        //     $("#next").show();
        //   }
        } else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $("#next").hide();
          $("#prev").hide();
          $("#start").show();
        }
      };
      display()
    }
  
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $("<p>", { id: "question" });
  
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
  
      score.append(
        "You got " +
          numCorrect +
          " questions out of " +
          questions.length +
          " right!!!"
      );
      return score;
    }

  
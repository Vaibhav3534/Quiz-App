const questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
}, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
}, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
}, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
}, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
}];

let selectedAnswers = [];
let questionCount = 0

const DisplayData = () => {
    let container = document.getElementById("quiz")
    container.innerHTML = ""

    if (questionCount < questions.length) {
        var questDiv = document.createElement("div").setAttribute("id", "question")
        let header = document.createElement("h2")
        header.innerHTML = `Question ${questionCount + 1} :`
        container.append(header)

        let question = document.createElement("p")
        question.innerText = `${questions[questionCount].question}`

        container.append(question)

        let options = createOptions(questionCount)

        container.append(options)


    }
}

const createQuestion = (index) => {

    return questDiv
}

const createOptions = (index) => {
    let options = document.createElement("ul")
    for (let i = 0; i < questions[index].choices.length; i++) {
        let li = document.createElement("li")
        let input = `<input class="optionInput" type="radio" name="answer" value=${i} /> ${questions[index].choices[i]}`
        li.innerHTML = input
        options.append(li)
    }

    return options
}

const selectAnswer = (index) => {
    let inputOption = document.getElementsByClassName("optionInput").namedItem("answer")
    console.log(inputOption)
    // selectedAnswers[index] = 
}

const handleNext = () => {
    console.log("clicked next")

    let ans = {
        question: questions[questionCount].question,
        choiceMarked: "",
        correctAnswer: questions[questionCount].correctAnswer
    }

    selectedAnswers.push(ans);
    
    questionCount++;
    if(questionCount === questions.length-1){
        document.getElementById("skip").setAttribute("disabled", "true")
    }
    
    DisplayData()
    console.log(selectedAnswers)
}

let nextButton = document
    .getElementById("next")
    .addEventListener("click", handleNext)

const handleSkip = ()=>{
    questionCount++;
    if(questionCount === questions.length-1){
        document.getElementById("skip").setAttribute("disabled", "true")
    }
    DisplayData()
}

let skipButton = document.getElementById("skip")
                    .addEventListener("click", handleSkip)


DisplayData()
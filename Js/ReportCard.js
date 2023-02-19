
const resultData = JSON.parse(localStorage.getItem("result"))
console.log(resultData)

let table = document.getElementById("table")

let count=0


for (let i = 0; i < resultData.length; i++) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    console.log(resultData[i])
    td1.innerText = resultData[i].question

    let td2 = document.createElement("td")
    let correctAnswer = resultData[i].correctAnswer
    td2.innerText = resultData[i].choices[correctAnswer]

    let td3 = document.createElement("td")
    let choiceMarked = resultData[i].choiceMarked
    td3.innerText = resultData[i].choices[choiceMarked]

    let td4 = document.createElement("td")
    if(resultData[i].choiceMarked == resultData[i].correctAnswer){
        count++
    }
    resultData[i].choiceMarked == resultData[i].correctAnswer ?  td4.innerText = 1  : td4.innerText = 0

    tr.append(td1, td2, td3, td4)
    table.appendChild(tr)
}

let score = document.getElementById("score")
score.innerText = `Total Score : ${count}`

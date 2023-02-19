
const resultData = JSON.parse(localStorage.getItem("result"))
console.log(resultData)

let table = document.getElementById("table")

for (let i = 0; i < resultData.length; i++) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    console.log(resultData[i])
    td1.innerText = resultData[i].question

    let td2 = document.createElement("td")
    td2.innerText = resultData[i].correctAnswer

    let td3 = document.createElement("td")
    td3.innerText = resultData[i].choiceMarked

    let td4 = document.createElement("td")
        resultData[i].choiceMarked === resultData[i].correctAnswer ? td4.innerText = 1 : td4.innerText = 0

    tr.append(td1, td2, td3, td4)
    table.appendChild(tr)
}

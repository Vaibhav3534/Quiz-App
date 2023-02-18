
// const users = []

let form = document.getElementById("form")





const handleSubmit = (event) => {

    event.preventDefault()

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm_password = document.getElementById("confirm_password").value

    const usersData = localStorage.getItem("users") === null ? [] : JSON.parse(localStorage.getItem("users"))

    const users = [...usersData]

    console.log(users)
    
    // if()
    if(users.filter(elem => elem.email === email).length!==0){
        return alert("Already registered")
    }

    if (password != confirm_password) {
        return alert("Password don't match")
    }

    // console.log(username)
    // console.log(users)
    let user = {
        username: username,
        email: email,
        password: password,
    }

    
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))

    alert("Registered Successfully")

}


const handleSubmit = (event) => {

    event.preventDefault()

    let first_name = document.getElementById("first_name").value
    let last_name = document.getElementById("last_name").value
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

    if(password.length < 6){
        return alert("Password must be min 6")
    }
    if (password != confirm_password) {
        return alert("Password don't match")
    }

    let user = {
        first_name:first_name,
        last_name:last_name,
        email: email,
        password: password,
    }

    
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))

    alert("Registered Successfully")

}

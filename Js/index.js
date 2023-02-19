
const handleLogin = (event)=>{
    event.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    try {
        let usersData = JSON.parse(localStorage.getItem("users")) || null
        let users = [...usersData]
        let user = users.filter(elem=>elem.email === email)
        console.log(user)
        if(user.length === 0){
            return alert("Please register first")
        }
        if(user[0].password !== password){
            return alert("Wrong Password")
        }
        alert("Login successfull")
        return window.location.replace("./Pages/Quiz.html")

    } catch (error) {
        console.log(error)
    }
}
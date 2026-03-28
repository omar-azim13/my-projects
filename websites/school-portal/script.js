const form = document.getElementById("login-form")

form.addEventListener("submit", function(event){

    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // Password logic
    const correctUsername = "omar"
    const correctPassword = "1234"

    // Check if the username & password is correct
    if(username === correctUsername && password === correctPassword){
        window.location.href = "dashboard.html"
    }
    else{
        alert("Incorrect login")
    }

})
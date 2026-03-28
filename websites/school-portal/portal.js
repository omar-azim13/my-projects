const profileMenu = document.querySelector(".profile-menu")
const dropdown = document.querySelector(".profile-dropdown")

profileMenu.addEventListener("click", () => {

dropdown.style.display =
dropdown.style.display === "block"
? "none"
: "block"

})

document.addEventListener("click", function(e){

if(!profileMenu.contains(e.target)){
dropdown.style.display = "none"
}

})

/* =========================
   GET ALL STAR GROUPS
========================= */

const ratingSections = document.querySelectorAll(".stars")



// Loop through Each Rating
ratingSections.forEach(section => {

    const stars = section.querySelectorAll("span")

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            /* remove active stars first */

            stars.forEach(s => {
                s.style.color = "#c5cbd6"
            })


            /* highlight stars up to clicked one */

            for (let i = 0; i <= index; i++) {
                stars[i].style.color = "#f7b500"
            }

        })

    })

})

// Fake submit popup
const submitButton = document.querySelector(".submit-btn")

const popup = document.getElementById("submitPopup")

const closePopup = document.querySelector(".popup-close")


/* submit button */

submitButton.addEventListener("click", function(){

    popup.classList.add("active")

})


/* close popup */

closePopup.addEventListener("click", function(){

    popup.classList.remove("active")

})
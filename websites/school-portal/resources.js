const subjectCards = document.querySelectorAll(".subject-card")

const subjectSelectScreen = document.querySelector(".subject-select-screen")
const subjectResourceScreen = document.querySelector(".subject-resource-screen")

const subjectTitle = document.querySelector(".subject-title")
const teacherName = document.querySelector(".teacher-name")

const backButton = document.querySelector(".back-to-subjects")

const filesContainer = document.getElementById("files-container")
const slidesContainer = document.getElementById("slides-container")
const linksContainer = document.getElementById("links-container")
const assignmentsContainer = document.getElementById("assignments-container")

/* =========================
   TEACHER DATABASE
========================= */

const teachers = {

    science: "Dana Owies",
    math: "Sara Dyab",
    english: "English Teacher",
    arabic: "Arabic Teacher",
    ict: "ICT Teacher",
    islamic: "Islamic Teacher",
    socialstudies: "Social Studies Teacher"

}


/* =========================
   RESOURCE DATABASE
========================= */

const resources = {

    science: {
        files: [
            { title: "Cells Worksheet", date: "Feb 22" },
            { title: "Energy Study Guide", date: "Feb 18" }
        ],
        slides: [
            { title: "Cells Lesson Slides", date: "Feb 15" }
        ],
        links: [
            { title: "BBC Science Cells", date: "Feb 14", url: "#" }
        ],
        assignments: [
            { title: "MAP Test Guide", date: "Mar 5" }
        ]
    },

    math: {
        files: [
            { title: "Algebra Worksheet", date: "Feb 24" },
            { title: "Fractions Practice", date: "Feb 20" }
        ],
        slides: [
            { title: "Algebra Lesson Slides", date: "Feb 19" }
        ],
        links: [
            { title: "Khan Academy Algebra", date: "Feb 18", url: "https://www.khanacademy.org/" },
            { title: "IXL Homework", date: "Feb 18", url:"https://www.ixl.com/" }
        ],
        assignments: [
            { title: "MAP Test Guide", date: "Mar 5" }
        ]
    },

    english: {
        files: [
            {title: "Grade 7 Term 2 Study Guide", date: "22 Feb"},
            {title: "Writing Exam Material", date: "21 Feb"}
        ],
        slides: [],
        links: [
            {title: "Connotation and Denotation IXL Practise", date:"20 Feb", url:"https://www.ixl.com/"}
        ],
        assignments: [
            { title: "English MAP Resources", date: "Mar 5" }
        ]
    },

    arabic: {
        files: [],
        slides: [],
        links: [],
        assignments: [
            {title: "IBT Exam 2026", date: "Mar 9"}
        ]
    },

    ict: {
        files: [],
        slides: [],
        links: [],
        assignments: []
    },

    islamic: {
        files: [
            {title: "Classroom Practise", date: "Mar 1"}
        ],
        slides: [
            {title: "Life of Abu Hanifa", date: "Mar 1"}
        ],
        links: [],
        assignments: [
            {title: "Research on Abu Hanifa",date: "Mar 1"}
        ]
    },

    socialstudies: {
        files: [],
        slides: [],
        links: [],
        assignments: []
    }

}


/* =========================
   RENDER RESOURCES
========================= */

function renderResources(subject) {

    filesContainer.innerHTML = ""
    slidesContainer.innerHTML = ""
    linksContainer.innerHTML = ""
    assignmentsContainer.innerHTML = ""

    const data = resources[subject]


    /* FILES */

    if (data.files.length === 0) {

        filesContainer.innerHTML =
            '<p class="empty-message">Oops! Looks pretty empty in here! Please contact your teacher.</p>'

    } else {

        data.files.forEach(file => {

            filesContainer.innerHTML += `
<div class="resource-row">
<span>📄 ${file.title}</span>
<span class="resource-date">${file.date}</span>
<a href="#" class="download-btn">Download</a>
</div>
`

        })

    }


    /* SLIDES */

    if (data.slides.length === 0) {

        slidesContainer.innerHTML =
            '<p class="empty-message">Oops! Looks pretty empty in here! Please contact your teacher.</p>'

    } else {

        data.slides.forEach(slide => {

            slidesContainer.innerHTML += `
<div class="resource-row">
<span>📊 ${slide.title}</span>
<span class="resource-date">${slide.date}</span>
<a href="#" class="download-btn">Open</a>
</div>
`

        })

    }


    /* LINKS */

    if (data.links.length === 0) {

        linksContainer.innerHTML =
            '<p class="empty-message">Oops! Looks pretty empty in here! Please contact your teacher.</p>'

    } else {

        data.links.forEach(link => {

            linksContainer.innerHTML += `
<div class="resource-row">
<span>🔗 ${link.title}</span>
<span class="resource-date">${link.date}</span>
<a href="${link.url}" class="download-btn">Visit</a>
</div>
`

        })

    }


    /* ASSIGNMENTS */

    if (data.assignments.length === 0) {

        assignmentsContainer.innerHTML =
            '<p class="empty-message">There are no assignments uploaded yet.</p>'

    } else {

        data.assignments.forEach(assign => {

            assignmentsContainer.innerHTML += `
<div class="resource-row">
<span>📝 ${assign.title}</span>
<span class="resource-date">${assign.date}</span>
<a href="#" class="download-btn">Open</a>
</div>
`

        })

    }

}


/* =========================
   SUBJECT CLICK
========================= */

subjectCards.forEach(card => {

    card.addEventListener("click", function (e) {

        const subject = card.textContent
            .toLowerCase()
            .replace(/\s/g, "")

        subjectTitle.textContent = card.textContent

        teacherName.textContent =
            "Teacher: " + teachers[subject]

        /* LOAD SUBJECT RESOURCES */

        renderResources(subject)


        /* SWITCH SCREENS */

        subjectSelectScreen.style.display = "none"
        subjectResourceScreen.style.display = "block"


        /* RIPPLE EFFECT */

        const circle = document.createElement("span")

        const diameter = Math.max(card.clientWidth, card.clientHeight)

        circle.style.width = circle.style.height = diameter + "px"

        const rect = card.getBoundingClientRect()

        circle.style.left =
            e.clientX - rect.left - diameter / 2 + "px"

        circle.style.top =
            e.clientY - rect.top - diameter / 2 + "px"

        circle.classList.add("ripple")

        const ripple = card.getElementsByClassName("ripple")[0]

        if (ripple) {
            ripple.remove()
        }

        card.appendChild(circle)

    })

})


/* =========================
   BACK BUTTON
========================= */

backButton.addEventListener("click", function () {

    subjectResourceScreen.style.display = "none"
    subjectSelectScreen.style.display = "block"

})


/* =========================
   INITIAL STATE
========================= */

subjectResourceScreen.style.display = "none"
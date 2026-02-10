// window.onload = function() {
//     alert("Welcome to my portfolio website")
// };

function toggleSkills(){
    const skills = document.getElementById("skillsList");
    if (skills.style.display === "none"){
        skills.style.display = "flex";
    } else {
        skills.style.display = "none";
    }
}

document.querySelectorAll(".activity-card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.getAttribute("data-link1");
        window.open(link, "_blank");
    });
});

// document.querySelectorAll(".project-card").forEach(card => {
//     card.addEventListener("click", () => {
//         const link = card.getAttribute("data-link");
//         window.open(link, "_blank");
//     });
// });


document.querySelectorAll(".project-card").forEach(card => {

    const github = card.dataset.github;
    const demo = card.dataset.demo;

    if (!demo) {
        card.querySelector(".demo-link").style.display = "none";
    }

    card.addEventListener("click", () => {
        window.open(github, "_blank");
    });

    const demoLink = card.querySelector(".demo-link");
    demoLink.addEventListener("click", (e) => {
        e.stopPropagation();
        window.open(demo, "_blank");
    });
});

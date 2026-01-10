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
// script.js
function showInstructions(gameName, message, link) {
    const overlay = document.getElementById("instructionOverlay");
    const text = document.getElementById("instructionText");
    const agreeBtn = document.getElementById("agreeBtn");

    text.innerHTML = `<strong>${gameName}</strong><br><br>${message}`;
    overlay.style.display = "flex";

    agreeBtn.onclick = () => {
        overlay.style.display = "none";
        window.location.href = link;
    };
}

function closeInstructions() {
    document.getElementById("instructionOverlay").style.display = "none";
}

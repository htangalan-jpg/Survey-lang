function openLetter() {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("confession").style.display = "block";
}

function showAnswer() {
    document.getElementById("answer").innerHTML =
        "Whatever your answer is, thank you for reading my letter. ❤️";
}
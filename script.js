const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {
  letter.classList.add("open");
  openBtn.style.display = "none";

  setTimeout(() => {
    createFallingHearts();
  }, 400);
});

function createFallingHearts() {
  const totalHearts = 26;

  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.textContent = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 18 + 14) + "px";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heart.style.animationDelay = (Math.random() * 1.5) + "s";
    heart.style.setProperty("--drift", (Math.random() * 140 - 70) + "px");

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
}
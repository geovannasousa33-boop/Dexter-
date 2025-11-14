document.addEventListener("DOMContentLoaded", () => {

  const revealBtn = document.getElementById("revealMore");
  const moreText = document.getElementById("moreText");

  revealBtn.addEventListener("click", () => {
    moreText.classList.toggle("hidden");
    revealBtn.textContent = moreText.classList.contains("hidden")
      ? "Ler mais"
      : "Ocultar";
  });

  const highlightBtn = document.getElementById("highlightBtn");
  const caseList = document.getElementById("caseList");

  highlightBtn.addEventListener("click", () => {
    const items = caseList.querySelectorAll(".card");
    if(items[1]){
      items.forEach(card => card.classList.remove("highlight"));
      items[1].classList.add("highlight");
      setTimeout(() => items[1].classList.remove("highlight"), 4200);
    }
  });

  const gallery = document.getElementById("gallery");

  gallery.addEventListener("click", (e) => {
    const thumb = e.target.closest(".thumb");
    if(!thumb) return;
    const index = Array.from(gallery.children).indexOf(thumb) + 1;
    alert("Apresentação — miniatura " + index);
  });

});


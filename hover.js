const box = document.querySelector(".box-hover");
const span = document.querySelector(".box-hover > span");
const ditals = document.querySelectorAll(".detail-div");

ditals.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    box.style.top = `${e.clientY}px`;
    box.style.left = `${e.clientX}px`;
    box.style.display = "flex";

    if (el.classList.contains("cash")) {
      span.textContent = "Gotówka";
    } else if (el.classList.contains("seving")) {
      span.textContent = "Oszczędności";
    } else {
      span.textContent = "Inwestycje";
    }
  });
  el.addEventListener("mouseleave", (e) => {
    box.style.display = "none";
  });
});

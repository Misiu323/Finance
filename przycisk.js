const btn_next2 = document.querySelector(".first");
const btn_next3 = document.querySelector(".next-third");
const box1 = document.querySelector(".box-start");
const box2 = document.querySelector(".box-second");
const box3 = document.querySelector(".box-third");
const btn_back1 = document.querySelector(".back-first");
const btn_back2 = document.querySelector(".back-second");

btn_next2.addEventListener("click", (e) => {
  box1.style.display = "none";
  box2.style.display = "block";
  box3.style.display = "none";
});
btn_next3.addEventListener("click", (e) => {
  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "block";
});
btn_back1.addEventListener("click", (e) => {
  box1.style.display = "block";
  box2.style.display = "none";
  box3.style.display = "none";
});
btn_back2.addEventListener("click", (e) => {
  box1.style.display = "none";
  box2.style.display = "block";
  box3.style.display = "none";
});

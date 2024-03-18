const procent = document.querySelectorAll(".percent");
const liczba = document.querySelectorAll(".range");
const MaxMoney = document.querySelector("#money");

procent.forEach((el, index) => {
  el.addEventListener("input", (e) => {
    const wartosc = parseInt(el.value);

    if (wartosc > parseInt(e.target.dataset.prevValue)) {
      procent.forEach((element, idx) => {
        if (idx !== index) {
          element.value = parseInt(element.value) - 3;
        }
      });
    } else if (wartosc < parseInt(e.target.dataset.prevValue)) {
      procent.forEach((element, idx) => {
        if (idx !== index) {
          element.value = parseInt(element.value) + 3;
        }
      });
    }
    e.target.dataset.prevValue = wartosc.toString();
    wyswietl();
  });
  el.dataset.prevValue = el.value;
});
function wyswietl() {
  liczba[0].textContent = parseInt(
    MaxMoney.value * (0.01 * (procent[0].value / 3))
  );
  liczba[1].textContent = parseInt(
    MaxMoney.value * (0.01 * (procent[1].value / 3))
  );
  liczba[2].textContent = parseInt(
    MaxMoney.value * (0.01 * (procent[2].value / 3))
  );
}
// export { MaxMoney, liczba };
// module.exports = { MaxMoney, liczba };

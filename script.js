// ------------------ V A R I A B L E S ------------------

const number = document.querySelector(".number");
const btnContainer = document.querySelector(".btn-container");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

// ------------------ E V E N T S ------------------

decrease.addEventListener("click", decreaseFunction);
reset.addEventListener("click", resetFunction);
increase.addEventListener("click", increaseFunction);

// ------------------ F U N C T I O N S ------------------

function decreaseFunction() {
  let reqem = parseInt(number.textContent);
  reqem--;
  number.textContent = reqem;

  if (reqem > 0) {
    number.style.color = "green";
  } else if (reqem < 0) {
    number.style.color = "red";
  } else if ((reqem === 0)) {
    number.style.color = "white";
  }
}

function resetFunction() {
  let reqem = parseInt(number.textContent);
  reqem = 0;
  number.textContent = reqem;
  number.style.color = "white";
}

function increaseFunction() {
  let reqem = parseInt(number.textContent);
  reqem++;
  number.textContent = reqem;

  if (reqem > 0) {
    number.style.color = "green";
  } else if (reqem < 0) {
    number.style.color = "red";
  } else if ((reqem === 0)) {
    number.style.color = "white";
  }
}

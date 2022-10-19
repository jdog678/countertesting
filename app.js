// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text")
var penalty = 0;
var count1 = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count1 = 0;
      penalty--;
      count = value.textContent/1 + penalty
    } else if (styles.contains("increase")) {
      penalty = 0;
      count++;
      count1++;
      if (count1 > 4) {
        count = value.textContent/1 + text.value/1;
      }
      if (count1 > 8) {
        count = value.textContent/1 + (text.value/1)*2;
      }
      if (count1 > 12) {
        count = value.textContent/1 + (text.value/1)*3;
      }
      if (count1 > 16) {
        count = value.textContent/1 + (text.value/1)*4;
      }
    } else if (styles.contains("reset")){
        count1 = 0;
        penalty = 0;
        count = 0;
    }else if (styles.contains("decreasetwo")){
        count-=2;
    }else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    if (count === 100) {
        value.style.color = "#FFC0CB";
    }
    value.textContent = count;

  });
});


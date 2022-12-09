const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.querySelector(".progress");

let active = 1;

prev.addEventListener("click", () => {
  if (active === 1) {
    active = 1; 
  } else {
    active--;
    if(active===1) {
      prev.disabled=true;
    }
  }
  if (active<circles.length) {
    next.disabled=false;
  }
  update();
});

next.addEventListener("click", () => {
  prev.disabled = false;
  if (active === circles.length) {
    active = circles.length;
  } else {
    active++;
    if (active === circles.length) {
      next.disabled = true;
    }
  }
  update();
});

function update() {
  const countActive = document.querySelectorAll(".active").length;
  
  if (countActive < active) {
    circles[active - 1].classList.add("active");
  } else if (countActive > active) {
    circles[active].classList.remove("active");
  }
  progress.style.width=350/(circles.length-1)*(active-1)+'px';
}

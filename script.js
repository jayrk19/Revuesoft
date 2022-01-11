let head= document.getElementsByClassName('navbar')[0];
let links = document.querySelector(".links");
let bars = head.querySelector('.fa-bars');
let times = head.querySelector('.fa-times');
console.log(bars);

let hide = () => {
  links.style.right="-80vw";
  // links.style.display="none";
  bars.style.display = "block";
  times.style.display = "none";
};
let show = () => {
  
  links.style.right="0";
  // links.style.display="flex";
    times.style.display = "block";
    bars.style.display = "none";
};

console.log('hello');



let dp = document.getElementsByClassName("dropdown-content");

for (var i = 0; i < dp.length; ++i) {
  dp[i].onmouseleave = function(e){
      e.target.classList.add("active");
  }
}


function func(e){
    e.parentElement.classList.remove("active");
}






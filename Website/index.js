const resBtn = document.getElementById("resBtn");
const optMenu = document.getElementById("optMenu");
const skillRow = document.getElementById("skillRow");

const dropSec = document.getElementById("dropdown");
const dropDnBtn = document.getElementById("dropDnBtn");
dropDnBtn.addEventListener("click", () => {
  console.log(dropSec.style.display);
  dropSec.classList.toggle("drpVisible");
  console.log("hiiii");
});




resBtn.addEventListener("click", () => {
  document.body.style.overflow='hidden';
  optMenu.classList.add("visible");
  // const btns = document.getElementsByClassName('btns');
  // for(let i=0;i<btns.length;i++){
  //   btns[i].addEventListener('click',()=>{
  //     document.getElementById("skillSection").scrollIntoView();
  //   })
  // }
});


function funcResClose(optMenu){
  document.body.style.overflow='scroll';
  document.getElementById(optMenu).classList.toggle("visible");
}




function toEdu() {
  console.log("hiiii");
  document.getElementById("eduSec").scrollIntoView();
}
function toSkill() {
  console.log("hiiii");
  document.getElementById("skillSection").scrollIntoView();
}
function toWorks() {
  console.log("hiiii");
  document.getElementById("workSec").scrollIntoView();
}

function toBottom(){
    document.getElementById('footer').scrollIntoView();
}

function toTop(){
    document.getElementById('header').scrollIntoView();
}

window.addEventListener("scroll", function (ev) {
  const mainSec = document.getElementById("mainSec");
  const mainTop = document.getElementById("mainNav");
  var distanceToTop = Math.floor(mainSec.getBoundingClientRect().top);
  if (distanceToTop <= 0) {
    mainTop.classList.add("newClass");
    skillSection.style.marginTop = "10vh";
  } else {
    mainTop.classList.remove("newClass");
    skillSection.style.marginTop = "0vh";
  }
});

const edudetails = document.getElementsByClassName("eduDetails");
function showBox(ele) {
  for (let index = 0; index < edudetails.length; index++) {
    const id = edudetails[index].id;
    document.getElementById(id).style.zIndex = "5";
  }
  console.log(ele);
  document.getElementById(ele).style.zIndex = "7";
}

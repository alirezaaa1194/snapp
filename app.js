let acbutton = document.getElementById("acbutton");
let icon = document.getElementById("icon");
let cover = document.getElementById("cover");
let container4 = document.getElementById("container4");
let section5 = document.getElementById("section5");
let body = document.body;
let count = true;
let phone = document.getElementById("phone");
let fillcircle = document.getElementById("fillcircle");
let xcircle = document.getElementById("xcircle");
let seemorebtn = document.getElementById("seemorebtn");
let section4 = document.getElementById("section4");
let section7=document.querySelector('.section7_con');
let allbtn=document.querySelector('.all-btn');
function checkinputvalue1() {
  if (phone.value.length > 0) {
    fillcircle.style.display = "none";
    xcircle.style.display = "block";
  } else {
    fillcircle.style.display = "block";
    xcircle.style.display = "none";
  }
  xcircle.addEventListener("click", function checkinputvalue2() {
    phone.value = "";
    if ((phone.value.length = "")) {
      fillcircle.style.display = "none";
      xcircle.style.display = "block";
    } else {
      fillcircle.style.display = "block";
      xcircle.style.display = "none";
    }
  });
}
icon.style.transform = "rotate(0deg)";
acbutton.addEventListener("click", function a() {
  if (count == true) {
    icon.style.transform = "rotate(180deg)";
    count = false;
  } else {
    icon.style.transform = "rotate(0deg)";
    count = true;
  }
});
seemorebtn.addEventListener("click", function bgn() {
  if (window.matchMedia("(orientation:landscape)").matches) {
    section4.style.height = "auto";
    section5.classList.remove('container')
    section5.classList.add('container-fluid')
    container4.classList.remove('position-absolute')
  } else {
    section4.style.height = "auto";
    container4.classList.remove('position-absolute')
  }
  seemorebtn.style.display = "none";
  cover.style.display = "none";
  section5.style.paddingTop="30px"
});
if(screen.availWidth>750 && screen.availWidth<1100){
  container4.classList.remove('container');
  container4.classList.add('container-fluid');
  section5.classList.remove('container');
  section5.classList.add('container-fluid');
  container4.classList.remove('position-absolute')
}
if(screen.availWidth>1100){
  container4.classList.remove('position-absolute')
}
if (screen.availWidth<800 && window.matchMedia("(orientation:landscape)").matches) {
  container4.classList.add('position-absolute')
  section5.classList.remove('container')
  section5.classList.add('container-fluid')
  section7.classList.remove('container')
  section7.classList.add('container-fluid')
}
let offcanvas_counter=false;
allbtn.addEventListener('click', function(){
  if(offcanvas_counter==false){
    allbtn.style.paddingBottom="30px"
    allbtn.style.backgroundColor="#fff"
    allbtn.style.transition='2s'
    offcanvas_counter=true;
  }
  else{
    allbtn.style.paddingBottom="0px"
    allbtn.style.background="none"
    allbtn.style.transition='.1s'
    offcanvas_counter=false
  }
})
function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}
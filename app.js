let acbutton = document.getElementById("acbutton");
let icon = document.getElementById("icon");
let cover = document.getElementById("cover");
let body = document.body;
let count = true;
let phone = document.getElementById("phone");
let fillcircle = document.getElementById("fillcircle");
let xcircle = document.getElementById("xcircle");
let seemorebtn = document.getElementById("seemorebtn");
let section4 = document.getElementById("section4");
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
    if(window.matchMedia("(orientation:landscape)").matches){
      section4.style.height = "1200px";    
    }
    else{
      section4.style.height = "1300px";
    }
    seemorebtn.style.display = "none";
    cover.style.display = "none";
  });
function submitbtn(){
    let name = document.getElementById("name");
    let mnumber = document.getElementById("mnumber");
    let email = document.getElementById("email");
    let wnumber = document.getElementById("wnumber");
    
    if((name == " ")|| (email == " ") || (mnumber == " ") || (wnumber == " ")){
        alert("Pls Fill the form");
        console.log("wrong");
}
else{
    alert("your form is successfully submited");
    console.log("correct");x
}
        // alert("your form is successfully submited");
}

var randomnum;
function ran(){
var a = Math.random();
console.log(a);
console.log(Math.floor(a*100000));
randomnum = Math.floor(a*1000000);
document.getElementById("submit").innerHTML = randomnum;
}

function refe(){
let inputvalue = document.getElementById("inputcapcha").value;

let pass_word = document.getElementById("pass_word").value;
let confirm_password = document.getElementById("confirm_password").value;
if(inputvalue == randomnum){
    console.log("correct");
    alert("Your form is successfully submitted");
}
else if((inputvalue != randomnum) || (inputvalue == " ") ){
    console.log("wrong");
    alert("Pls enter a correct valuue");
}

else if((pass_word != confirm_password) || (pass_word == " ") || (confirm_password == " "))
{
    alert("Pls enter a correct valuue");
}

}


//image slide
/*
var x = [
    // "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
    "/img/8.jpg",

  ];
  var images = document.getElementById("images");
  var count = -1;
  function forward() {
    count = count + 1;
    if (count <= x.length) {
    if (count == x.length) {
        count = 0; 
      }
      images.src = x[count];
    }
    console.log(count);
  }
  function backward() {
    count = count - 1;
    if (count < x.length) {
      if (count == -1 || count == -2) {
        index = x.length - 1;
        count = index;
      }
      images.src = x[count];
    }
    console.log(count);
  }
*/

// enquery form function
function enquery_form_connt(){
  window.location.href = 'enquiry.html';
}

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
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



//contact form function
function contactus_form_connt(){
  window.location.href = 'contactus.html';
}

// contact us validation
function enquiry_form_validation(){
let commoninput = document.getElementsByClassName("commoninput").value;
if(commoninput == " "){
  alert("Pls enter a value");
}
else{
  alert("Submitted");
  console.log("value entered")
}
}

// search bar validation

function searchbar(){
  let searchinput = document.getElementById("search_bar").value;
  let searchbtn = document.getElementById("search_arrow");
  if((searchinput == "frontend")|| (searchinput == "backend")|| (searchinput == "fullstack")|| 
  (searchinput == "FRONTEND") ||(searchinput == "BACKEND") || (searchinput == "FULLSTACK")){
    window.location.href = 'services.html';
  }
  else if((searchinput == "contact")|| (searchinput == "no")|| (searchinput == "phone no")||
  (searchinput == "email")|| (searchinput == "whatsapp")|| (searchinput == "contact no")){
    window.location.href = 'contactus.html';
  }
  else{
    window.location.href = 'index.html';

  }
}


// // image slide
// let slideIndex = [1,1];
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "inline";  
// }


const menu = document.querySelector('.menu');
const menuList = document.querySelector('nav ul');
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
    console.log("hellow")
})

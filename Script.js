
//Gets Confirmation From The User To Verify If The User Usimg Desktop Or Not!
function confirmation(){
 let con = confirm("This Website Is For Desktop Only, Therefore This Website Can't Be View properly On Moblie And Tablets ")
      if(con==true){
        let visit = window.open("","_self");
        return true;
      }
      else{
     let noVisit = window.open("cancel.html","_self");
      }

 }


//DropDown Function
function Dropdown() {
   let dropDown = document.getElementById("dropdown");
 if(dropDown.style.display == 'block')
 {
   dropDown.style.display = 'none';
 }
 else {
   dropDown.style.display = 'block';
 }
}

//Hamburger Menu
function SlideMenu(){
  let Nav = document.getElementsByClassName("NAV");
  if(Nav[0].style.display=='block')
  {
    Nav[0].style.display ='none';
  }
  else{
    Nav[0].style.display ='block';
  }
}


//Images for Slide
let images = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg","images/pic6.jpg",
"images/pic7.jpg","images/pic8.jpg","images/pic9.jpg","images/pic10.jpg","images/pic11.jpg","images/pic12.jpg",
"images/pic13.jpg"];
i = 0;
function sliding()
{ 
   document.getElementById("PIC1").src = images[i];
  if(i<(images.length - 1)){
     i++;
  }
  else{
     i = 0;
  }

} 
//Image Sliding 
setInterval(sliding, 2000);
AOS.init({
  duration: 600,
  easing: 'ease',
}); 
//Typing Text
var typed = new Typed('.typing', {
  strings: ['What Do We Offer?', 'WEB APPS AND WEBSITES','PC COMPONENTS','SMARTPHONES','LAPTOPS AND DESKTOPS'],
  typeSpeed:60,
  backSpeed:60,
  loop:true

});
//Chart 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [{
            label: '% of Our Growth (2000 - 2020)',
            data: [76, 56, 96, 78, 89 ],
            backgroundColor: [
                '	rgba(15, 189, 102,0.4)'
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Register Form Validation 
function Formval(){
 
let Fname = document.getElementById("Fname").value;
let Lname = document.getElementById("Lname").value;
let Email = document.getElementById("Email").value;
let CCard = document.getElementById("CCard").value;
let Web = document.getElementById("Web").value;
let Pass = document.getElementById("Pass").value;
let Cpass = document.getElementById("Cpass").value;

//For First Name
let  f_name = document.getElementById("Fname");
let name_field = document.getElementsByClassName("fname");

if(Fname == "")
{
  
   f_name.placeholder = "Please Fill This Field";
   name_field[0].style.color = "#B83227";
  return false;
}
else if(Fname.length <= 3 || Fname.length >= 15)
{
  alert("The First Name's Length Must Be Between 3 & 15");
  name_field[0].style.color = "#B83227";
  return false;
}
else if(!isNaN(Fname))
{
  alert(" No Numbers Are Allowed For First Name");
  name_field[0].style.color = "#B83227";
  return false;

}

//First Name Validation Ending

//For Last Name
let  l_name = document.getElementById("Lname");
let lname_field = document.getElementsByClassName("lname");



if(Lname == "")
{
  
  l_name.placeholder = "Please Fill This Field";
  lname_field[0].style.color = "#B83227";
  return false;
}
else if(Lname.length <= 2 || Lname.length >= 15)
{
  alert("The First Name's Length Must Be Between 3 & 15");
  lname_field[0].style.color = "#B83227";
  return false;
}
else if(!isNaN(Lname))
{
  alert(" No Numbers Are Allowed For Last Name");
  lname_field[0].style.color = "#B83227";
  return false;

}

//Last Name Validation Ending

////For Email 
let  email = document.getElementById("Email");
let email_field = document.getElementsByClassName("Email");
//Regular Expression For Email validation
let eRexp = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]{2,15}).([a-z]{2,10}).([a-z]{2,5})$/;


if(Email == "")
{
  
  email.placeholder = "Please Fill This Field";
  email_field[0].style.color = "#B83227";
  return false;
}
else if(!eRexp.test(Email))
{
  alert("Please Enter A Valid Email Address");
  email_field[0].style.color = "#B83227";
  return false;
}

//Email Validation Ending 

//Credit Card Validation
let cCard = document.getElementById("CCard");
let cCard_field = document.getElementsByClassName("CCard");
let cRexp = /^([0-9]{16})$/; 
if(CCard == "")
{
  cCard.placeholder = "Please Fill This Field";
  cCard_field[0].style.color = "#B83227";
  return false;
}
else if(!cRexp.test(CCard))
{
  alert("Please Enter A valid Credit Card Number");
  return false;
}

//Credit Card Validation Ending 

//Website validation
// let  web = document.getElementById("Web");
let web_field = document.getElementsByClassName("Web");
let wRexp = /^([www])?.([a-z A-Z 0-9\.-]+).([a-z]{2,15}).([a-z]{1,15})$/;

if((!wRexp.test(Web)) && (Web != "")) 
{ 
  alert("Enter A Valid URL Or Remove Https Or Remove \\ At Url's End" + "Exg: www.example.com"); 
 web_field[0].style.color = "#B83227";
  return false;
}
//Website Validation Ending

//PassWord Validation
let  pass = document.getElementById("Pass");
let pass_field = document.getElementsByClassName("Pass");
// let pRexp = /^([a-z A-Z 0-9\.-+@$%*&]+)$/;
if(Pass == "")
{
  pass.placeholder = "Please Fill This Field";
  pass_field[0].style.color = "#B83227";
  return false;
}

else if(Pass.length < 5 )
{
  alert("The Password Is Too Short & Weak");
  pass_field[0].style.color = "#B83227";
  return false;
}
//PassWord Validation Ending




//Confirm PassWord Validation
let  cpass = document.getElementById("Cpass");
let cpass_field = document.getElementsByClassName("Cpass");
// let pRexp = /^([a-z A-Z 0-9\.-+@$%*&]+)$/;

if(Pass != Cpass ){
 alert("The Password And Confirm Password Are Not Matching")
  cpass_field[0].style.color = "#B83227";
  return false;
}
else if(Cpass == "")
{
  cpass.placeholder = "Please Fill This Field";
  cpass_field[0].style.color = "#B83227";
  return false;
}

else if(Cpass.length < 5 )
{
  alert("The Password Is Too Short & Weak");
  cpass_field[0].style.color = "#B83227";
  return false;
}
// Confirm PassWord Validation Ending

} // Register Valdation Function Ending

//Login validation Starting
function loginsub(){
  //Login Email Validation Starting
let LEmail = document.getElementById("LEmail").value;
let lemail = document.getElementById("LEmail");
let lerex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]{2,15}).([a-z]{2,10}).([a-z]{2,5})$/;

if(LEmail == "")
{
  lemail.placeholder = "Please Fill This Field";
  return false;
}

else if(!lerex.test(LEmail))
{
  alert("Please Use A Valid Email");
  return false;
}
//Login Email Validation Ending

let LPass = document.getElementById("LPass").value;
let lpass = document.getElementById("LPass");
if(LPass == ""){
  lpass.placeholder = "This Field Can't Be Empty";
  return false;
}
else if(LPass.length < 5)
{
  alert("Oops!The Password Doesn't Match Your Registered Password(Must Be Greater Than 5 Char)   ");
  return false;
}


}
//Login Validation Ending




//jquery 
$(document).ready(function(){
  $('.h2-Log').click(function(){
    $('.CON9-3').toggle(1000);
    });
  
 
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
// $('[data-toggle="tooltip"]').tooltip(); 


});//Jquery Ending

//JS Ending

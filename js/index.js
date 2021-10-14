function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#e-mail').val();
    var phone = $('#phone').val();
    var message = $('#msg').val();
  
    // var body = $('#body').val();
  
    var Body='Name: '+name+'<br>Email: '+email+'<br>Mobile no: '+phone+'<br>Message: '+message;
    //console.log(name, phone, email, message);
  
    Email.send({
      SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
      To: 'skry3163@gmail.com',
      From: email,
      Subject: "New message on contact from "+name,
      Body: Body
    }).then(
      message =>{
        //console.log (message);
        if(message=='OK'){
        var mess=document.getElementById("response");
        mess.textContent="Your mail has been send. Thank you for connecting.";
        
        }
        else{
        //   console.error (message);
         
          var mess=document.getElementById("error");
          mess.textContent="There is error at sending message.";
          
        }
  
      }
    );
  
  
  
  }

//   $(document).ready(function () {
//     $('.link').click(function () {
//         $('.link').css('color', 'black');
//         $(this).css('color', 'blue');
//     });
// });
// $(document).ready(function () {
//     $('.two').click(function () {
//         $('.two').css('background-color', 'white');
//         $(this).css('background-color', 'black');
//     });
// });
// $(window).scroll(function(){
// $( ".icon-bar" ).show(); 
// setTimeout(function() {
//    $( ".icon-bar" ).hide();
//  }, 5000);
// })








//   $('.two').onePageNav({
// 	currentClass: 'active',
// 	changeHash: false,
// 	scrollSpeed: 750,
// 	scrollThreshold: 0.5,
// 	filter: '',
// 	easing: 'swing'
	
// });





const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".line .line-container .one li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
  
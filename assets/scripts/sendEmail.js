let email;
function sendMail(contactForm) {
    emailjs.send("gmail", "jgoutdoors", {
        "from_name": contactForm.fname.value + " " + contactForm.lname.value,
        "from_email": contactForm.email.value,
        "question": contactForm.message.value,
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
            email = "yes"
        },
        function (error) {
            console.log("FAILED", error)
            email = "no"
        });
        return false;
}

$('.submit').click( function () {
   setTimeout(function(){
       if(email == "yes") {
       alert('Question Sent')
   } 
   }, 1500)
    setTimeout(function(){
        email = 'no'
   }, 3000)
   
});
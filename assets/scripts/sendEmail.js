function sendMail(contactForm) {
    emailjs.send("gmail", "jgoutdoors", {
        "from_name": contactForm.fname.value + " " + contactForm.lname.value,
        "from_email": contactForm.email.value,
        "question": contactForm.message.value,
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error)
        });
        return false;
}
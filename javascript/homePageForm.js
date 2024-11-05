//getting contact form information from home page

const homePageForm = document.getElementById("homepageform");
const fullName = document.getElementById("fullName");
const email1 = document.getElementById("email1");
const mobile1 = document.getElementById("mobile1");

function sendMailFromHomePage() {
  const bodyMessage = `Full Name:${fullName.value}<br> Email:${email1.value}<br> Mobile Number:${mobile1.value}<br> Message:please contact me`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gukan08111997intelligent@gmail.com",
    Password: "DFFBAC446036A6A2361732CB1C86B48B401F",
    To: "gukan08111997intelligent@gmail.com",
    From: "gukan08111997intelligent@gmail.com",
    Subject: "This contact form information from brand Maker site ",
    Body: bodyMessage,
  }).then((message) => {
    if(message==="OK"){
        Swal.fire({
            title: "Good job!",
            text: "Message sent successfully!",
            icon: "success"
          });
         
    }
  });
}

homePageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMailFromHomePage();
});

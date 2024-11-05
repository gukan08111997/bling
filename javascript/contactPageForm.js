// contact us form functionality

const contactPageForm = document.getElementById("contactpageform");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email2 = document.getElementById("email2");
const mobile2 = document.getElementById("mobile2");
const message = document.getElementById("message");

function sendMailFromContactPage() {
  const bodyMessage = `Full Name:${fname.value} ${lname.value}<br> Email:${email2.value}<br> Mobile Number:${mobile2.value}<br> Message:${message.value}`;
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

contactPageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMailFromContactPage();
});

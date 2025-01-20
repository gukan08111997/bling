// contact us form functionality

const contactPageForm = document.getElementById("contactpageform");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email2 = document.getElementById("email2");
const mobile2 = document.getElementById("mobile2");
const message = document.getElementById("message");

function sendMailFromContactPage() {
  let params = {
    from_name : `${fname.value} ${lname.value}`,
    email_id : `${email2.value}`,
    message : `${message.value}`
  }
  emailjs.send("service_m6u86wd","template_hl57j3f",params).then((message) => {
    if(message==="OK"){
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success"
      });
      
    }
  });
  const bodyMessage = `Full Name:${fname.value} ${lname.value}<br> Email:${email2.value}<br> Mobile Number:${mobile2.value}<br> Message:${message.value}`;
}

contactPageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMailFromContactPage();
});

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
    email_id : email2.value,
    mobile:mobile2.value,
    message : message.value
  }
  emailjs.send("service_f1ocfrg","template_hl57j3f",params).then(alert('Message sent successfully.We will contact you shortly'));
 }

contactPageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMailFromContactPage();
});

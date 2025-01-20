//getting contact form information from home page

const homePageForm = document.getElementById("homepageform");
const fullName = document.getElementById("fullName");
const email1 = document.getElementById("email1");
const mobile1 = document.getElementById("mobile1");

function sendMailFromHomePage() {
    let params = {
    from_name:fullName.value,
    mobile:mobile1.value,
    email_id:email1.value,
    message:"Please contact me. This message from Blinguae Website Homepage."
  }
  emailjs.send("service_f1ocfrg","template_hl57j3f",params).then(('Message sent successfully.We will contact you shortly'));
}

homePageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMailFromHomePage();
});

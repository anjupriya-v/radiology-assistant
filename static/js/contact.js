(function () {
  emailjs.init("PublicKey_XXXXXXXXXXXXXX");
})();
document
  .getElementsByClassName("submit-contact-form")[0]
  .addEventListener("submit", (e) => {
    e.preventDefault();
    var name = document.getElementsByClassName("name")[0].value;
    var email = document.getElementsByClassName("email")[0].value;
    var message = document.getElementsByClassName("message")[0].value;
    var nameError = document.getElementsByClassName("nameError")[0];
    var emailError = document.getElementsByClassName("emailError")[0];
    var messageError = document.getElementsByClassName("messageError")[0];

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
    var regName = /\d+$/g; // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
      nameError.style.display = "block";
      nameError.innerHTML = "Please enter your name properly.";
      return false;
    } else {
      nameError.style.display = "none";
    }
    if (email == "" || !regEmail.test(email)) {
      emailError.style.display = "block";
      emailError.innerHTML = "Please enter a valid e-mail address.";

      return false;
    } else {
      emailError.style.display = "none";
    }

    if (message == "") {
      messageError.style.display = "block";
      messageError.innerHTML = "Please enter your message";

      return false;
    } else {
      messageError.style.display = "none";
    }

    var contactParams = {
      fullname: name,
      emailid: email,
      message: message,
    };
    emailjs
      .send("service_XXXXXX", "template_XXXXXXX", contactParams)
      .then(function (res) {
        document.getElementsByClassName(
          "contact-success-message"
        )[0].style.display = "block";
        setTimeout(() => {
          document.getElementsByClassName(
            "contact-success-message"
          )[0].style.display = "none";
        }, 5000);
        document.getElementsByClassName("contact-form")[0].reset();
      });
    return true;
  });

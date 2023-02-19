document
  .getElementsByClassName("submit-contact-form")[0]
  .addEventListener("submit", (e) => {
    var name = document.forms.form.name;
    var email = document.forms.form.email.value;
    var textArea = document.forms.form.textArea.value;
    var nameError = document.getElementsByClassName("nameError")[0];
    var emailError = document.getElementsByClassName("emailError")[0];
    var textAreaError = document.getElementsByClassName("textAreaError")[0];

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
    var regName = /\d+$/g; // Javascript reGex for Name validation

    if (name == "" || regName.test(name)) {
      e.preventDefault();
      nameError.style.display = "block";
      nameError.innerHTML = "Please enter your name properly.";
      return false;
    } else {
      nameError.style.display = "none";
    }
    if (email == "" || !regEmail.test(email)) {
      e.preventDefault();

      emailError.style.display = "block";
      emailError.innerHTML = "Please enter a valid e-mail address.";

      return false;
    } else {
      emailError.style.display = "none";
    }

    if (textArea == "") {
      e.preventDefault();

      textAreaError.style.display = "block";
      textAreaError.innerHTML = "Please enter your password";

      return false;
    } else {
      textAreaError.style.display = "none";
    }
    return true;
  });

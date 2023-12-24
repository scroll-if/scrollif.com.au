window.onload = function() {
  var recaptcha = document.forms["contact-us"]["g-recaptcha-response"];
  recaptcha.required = true;
  recaptcha.oninvalid = function(e) {
    // do something
    alert("Please check the \"I'm not a robot\" box in the reCAPTCHA below.");
    document.activeElement.blur();
  }
}

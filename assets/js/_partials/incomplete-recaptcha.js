window.onload = function() {
  var recaptcha = document.forms["contact-us"]["g-recaptcha-response"];
  recaptcha.required = true;
  recaptcha.oninvalid = function(e) {
    // do something
    alert("Please check the box, \"I'm not a robot\" in the reCaptcha below.");
  }
}

  function unHideButton() {
    const response = grecaptcha.getResponse()
    if (grecaptcha.getResponse().length > 0) {
      document.getElementById('recaptcha-required-form-submit-button').disabled = false
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof grecaptcha === "object") {
      document.querySelector('.g-recaptcha').dataset.callback = "unHideButton"
    } else {
      console.log("Unable to add `data-callback` to grecaptcha as it doesn't exist.");
    }
  });
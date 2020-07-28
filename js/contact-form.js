var checkbox = document.querySelector(".consent-input_js"),
  submit = document.querySelector(".submit_js");

  /* Enable Submit */

checkbox.addEventListener("click", function () {
    if (checkbox.checked) submit.disabled = "";
    else submit.disabled = "disabled";
  });
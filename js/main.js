var popup = document.querySelector(".modal_js"),
  buttonOpen = document.querySelector(".button-open_js"),
  buttonClose = document.querySelector(".button-close_js"),
  input = document.querySelector(".input-text_js"),
  checkbox = document.querySelector(".consent-input_js"),
  submit = document.querySelector(".submit_js");

buttonOpen.addEventListener("click", function () {
  popup.classList.add("modal-bg_open");
  input.focus();
});

buttonClose.addEventListener("click", function () {
  popup.classList.remove("modal-bg_open");
  buttonOpen.focus();
});

/* Enable Submit */

checkbox.addEventListener("click", function () {
  if (checkbox.checked) submit.disabled = "";
  else submit.disabled = "disabled";
});

/* Escape */

window.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && popup.classList.contains("modal-bg_open")) {
    popup.classList.remove("modal-bg_open");
  }
});

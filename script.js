const emailInput = document.querySelector('input[type="text"]');
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailInput.value)) {
    document.querySelectorAll(".error").forEach((el) => {
      el.style.display = "block";
    });
    form.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    document.querySelectorAll(".error").forEach((el) => {
      el.style.display = "none";
    });
    form.style.border = "1px solid hsl(0, 36%, 70%)";
  }
});

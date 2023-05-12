const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (mail === "" || password === "") {
    return alert("всі поля повинні бути заповнені");
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(name);
    console.log(value);
  });

  event.currentTarget.reset();
}

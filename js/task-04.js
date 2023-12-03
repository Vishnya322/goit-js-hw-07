const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);
  const emailList = form.elements.email.value.trim();
  const passwordList = form.elements.password.value.trim();
  
  const formValues = {
    email: emailList,
    password: passwordList,
  };
  
  if (emailList === "" || passwordList === "") {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formValues);
  form.reset();
});

const labels = document.querySelectorAll('label');

labels.forEach(label => {
  label.classList.add('custom-label');
});

const button = document.querySelector('button');
button.classList.add('custom-button');

const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input, select, textarea');

form.addEventListener('submit', (event) => {
  let hasError = false;

  inputs.forEach((input) => {
    if (input.hasAttribute('required') && !input.value) {
      input.classList.add('error');
      hasError = true;
    } else {
      input.classList.remove('error');
    }
  });

  if (hasError) {
    event.preventDefault();
  }
});

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circles.forEach(c => {
      if (c.id <= circle.id) {
        c.classList.add('selected');
      } else {
        c.classList.remove('selected');
      }
    });
  });
});

function sendEmail(event) {
  event.preventDefault(); // prevents the form from submitting normally

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'tweerasooriya032@gmail.com', true);
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      alert('Email sent successfully!');
    }
  };
  xhr.send(formData);
}

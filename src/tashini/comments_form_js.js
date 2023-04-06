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


const statusMessage = document.querySelector('.status-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  if (response.ok) {
    form.reset();
    statusMessage.innerHTML = 'Thanks for your feedback!';
  } else {
    statusMessage.innerHTML = 'There was a problem sending your feedback. Please try again later.';
  }
});

Email.send({
  Host : "smtp.gmail.com",
  Username : "tashini.20212153@iit.ac.lk",
  Password : "password",
  To : 'them@website.com',
  From : "you@isp.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);
// mobile menu toggle
const header = document.querySelector('.header');
const headerToggle = document.querySelector('.header-toggle');

headerToggle.addEventListener('click', (e) => {
    header.classList.toggle('is-open');

    if(header.classList.contains('is-open')) {
        document.body.classList.add('of-hidden');
    } else {
        document.body.classList.remove('of-hidden');
    }
});


// tab
const tabItems = document.querySelectorAll('.tab-item');
const tabPanels = document.querySelectorAll('.tab-panel');

tabItems.forEach(item => {
    item.addEventListener('click', () => {
        tabItems.forEach(tab => {
            tab.setAttribute('aria-selected', 'false');
        });

        tabPanels.forEach(panel => {
            panel.setAttribute('hidden', true);
        });

        item.setAttribute('aria-selected', 'true');
        const panelID = item.getAttribute('aria-controls');
        document.getElementById(panelID).removeAttribute('hidden');
    });
});

// questions
const questions = document.querySelectorAll('.question-text');

questions.forEach(q => {
    q.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        e.currentTarget.nextElementSibling.classList.toggle('is-open');
    });
});

// contact form validation
/* document.querySelector(".contact-form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;
    var errorMessage = document.querySelector(".error-msg");
    var errorIcon = document.querySelector(".error-icon");
  
    // Simple email validation regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailValue || !emailPattern.test(emailValue)) {
      event.preventDefault();
      emailInput.classList.add("error");
      errorMessage.style.display = "block";
      errorIcon.style.display = "block";
      errorMessage.textContent = emailValue ? `Whoops, make sure it's an email` : "Plase enter your email address.";
    } else {
      emailInput.classList.remove("error");
      errorMessage.style.display = "none";
      errorIcon.style.display = "none";
      // Submit the form or do other stuff
    }
  }); */

const contactInput = document.querySelector('.contact-input');
contactInput.addEventListener('invalid', function(e) {
    e.preventDefault();
}, true);

const emailValidate = () => {
    const errorMessage = document.querySelector('.error-msg');
    const errorIcon = document.querySelector('.error-icon');

    // contactInput.setCustomValidity('');
    
    if(!contactInput.checkValidity()) {
        contactInput.classList.add('error');
        errorMessage.classList.add('show');
        errorIcon.classList.add('show');
    } else {
        contactInput.classList.remove('error');
        errorMessage.classList.remove('show');
        errorIcon.classList.remove('show');
    }

    console.log(contactInput.checkValidity());
}

/* if (emailInput.validity.valueMissing) {
    errorMessage.textContent = "이메일 주소를 입력해주세요.";
  } else if (emailInput.validity.typeMismatch) {
    errorMessage.textContent = "Whoops, make sure it's an email";
  } */
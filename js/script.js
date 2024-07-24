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
const contactInput = document.querySelector('.contact-input');
contactInput.addEventListener('invalid', function(e) {
    e.preventDefault();
}, true);

const emailValidate = () => {
    const errorMessage = document.querySelector('.error-msg');
    const errorIcon = document.querySelector('.error-icon');
    
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
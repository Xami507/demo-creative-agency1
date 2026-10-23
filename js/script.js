const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const form = document.querySelector('#contact-form');
if (form) {
  const fields = {
    name: { input: form.elements.name, error: document.querySelector('#name-error'), message: 'Please enter at least 2 characters.' },
    email: { input: form.elements.email, error: document.querySelector('#email-error'), message: 'Please enter a valid email address.' },
    message: { input: form.elements.message, error: document.querySelector('#message-error'), message: 'Please enter at least 10 characters.' }
  };

  const validate = (key) => {
    const field = fields[key];
    const valid = field.input.checkValidity();
    field.input.setAttribute('aria-invalid', String(!valid));
    field.error.textContent = valid ? '' : field.message;
    return valid;
  };

  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener('blur', () => validate(key));
    fields[key].input.addEventListener('input', () => {
      if (fields[key].input.hasAttribute('aria-invalid')) validate(key);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valid = Object.keys(fields).map(validate).every(Boolean);
    const status = document.querySelector('#form-status');
    if (!valid) {
      status.textContent = 'Please check the highlighted fields and try again.';
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${fields.name.input.value.trim()}`);
    const service = form.elements.service.value;
    const body = encodeURIComponent(`Name: ${fields.name.input.value.trim()}\nEmail: ${fields.email.input.value.trim()}\nService: ${service || 'Not specified'}\n\n${fields.message.input.value.trim()}`);
    status.textContent = 'Your email app will open with this draft. This website does not send or store the message.';
    window.location.href = `mailto:hello@democreative.example?subject=${subject}&body=${body}`;
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

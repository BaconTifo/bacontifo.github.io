document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
      const targetSection = document.querySelector(button.getAttribute('data-target'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
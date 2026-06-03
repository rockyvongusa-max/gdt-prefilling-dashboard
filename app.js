document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === '#' + id;
          link.style.color = active ? '#38bdf8' : '';
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});

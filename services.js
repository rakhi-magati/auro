const serviceTabs = document.querySelectorAll('.service-tabs a');
const serviceSections = document.querySelectorAll('.detail-card');

function setActiveService(id) {
  serviceTabs.forEach((tab) => {
    const active = tab.hash === `#${id}`;
    tab.classList.toggle('active', active);
    if (active) tab.setAttribute('aria-current', 'location');
    else tab.removeAttribute('aria-current');
  });
}

serviceTabs.forEach((tab) => {
  tab.addEventListener('click', () => setActiveService(tab.hash.slice(1)));
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveService(entry.target.id);
    });
  }, { rootMargin: '-15% 0px -70% 0px' });
  serviceSections.forEach((section) => observer.observe(section));
}

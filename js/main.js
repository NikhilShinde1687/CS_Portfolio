// main.js — basic interactivity
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });

  // contact form
  window.handleContact = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){ alert('Please fill all fields'); return; }
    // For a static site, we'll just show a success message. Replace with backend/email API as needed.
    alert('Thanks ' + name + '! Your message was noted. (This is a demo — implement backend to actually send messages.)');
    e.target.reset();
  }

  // cert modal
  const certButtons = document.querySelectorAll('.cert-card .view-cert');
  const modal = document.getElementById('certModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  certButtons.forEach(btn => {
    btn.addEventListener('click', (ev) => {
      const card = ev.target.closest('.cert-card');
      const txt = card.getAttribute('data-cert') || card.querySelector('h4').innerText;
      modalTitle.textContent = txt;
      modalBody.textContent = 'Credential PDF or details can be linked here. Replace modal contents with actual certificate PDF images or links.';
      modal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (ev) => {
    if(ev.target === modal) modal.classList.add('hidden');
  });
});

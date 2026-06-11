// Services page: inquiry form modal (opened by the "Start a Project" / "Send Us a Message" buttons)

document.addEventListener('DOMContentLoaded', function () {
  const inquiryModal = document.getElementById('inquiry-modal');
  if (!inquiryModal) return;

  function openInquiry() {
    inquiryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeInquiry() {
    inquiryModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-open-inquiry').forEach(btn => btn.addEventListener('click', openInquiry));
  document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closeInquiry));
  inquiryModal.addEventListener('click', e => { if (e.target === inquiryModal) closeInquiry(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeInquiry(); });
});

/* =================================
   BLOG FILTERING
   ================================= */

document.addEventListener('DOMContentLoaded', function() {
  const tagButtons = document.querySelectorAll('.blog-tag');
  const blogCards = document.querySelectorAll('.blog-card[data-tags]');

  tagButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const selectedTag = this.getAttribute('data-tag');

      // Update active state
      tagButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter posts
      blogCards.forEach(function(card) {
        const cardTags = card.getAttribute('data-tags');

        if (selectedTag === 'all' || cardTags.includes(selectedTag)) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Simple fade animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

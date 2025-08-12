document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuButton && mobileMenu && hamburgerIcon && closeIcon) {
    menuButton.addEventListener('click', function () {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }

  // FAQ Accordion
  const accordionContainer = document.getElementById('accordion-container');
  if (accordionContainer) {
    const accordionItems = accordionContainer.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
      const button = item.querySelector('.accordion-button');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon');

      if (button && content && icon) {
        button.addEventListener('click', function () {
          const isOpen = content.classList.contains('open');

          // Close all other items
          accordionContainer.querySelectorAll('.accordion-content').forEach((el) => {
            el.classList.remove('open');
          });
          accordionContainer.querySelectorAll('.accordion-button').forEach((el) => {
            el.setAttribute('aria-expanded', 'false');
          });
          accordionContainer.querySelectorAll('.accordion-icon').forEach((el) => {
             el.classList.remove('rotate-180');
          });

          // Open the clicked item if it was closed
          if (!isOpen) {
            content.classList.add('open');
            button.setAttribute('aria-expanded', 'true');
            icon.classList.add('rotate-180');
          }
        });
      }
    });
  }
});

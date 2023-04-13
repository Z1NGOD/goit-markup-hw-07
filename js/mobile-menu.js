"use strict";
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();



const contactsLink = document.querySelector('.contacts');
const mobileMenuAddress = document.querySelector('.mobile-menu-address');
const iconsListMobileMenu = document.querySelector('.icons-list-mobile-menu');
let contactsVisible = false;

function hideIcons() {
  iconsListMobileMenu.style.display = 'none';
  iconsListMobileMenu.style.cssText = "display:none";
}

contactsLink.addEventListener('click', function(e) {
  e.preventDefault();
  if (contactsVisible) {
    mobileMenuAddress.style.display = 'none';
    hideIcons();
    contactsLink.style.color = 'slate';
  } else {
    mobileMenuAddress.style.display = 'block';
    iconsListMobileMenu.style.display = 'flex';
    iconsListMobileMenu.style.cssText = "justify-content: left; gap: 34px; margin-top: 40px; padding-left: 40px;";
    contactsLink.style.color = 'iris';
  }
  contactsVisible = !contactsVisible;
}); 











'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];

function closeMenu() {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!event.target.closest('.navigation')) closeMenu();
});

const mobileViewport = window.matchMedia('(max-width: 700px)');
mobileViewport.addEventListener('change', closeMenu);

const sections = sectionLinks.map(link => document.querySelector(link.hash));
let scrollPending = false;
function updateNavigation() {
  const current = sections.filter(section => section.getBoundingClientRect().top <= 150).at(-1);
  sectionLinks.forEach(link => {
    if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();

const imageDialog = document.querySelector('.image-dialog');
const dialogImage = document.querySelector('#dialog-image');
const imageCaption = document.querySelector('#image-caption');
const dialogClose = document.querySelector('.dialog-close');
let imageTrigger = null;

document.querySelectorAll('.zoom-image').forEach(link => {
  link.addEventListener('click', event => {
    if (!imageDialog.showModal || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    imageTrigger = link;
    dialogImage.src = link.href;
    dialogImage.alt = link.querySelector('img').alt;
    imageCaption.textContent = link.dataset.caption;
    imageDialog.showModal();
    dialogClose.focus();
    document.body.classList.add('preview-open');
  });
});

dialogClose.addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('keydown', event => {
  // The close button is the dialog's only interactive control.
  if (event.key === 'Tab') {
    event.preventDefault();
    dialogClose.focus();
  }
});
imageDialog.addEventListener('click', event => {
  if (event.target !== imageDialog) return;
  const bounds = imageDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
});
imageDialog.addEventListener('close', () => {
  document.body.classList.remove('preview-open');
  dialogImage.removeAttribute('src');
  imageTrigger?.focus({ preventScroll: true });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

// Keep demonstrations from playing over one another.
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => {
      if (other !== video) other.pause();
    });
  });
});

const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const closeButton = lightbox.querySelector('.lightbox-close');

gallery.addEventListener('click', (event) => {
  const img = event.target.closest('img');
  if (!img) return;

  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightbox.hidden = false;
});

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.src = '';
};

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

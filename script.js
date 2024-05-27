document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        lightboxImage.src = galleryItems[index].href;
        lightbox.style.display = 'block';
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    prev.addEventListener('click', function(event) {
        event.stopPropagation();
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    next.addEventListener('click', function(event) {
        event.stopPropagation();
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });
});

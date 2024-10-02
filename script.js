document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});
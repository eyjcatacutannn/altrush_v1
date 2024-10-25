function scrollToLeft() {
    const container = document.getElementById('product-container');
    container.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollToRight() {
    const container = document.getElementById('product-container');
    container.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
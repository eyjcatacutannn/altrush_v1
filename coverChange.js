const images = [
    {
        src: 'sportstyle_cover.jpg',
        title: 'Sportstyle',
        description: 'Sport style shoes blend comfort and performance with a trendy aesthetic,',
        subDescription: 'making them ideal for both athletic activities and casual wear.',
    },
    {
        src: 'trainRunningshoes_cover.jpg',
        title: 'Trail Running Shoes',
        description: 'Designed for rugged terrains, our trail running shoes feature durable outsoles for optimal grip and stability. ',
        subDescription: 'With breathable materials and cushioned support, they ensure comfort and protection on any adventure.',
    },
    {
        src: 'platformShoes_cover.jpg',
        title: 'Platform Shoes',
        description: 'Elevate your style with our trendy platform shoes, offering both height and comfort. ',
        subDescription: 'Crafted with cushioned insoles and a sturdy base, they are perfect for adding flair to any outfit while providing all-day wearability.',
    },
    {
        src: 'waterShoes_cover.jpg',
        title: 'Water Shoes',
        description: 'Perfect for aquatic adventures, our water shoes are lightweight and quick-drying, featuring breathable materials and slip-resistant soles. ',
        subDescription: 'Ideal for the beach, pool, or any wet environment, they ensure both comfort and safety.',
    },
    {
        src: 'roadRunningshoes_cover.jpg',
        title: 'Road Running Shoes',
        description: 'Engineered for pavement, our road running shoes provide exceptional cushioning and support for long distances. ',
        subDescription: 'With lightweight construction and responsive design, they help you achieve your best performance on every run.',
    }

];

let currentIndex = 0;

function changeCover() {
    const coverPhoto = document.getElementById('coverPhoto');
    const coverTitle = document.getElementById('coverTitle');
    const coverDescription = document.getElementById('coverDescription');
    const coverSubDescription = document.getElementById('coverSubDescription');

    // Fade out the current image
    coverPhoto.style.opacity = 0;

    setTimeout(() => {
        // Change the image and text after fading out
        coverPhoto.style.backgroundImage = `url(${images[currentIndex].src})`;
        coverTitle.textContent = images[currentIndex].title;
        coverDescription.textContent = images[currentIndex].description;
        coverSubDescription.textContent = images[currentIndex].subDescription;

        // Fade in the new image
        coverPhoto.style.opacity = 1;
    }, 500); // Delay for the fade-out effect

    currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
}

// Change cover every 5 seconds
setInterval(changeCover, 8000);
changeCover(); // Initial call to set the first image/text

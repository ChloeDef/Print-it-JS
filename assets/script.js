const slides = [
	{
		image:'./assets/images/slideshow/slide1.jpg ',
		tagLine:'Impressions tous formats <span>en boutique et en ligne</span>'
	},
	{
		image:'./assets/images/slideshow/slide2.jpg',
		tagLine:'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
	},
	{
		image:'./assets/images/slideshow/slide3.jpg',
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
	},
	{
		image:'./assets/images/slideshow/slide4.png',
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
	}
]

let currentSlide = 0;
console.log(currentSlide)

function setupCarousel() {
    const banner = document.getElementById('banner');
    const bannerImages = banner.getElementsByClassName('banner-img');
    const bannerText = banner.getElementsByTagName('p')[0];
    const dotsContainer = banner.getElementsByClassName('dots')[0];

    slides.forEach((slide, index) => {
        bannerImages[index].src = slide.image;
        bannerImages[index].alt = `Slide ${index + 1}`;
        if (index === 0) {
            bannerText.innerHTML = slide.text;
        }

        // Ajout dots pour chaque slide
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {
	const totalSlides = slides.length;
	if (index < 0) {
		index = totalSlides - 1;
	} else if (index >= totalSlides) {
		index = 0;
	}
	console.log(index)
	currentSlide = index

	const dots = document.querySelectorAll(".dot");

	dots.forEach((dot, i) => {
		if (currentSlide===i) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});

	const banner = document.getElementById('banner');
    const bannerImage = banner.getElementsByClassName('banner-img')[0];
    const bannerText = banner.getElementsByTagName('p')[0];
    const dotsContainer = banner.getElementsByClassName('dots')[0];

	console.log(slides[currentSlide].image)
	console.log(bannerText)
	// update slide
	bannerImage.src = slides[currentSlide].image;
	bannerImage.alt = `Slide ${currentSlide + 1}`;
	console.log("before", bannerText.innerHTML)
	bannerText.innerHTML = slides[currentSlide].tagLine;
	console.log("after",bannerText.innerHTML)
	}

// Ajout des Events listeners pour les flèches gauche et droite
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');

arrowLeft.addEventListener('click', () => {
	showSlide(currentSlide - 1);
});

arrowRight.addEventListener('click', () => {
	showSlide(currentSlide + 1);
});


// // Met à jour la classe 'dot_selected' pour les dots
// const dotsContainer = banner.getElementsByClassName('dots')[0];
const dot = dotsContainer.getElementsByClassName(".dot");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {
	if (currentSlide===i) {
		dot.classList.add('dot_selected');
	} else {
		dot.classList.remove('dot_selected');
	}
});

// Initialisation du carrousel une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    setupCarousel();
});

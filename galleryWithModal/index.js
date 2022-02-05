// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgGallery = document.querySelectorAll(".myImgModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
if (imgGallery) {
    for (i = 0; i < imgGallery.length; i++) {
        imgGallery[i].querySelector("img").onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    }
}

// Get the <span> element that closes the modal
const spanModal = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
spanModal.onclick = function () {
    modal.style.display = "none";
};

//slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    // dots[slideIndex - 1].className += " active";
}

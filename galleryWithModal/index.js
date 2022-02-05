// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgGallery = document.querySelectorAll(".carousel-cell");
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

// Create modal element
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <span class="close">&times;</span>
  <img class="modal-content" id="modal-img">
  <div id="caption"></div>
  <a class="prev">&#10094;</a>
  <a class="next">&#10095;</a>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = modal.querySelector(".close");
const prevBtn = modal.querySelector(".prev");
const nextBtn = modal.querySelector(".next");

const images = document.querySelectorAll(".gallery-img");
let currentIndex = 0;

// Open modal 
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showModal(currentIndex);
    modal.style.display = "block";
  });
});

//Show modal image
function showModal(index) {
  modalImg.src = images[index].src;
  captionText.textContent = images[index].alt;
}

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; };

// Previous/Next image
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showModal(currentIndex);
};
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showModal(currentIndex);
};

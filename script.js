document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll("img");
    const prevBtn = carousel.querySelector(".carousel-arrow.prev");
    const nextBtn = carousel.querySelector(".carousel-arrow.next");
    let currentIndex = 0;

    const showImage = index => {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    };

    showImage(currentIndex);

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      });

      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      });
    }
  });
});

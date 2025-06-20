document.addEventListener("DOMContentLoaded", () => {
  // CARROSSEL
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

  // FILTRO E MODAL
  const btnAbrirFiltro = document.getElementById("btnAbrirFiltro");
  const btnFecharFiltro = document.getElementById("btnFecharFiltro");
  const modalFiltro = document.getElementById("modalFiltro");
  const filtros = document.querySelectorAll(".filtro-opcao");
  const cards = document.querySelectorAll(".car-card-v2");
  const mensagem = document.getElementById("mensagem-nenhum");

  if (btnAbrirFiltro && btnFecharFiltro && modalFiltro) {
    btnAbrirFiltro.addEventListener("click", () => {
      modalFiltro.style.display = "flex";
    });

    btnFecharFiltro.addEventListener("click", () => {
      modalFiltro.style.display = "none";
    });
  }

  filtros.forEach(filtro => {
    filtro.addEventListener("change", aplicarFiltro);
  });

  function aplicarFiltro() {
    const ativos = Array.from(filtros)
      .filter(f => f.checked)
      .map(f => f.value.toLowerCase());

    let algumVisivel = false;

    cards.forEach(card => {
      const badge = card.querySelector(".badge")?.textContent.toLowerCase() || "";
      const detalhes = card.querySelector(".car-details")?.textContent.toLowerCase() || "";
      const tags = card.querySelector(".car-tags")?.textContent.toLowerCase() || "";
      const textoCard = `${badge} ${detalhes} ${tags}`;

      const corresponde = ativos.every(valor => textoCard.includes(valor));

      if (ativos.length === 0 || corresponde) {
        card.style.display = "flex";
        algumVisivel = true;
      } else {
        card.style.display = "none";
      }
    });

    mensagem.style.display = algumVisivel ? "none" : "block";
  }
});

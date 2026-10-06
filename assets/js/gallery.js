(() => {
  const image = document.querySelector("#fitcircle-gallery-image");
  const caption = document.querySelector("#fitcircle-gallery-caption");
  const buttons = Array.from(document.querySelectorAll(".gallery-thumb"));

  if (!image || !caption || buttons.length === 0) return;

  const title = caption.querySelector(".gallery__caption-title");
  const description = caption.querySelector(".gallery__caption-description");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset;
      image.src = selected.image;
      image.alt = selected.alt;
      image.width = Number(selected.width);
      image.height = Number(selected.height);
      title.textContent = selected.title;
      description.textContent = selected.description;

      buttons.forEach((item) => {
        const isSelected = item === button;
        item.setAttribute("aria-pressed", String(isSelected));
        item.classList.toggle("is-selected", isSelected);
      });
    });
  });
})();

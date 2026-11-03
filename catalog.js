// ============================================
// Логика каталога с галереей
// ============================================

const grid = document.getElementById("grid");
const filtersBox = document.getElementById("filters");

// Модальное окно
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentImages = [];
let currentIndex = 0;

// Собираем список категорий
const categories = ["Все", ...new Set(products.map(p => p.category))];

// Кнопки фильтров
categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.className = "filter-btn" + (cat === "Все" ? " active" : "");
  btn.textContent = cat;
  btn.onclick = () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(cat === "Все" ? products : products.filter(p => p.category === cat));
  };
  filtersBox.appendChild(btn);
});

// Отрисовка карточек
function render(list) {
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = "<p style='color:#7a6a60'>Пока нет товаров в этой категории.</p>";
    return;
  }
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    
    // Берем первую картинку как обложку
    const mainImage = p.images[0]; 

    card.innerHTML = `
      <div class="photo">
        <img src="${mainImage}" alt="${p.name}" loading="lazy">
      </div>
      <div class="body">
        <div class="cat-label">${p.category}</div>
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <div class="price">${p.price}</div>
      </div>
    `;

    // Клик по карточке открывает галерею
    card.onclick = () => openModal(p.images, p.name);
    
    grid.appendChild(card);
  });
}

// Открытие галереи
function openModal(images, title) {
  currentImages = images;
  currentIndex = 0;
  modal.style.display = "block";
  modalImg.src = currentImages[currentIndex];
  captionText.innerHTML = title;
}

// Закрытие
closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Листание
prevBtn.onclick = () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
  modalImg.src = currentImages[currentIndex];
};
nextBtn.onclick = () => {
  currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
  modalImg.src = currentImages[currentIndex];
};

// Поддержка ссылки вида catalog.html?cat=Гирлянды
const params = new URLSearchParams(location.search);
const catParam = params.get("cat");
if (catParam && categories.includes(catParam)) {
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.textContent === catParam);
  });
  render(products.filter(p => p.category === catParam));
} else {
  render(products);
}

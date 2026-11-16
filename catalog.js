// ============================================
// Логика каталога с галереей и коллекциями
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
const collectionLink = document.getElementById("collectionLink"); // Новая кнопка

let currentImages = [];
let currentIndex = 0;

// Собираем список категорий
const categories = ["Все", ...new Set(products.map(p => p.category))];

// Словарь с картинками для каждой категории
const imagesMap = {
  "Гирлянды": "images/cat-garland.jpg",
  "Подсвечники": "images/cat-candle.jpg",
  "Снежинки": "images/cat-snowflake.jpg",
  "Наборы 3 шара": "images/cat-ball.jpg", // Если категории шаров называются иначе — поменяй названия слева
  "Наборы 4 шара": "images/cat-ball.jpg",
  "Наборы 6 шаров": "images/cat-ball.jpg"
};

// Кнопки фильтров
categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.className = "filter-btn" + (cat === "Все" ? " active" : "");
  btn.setAttribute("data-cat", cat);

  // Если это категория "Все" — просто текст
  if (cat === "Все") {
    btn.textContent = "Все";
  } else {
    // Если это обычная категория — добавляем картинку и текст
    const imgSrc = imagesMap[cat] || "images/placeholder.jpg"; // На случай, если картинки нет
    btn.innerHTML = `
      <img src="${imgSrc}" alt="${cat}">
      <span class="cat-title">${cat}</span>
    `;
  }

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
    
    const mainImage = p.images[0]; 
    const secondImage = p.images[1]; 
    const hasMultipleCovers = p.images.length > 1;

    card.innerHTML = `
      <div class="photo">
        <img src="${mainImage}" alt="${p.name}" loading="lazy" class="card-img">
        ${hasMultipleCovers ? `
          <button class="card-arrow left" style="display:none;">&#10094;</button>
          <button class="card-arrow right">&#10095;</button>
        ` : ''}
      </div>
      <div class="body">
        <div class="cat-label">${p.category}</div>
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <div class="price">${p.price}</div>
      </div>
    `;

    // Переключение обложек
    if (hasMultipleCovers) {
      const imgEl = card.querySelector(".card-img");
      const btnLeft = card.querySelector(".card-arrow.left");
      const btnRight = card.querySelector(".card-arrow.right");
      let showingSecond = false;

      const switchCover = (e) => {
        e.stopPropagation();
        showingSecond = !showingSecond;
        imgEl.src = showingSecond ? secondImage : mainImage;
        btnLeft.style.display = showingSecond ? "flex" : "none";
        btnRight.style.display = showingSecond ? "none" : "flex";
      };

      btnRight.onclick = switchCover;
      btnLeft.onclick = switchCover;
    }

    // Открытие галереи
    card.onclick = (e) => {
      if (e.target.closest('.card-arrow')) return;
      openModal(p);
    };
    
    grid.appendChild(card);
  });
}

// Открытие галереи
function openModal(product) {
  currentImages = product.images;
  currentIndex = 0;
  modal.style.display = "block";
  modalImg.src = currentImages[currentIndex];
  captionText.innerHTML = product.name;
  
  // Проверяем, есть ли у товара коллекция
  if (product.linkedIds) {
    collectionLink.innerHTML = `<button class="btn-collection" onclick="filterByCollection('${product.linkedIds}')">Собрать полную коллекцию</button>`;
} else {
    collectionLink.innerHTML = "";
}
}

// Функция перехода к конкретной коллекции (по ID товаров)
function filterByCollection(idsString) {
  modal.style.display = "none";
  const ids = idsString.split(',').map(Number);
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  const collectionProducts = products.filter(p => ids.includes(p.id));
  render(collectionProducts);
  document.querySelector(".catalog-header h1").textContent = "Выбранная коллекция";
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

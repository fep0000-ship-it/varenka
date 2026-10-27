// ============================================
// Логика каталога — менять НЕ нужно
// ============================================

const grid = document.getElementById("grid");
const filtersBox = document.getElementById("filters");

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
    card.innerHTML = `
      <div class="photo">
        <img src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none'">
      </div>
      <div class="body">
        <div class="cat-label">${p.category}</div>
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <div class="price">${p.price}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

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
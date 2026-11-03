// ============================================
// СПИСОК ТОВАРОВ
// Чтобы добавить товар — скопируй блок { ... },
// вставь перед закрывающей ] и поменяй значения.
// ============================================

const products = [
  // --- ГИРЛЯНДЫ ---
  {
    id: 1,
    category: "Новогодняя гирлянда",
    name: "Гирлянда черная с золотым",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м красный",
    images: [
      "images/garland-1/main.jpg",
      "images/garland-1/1.jpg",
      "images/garland-1/2.jpg",
      "images/garland-1/3.jpg",
      "images/garland-1/4.jpg",
      "images/garland-1/5.jpg"
    ]
  },
  {
    id: 2,
    category: "Новогодняя гирлянда",
    name: "Гирлянда зеленая с красным",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-2/main.jpg",
      "images/garland-2/1.jpg",
      "images/garland-2/2.jpg",
      "images/garland-2/3.jpg",
      "images/garland-2/4.jpg",
      "images/garland-2/5.jpg"
    ]
  },
  {
    id: 3,
    category: "Новогодняя гирлянда",
    name: "Гирлянда синяя с серебром",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-3/main.jpg",
      "images/garland-3/1.jpg",
      "images/garland-3/2.jpg",
      "images/garland-3/3.jpg",
      "images/garland-3/4.jpg",
      "images/garland-3/5.jpg"
    ]
  },
  {
    id: 4,
    category: "Новогодняя гирлянда",
    name: "Гирлянда красная с золотом",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-4/main.jpg",
      "images/garland-4/1.jpg",
      "images/garland-4/2.jpg",
      "images/garland-4/3.jpg",
      "images/garland-4/4.jpg",
      "images/garland-4/5.jpg"
    ]
  },
  {
    id: 5,
    category: "Новогодняя гирлянда",
    name: "Гирлянда сиреневая",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-5/main.jpg",
      "images/garland-5/1.jpg",
      "images/garland-5/2.jpg",
      "images/garland-5/3.jpg",
      "images/garland-5/4.jpg",
      "images/garland-5/5.jpg"
    ]
  },
  {
    id: 6,
    category: "Новогодняя гирлянда",
    name: "Гирлянда оранжевая",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-6/main.jpg",
      "images/garland-6/1.jpg",
      "images/garland-6/2.jpg",
      "images/garland-6/3.jpg",
      "images/garland-6/4.jpg",
      "images/garland-6/5.jpg"
    ]
  },
  {
    id: 7,
    category: "Новогодняя гирлянда",
    name: "Гирлянда зеленая",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-7/main.jpg",
      "images/garland-7/1.jpg",
      "images/garland-7/2.jpg",
      "images/garland-7/3.jpg",
      "images/garland-7/4.jpg",
      "images/garland-7/5.jpg"
    ]
  },
  {
    id: 8,
    category: "Новогодняя гирлянда",
    name: "Гирлянда красная с блестками",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-8/main.jpg",
      "images/garland-8/1.jpg",
      "images/garland-8/2.jpg",
      "images/garland-8/3.jpg",
      "images/garland-8/4.jpg",
      "images/garland-8/5.jpg"
    ]
  },
  {
    id: 9,
    category: "Новогодняя гирлянда",
    name: "Гирлянда желтая",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
    images: [
      "images/garland-9/main.jpg",
      "images/garland-9/1.jpg",
      "images/garland-9/2.jpg",
      "images/garland-9/3.jpg",
      "images/garland-9/4.jpg",
      "images/garland-9/5.jpg"
    ]
  },

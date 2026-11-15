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
    name: "Гирлянда зеленая с красным",
    price: "1600 ₽",
    description: "Новогодняя гирлянда из эпоксидной смолы, 10 игрушек на проводе с лампочками, 1,5 м",
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
    name: "Гирлянда черная с золотым",
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
    // --- СНЕЖИНКИ ---
  {
    id: 10,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки черные с белым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-1/main1.jpg",
      "images/snowflake-1/main2.jpg",
      "images/snowflake-1/1.jpg",
      "images/snowflake-1/2.jpg",
      "images/snowflake-1/3.jpg",
      "images/snowflake-1/4.jpg",
      "images/snowflake-1/5.jpg",
      "images/snowflake-1/6.jpg"
    ]
  },
  {
    id: 11,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки черные с золотом",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-2/main1.jpg",
      "images/snowflake-2/main2.jpg",
      "images/snowflake-2/1.jpg",
      "images/snowflake-2/2.jpg",
      "images/snowflake-2/3.jpg",
      "images/snowflake-2/4.jpg",
      "images/snowflake-2/5.jpg",
      "images/snowflake-2/6.jpg"
    ]
  },
  {
    id: 12,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки красные с оранжевым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-3/main1.jpg",
      "images/snowflake-3/main2.jpg",
      "images/snowflake-3/1.jpg",
      "images/snowflake-3/2.jpg",
      "images/snowflake-3/3.jpg",
      "images/snowflake-3/4.jpg",
      "images/snowflake-3/5.jpg",
      "images/snowflake-3/6.jpg"
    ]
  },
  {
    id: 13,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки красные с блестками",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-4/main1.jpg",
      "images/snowflake-4/main2.jpg",
      "images/snowflake-4/1.jpg",
      "images/snowflake-4/2.jpg",
      "images/snowflake-4/3.jpg",
      "images/snowflake-4/4.jpg",
      "images/snowflake-4/5.jpg",
      "images/snowflake-4/6.jpg"
    ]
  },
  {
    id: 14,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки красные с белым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-5/main1.jpg",
      "images/snowflake-5/main2.jpg",
      "images/snowflake-5/1.jpg",
      "images/snowflake-5/2.jpg",
      "images/snowflake-5/3.jpg",
      "images/snowflake-5/4.jpg",
      "images/snowflake-5/5.jpg",
      "images/snowflake-5/6.jpg"
    ]
  },
  {
    id: 15,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки синие с золотым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-6/main1.jpg",
      "images/snowflake-6/main2.jpg",
      "images/snowflake-6/1.jpg",
      "images/snowflake-6/2.jpg",
      "images/snowflake-6/3.jpg",
      "images/snowflake-6/4.jpg",
      "images/snowflake-6/5.jpg",
      "images/snowflake-6/6.jpg"
    ]
  },
  {
    id: 16,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки сиреневые с розовым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-7/main1.jpg",
      "images/snowflake-7/main2.jpg",
      "images/snowflake-7/1.jpg",
      "images/snowflake-7/2.jpg",
      "images/snowflake-7/3.jpg",
      "images/snowflake-7/4.jpg",
      "images/snowflake-7/5.jpg",
      "images/snowflake-7/6.jpg"
    ]
  },
  {
    id: 17,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки синие с блестками",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-8/main1.jpg",
      "images/snowflake-8/main2.jpg",
      "images/snowflake-8/1.jpg",
      "images/snowflake-8/2.jpg",
      "images/snowflake-8/3.jpg",
      "images/snowflake-8/4.jpg",
      "images/snowflake-8/5.jpg",
      "images/snowflake-8/6.jpg"
    ]
  },
  {
    id: 18,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки синие с серебром",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-9/main1.jpg",
      "images/snowflake-9/main2.jpg",
      "images/snowflake-9/1.jpg",
      "images/snowflake-9/2.jpg",
      "images/snowflake-9/3.jpg",
      "images/snowflake-9/4.jpg",
      "images/snowflake-9/5.jpg",
      "images/snowflake-9/6.jpg"
    ]
  },
  {
    id: 19,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки синие с белым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-10/main1.jpg",
      "images/snowflake-10/main2.jpg",
      "images/snowflake-10/1.jpg",
      "images/snowflake-10/2.jpg",
      "images/snowflake-10/3.jpg",
      "images/snowflake-10/4.jpg",
      "images/snowflake-10/5.jpg",
      "images/snowflake-10/6.jpg"
    ]
  },
  {
    id: 20,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки голубые с белым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-11/main1.jpg",
      "images/snowflake-11/main2.jpg",
      "images/snowflake-11/1.jpg",
      "images/snowflake-11/2.jpg",
      "images/snowflake-11/3.jpg",
      "images/snowflake-11/4.jpg",
      "images/snowflake-11/5.jpg",
      "images/snowflake-11/6.jpg"
    ]
  },
  {
    id: 21,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки зеленые с желтым",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-12/main1.jpg",
      "images/snowflake-12/main2.jpg",
      "images/snowflake-12/1.jpg",
      "images/snowflake-12/2.jpg",
      "images/snowflake-12/3.jpg",
      "images/snowflake-12/4.jpg",
      "images/snowflake-12/5.jpg",
      "images/snowflake-12/6.jpg"
    ]
  },
  {
    id: 22,
    category: "Елочные игрушки «Снежинки»",
    name: "Снежинки зеленые с  золотом",
    price: "1000 ₽",
    description: "Елочные игрушки из эпоксидной смолы «Снежинки» 24 шт",
    images: [
      "images/snowflake-13/main1.jpg",
      "images/snowflake-13/main2.jpg",
      "images/snowflake-13/1.jpg",
      "images/snowflake-13/2.jpg",
      "images/snowflake-13/3.jpg",
      "images/snowflake-13/4.jpg",
      "images/snowflake-13/5.jpg",
      "images/snowflake-13/6.jpg"
    ]
  },
    // --- ПОДСВЕЧНИКИ ---
  // Серебряные (5 штук)
  {
    id: 23,
    category: "Подсвечники из гипса",
    name: "Подсвечник белый с серебряным покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-silver-1/main1.jpg",
      "images/candle-silver-1/main2.jpg",
      "images/candle-silver-1/1.jpg",
      "images/candle-silver-1/2.jpg",
      "images/candle-silver-1/3.jpg",
      "images/candle-silver-1/4.jpg",
      "images/candle-silver-1/5.jpg",
      "images/candle-silver-1/6.jpg",
      "images/candle-silver-1/7.jpg",
      "images/candle-silver-1/8.jpg"
    ]
  },
  {
    id: 24,
    category: "Подсвечники из гипса",
    name: "Подсвечник желтый с серебряным покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-silver-2/main1.jpg",
      "images/candle-silver-2/main2.jpg",
      "images/candle-silver-2/1.jpg",
      "images/candle-silver-2/2.jpg",
      "images/candle-silver-2/3.jpg",
      "images/candle-silver-2/4.jpg",
      "images/candle-silver-2/5.jpg",
      "images/candle-silver-2/6.jpg",
      "images/candle-silver-2/7.jpg",
      "images/candle-silver-2/8.jpg"
    ]
  },
  {
    id: 25,
    category: "Подсвечники из гипса",
    name: "Подсвечник светло-серый с серебряным покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-silver-3/main1.jpg",
      "images/candle-silver-3/main2.jpg",
      "images/candle-silver-3/1.jpg",
      "images/candle-silver-3/2.jpg",
      "images/candle-silver-3/3.jpg",
      "images/candle-silver-3/4.jpg",
      "images/candle-silver-3/5.jpg",
      "images/candle-silver-3/6.jpg",
      "images/candle-silver-3/7.jpg",
      "images/candle-silver-3/8.jpg"
    ]
  },
  {
    id: 26,
    category: "Подсвечники из гипса",
    name: "Подсвечник голубой с серебряным покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-silver-4/main1.jpg",
      "images/candle-silver-4/main2.jpg",
      "images/candle-silver-4/1.jpg",
      "images/candle-silver-4/2.jpg",
      "images/candle-silver-4/3.jpg",
      "images/candle-silver-4/4.jpg",
      "images/candle-silver-4/5.jpg",
      "images/candle-silver-4/6.jpg",
      "images/candle-silver-4/7.jpg",
      "images/candle-silver-4/8.jpg"
    ]
  },
  {
    id: 27,
    category: "Подсвечники из гипса",
    name: "Подсвечник оранжевый с серебряным покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-silver-5/main1.jpg",
      "images/candle-silver-5/main2.jpg",
      "images/candle-silver-5/1.jpg",
      "images/candle-silver-5/2.jpg",
      "images/candle-silver-5/3.jpg",
      "images/candle-silver-5/4.jpg",
      "images/candle-silver-5/5.jpg",
      "images/candle-silver-5/6.jpg",
      "images/candle-silver-5/7.jpg",
      "images/candle-silver-5/8.jpg"
    ]
  },

  // Золотые (7 штук)
  {
    id: 28,
    category: "Подсвечники из гипса",
    name: "Подсвечник белый с золотым покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-gold-1/main1.jpg",
      "images/candle-gold-1/main2.jpg",
      "images/candle-gold-1/1.jpg",
      "images/candle-gold-1/2.jpg",
      "images/candle-gold-1/3.jpg",
      "images/candle-gold-1/4.jpg",
      "images/candle-gold-1/5.jpg",
      "images/candle-gold-1/6.jpg",
      "images/candle-gold-1/7.jpg",
      "images/candle-gold-1/8.jpg"
    ]
  },
  {
    id: 29,
    category: "Подсвечники из гипса",
    name: "Подсвечник желтый с золотым покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-gold-2/main1.jpg",
      "images/candle-gold-2/main2.jpg",
      "images/candle-gold-2/1.jpg",
      "images/candle-gold-2/2.jpg",
      "images/candle-gold-2/3.jpg",
      "images/candle-gold-2/4.jpg",
      "images/candle-gold-2/5.jpg",
      "images/candle-gold-2/6.jpg",
      "images/candle-gold-2/7.jpg",
      "images/candle-gold-2/8.jpg"
    ]
  },
  {
    id: 30,
    category: "Подсвечники из гипса",
    name: "Подсвечник светло-серый с золотым покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-gold-3/main1.jpg",
      "images/candle-gold-3/main2.jpg",
      "images/candle-gold-3/1.jpg",
      "images/candle-gold-3/2.jpg",
      "images/candle-gold-3/3.jpg",
      "images/candle-gold-3/4.jpg",
      "images/candle-gold-3/5.jpg",
      "images/candle-gold-3/6.jpg",
      "images/candle-gold-3/7.jpg",
      "images/candle-gold-3/8.jpg"
    ]
  },
  {
    id: 31,
    category: "Подсвечники из гипса",
    name: "Подсвечник голубой с золотым покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-gold-4/main1.jpg",
      "images/candle-gold-4/main2.jpg",
      "images/candle-gold-4/1.jpg",
      "images/candle-gold-4/2.jpg",
      "images/candle-gold-4/3.jpg",
      "images/candle-gold-4/4.jpg",
      "images/candle-gold-4/5.jpg",
      "images/candle-gold-4/6.jpg",
      "images/candle-gold-4/7.jpg",
      "images/candle-gold-4/8.jpg"
    ]
  },
  {
    id: 32,
    category: "Подсвечники из гипса",
    name: "Подсвечник оранжевый с золотым покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-gold-5/main1.jpg",
      "images/candle-gold-5/main2.jpg",
      "images/candle-gold-5/1.jpg",
      "images/candle-gold-5/2.jpg",
      "images/candle-gold-5/3.jpg",
      "images/candle-gold-5/4.jpg",
      "images/candle-gold-5/5.jpg",
      "images/candle-gold-5/6.jpg",
      "images/candle-gold-5/7.jpg",
      "images/candle-gold-5/8.jpg"
    ]
  },
  {
    id: 33,
    category: "Подсвечники из гипса",
    name: "Подсвечник коричневый с золотым покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-gold-6/main1.jpg",
      "images/candle-gold-6/main2.jpg",
      "images/candle-gold-6/1.jpg",
      "images/candle-gold-6/2.jpg",
      "images/candle-gold-6/3.jpg",
      "images/candle-gold-6/4.jpg",
      "images/candle-gold-6/5.jpg",
      "images/candle-gold-6/6.jpg",
      "images/candle-gold-6/7.jpg",
      "images/candle-gold-6/8.jpg"
    ]
  },
  {
    id: 34,
    category: "Подсвечники из гипса",
    name: "Подсвечник пыльная роза с золотым покрытием",
    price: "400 ₽",
    description: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    images: [
      "images/candle-gold-7/main1.jpg",
      "images/candle-gold-7/main2.jpg",
      "images/candle-gold-7/1.jpg",
      "images/candle-gold-7/2.jpg",
      "images/candle-gold-7/3.jpg",
      "images/candle-gold-7/4.jpg",
      "images/candle-gold-7/5.jpg",
      "images/candle-gold-7/6.jpg",
      "images/candle-gold-7/7.jpg",
      "images/candle-gold-7/8.jpg"
    ]
  },
    // --- ЁЛОЧНЫЕ ШАРЫ ---
  // Коллекция СИНИЙ
  {
    id: 35,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "600 ₽",
   description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "45, 47",
    images: [
      "images/balls-3-blue/1.jpg", "images/balls-3-blue/4.jpg"
    ]
  },
{
    id: 36,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3 и 4 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "39",
    images: [
      "images/balls-3-blue/2.jpg", "images/balls-3-blue/4.jpg"
    ]
  },
{
    id: 37,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "43",
    images: [
      "images/balls-3-blue/3.jpg", "images/balls-3-blue/4.jpg"
    ]
  },
  {
    id: 38,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "750 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 4 шаров. Полная линейка размеров: 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "40",
    images: [
      "images/balls-4-blue/1.jpg", "images/balls-4-blue/3.jpg"
    ]
  },
 {
    id: 39,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "750 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 4 шаров. Полная линейка размеров: 3 и 4 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "36",
    images: [
      "images/balls-4-blue/2.jpg", "images/balls-4-blue/3.jpg"
    ]
  },
  {
    id: 40,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "38",
    images: [
      "images/balls-6-blue/1.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 41,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 6 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-6-blue/2.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 42,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 6 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-6-blue/3.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 43,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "37",
    images: [
      "images/balls-6-blue/4.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 44,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 6 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-6-blue/5.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 45,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "35, 47",
    images: [
      "images/balls-6-blue/6.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 46,
   category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 6 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-6-blue/7.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 47,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "35, 45",
    images: [
      "images/balls-6-blue/8.jpg", "images/balls-6-blue/10.jpg"
    ]
  },
{
    id: 48,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в синих/голубых тонах",
    price: "1100 ₽",
    description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 6 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-6-blue/9.jpg", "images/balls-6-blue/10.jpg"
    ]
  },

  // Коллекция ЗОЛОТОЙ (нет набора из 4)
  {
    id: 49,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек с золотым покрытием",
    price: "600 ₽",
     description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "50",
    images: [
      "images/balls-3-gold/1.jpg", "images/balls-3-gold/2.jpg"
    ]
  },
  {
    id: 50,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек с золотым покрытием",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-6-gold/1.jpg", "images/balls-6-gold/2.jpg"
    ]
  },

  // Коллекция ЗЕЛЕНЫЙ
  {
    id: 51,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в зеленых тонах",
    price: "600 ₽",
     description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-3-green/1.jpg", "images/balls-3-green/3.jpg"
    ]
  },
{
    id: 52,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в зеленых тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-3-green/2.jpg", "images/balls-3-green/3.jpg"
    ]
  },
  {
    id: 53,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек в зеленых тонах",
    price: "750 ₽",
   description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 4 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-4-green/1.jpg", "images/balls-4-green/2.jpg"
    ]
  },
  {
    id: 54,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в зеленых тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-6-green/1.jpg", "images/balls-6-green/3.jpg"
    ]
  }, 
  {
    id: 55,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в зеленых тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-6-green/2.jpg", "images/balls-6-green/3.jpg"
    ]
  },

  // Коллекция КРАСНЫЙ
  {
    id: 56,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "67",
    images: [
      "images/balls-3-red/1.jpg", "images/balls-3-red/7.jpg"
    ]
  },
  {
    id: 57,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "70",
    images: [
      "images/balls-3-red/2.jpg", "images/balls-3-red/7.jpg"
    ]
  },
{
    id: 58,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "65",
    images: [
      "images/balls-3-red/3.jpg", "images/balls-3-red/7.jpg"
    ]
  },
{
    id: 59,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "69",
    images: [
      "images/balls-3-red/4.jpg", "images/balls-3-red/7.jpg"
    ]
  },
{
    id: 60,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3 и 4 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "63",
    images: [
      "images/balls-3-red/5.jpg", "images/balls-3-red/7.jpg"
    ]
  },
{
    id: 61,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "62, 66",
    images: [
      "images/balls-3-red/6.jpg", "images/balls-3-red/7.jpg"
    ]
  },
  {
    id: 62,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "750 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 4 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "61, 66",
    images: [
      "images/balls-4-red/1.jpg", "images/balls-4-red/4.jpg"
    ]
  },
{
    id: 63,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "750 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 4 шаров. Полная линейка размеров: 3 и 4 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "60",
    images: [
      "images/balls-4-red/2.jpg", "images/balls-4-red/4.jpg"
    ]
  },
{
    id: 64,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "750 ₽",
    description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 4 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-4-red/3.jpg", "images/balls-4-red/4.jpg"
    ]
  },
  {
    id: 65,
   category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "58",
    images: [
      "images/balls-6-red/1.jpg", "images/balls-6-red/7.jpg"
    ]
  },
  {
    id: 66,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "61, 62",
    images: [
      "images/balls-6-red/2.jpg", "images/balls-6-red/7.jpg"
    ]
  },
{
    id: 67,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "56",
    images: [
      "images/balls-6-red/3.jpg", "images/balls-6-red/7.jpg"
    ]
  },
{
    id: 68,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "1100 ₽",
    description: "Уникальный подарочный набор ёлочных игрушек из эпоксидной смолы. Этот дизайн выпускается только в количестве 4 штук. Если вам нужна большая композиция, обратите внимание на другие цветовые решения в нашем каталоге (наборы по 3, 4 и 6 шаров).",
    images: [
      "images/balls-6-red/4.jpg", "images/balls-6-red/7.jpg"
    ]
  },
{
    id: 69,
   category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "59",
    images: [
      "images/balls-6-red/5.jpg", "images/balls-6-red/7.jpg"
    ]
  },{
    id: 70,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек в красных тонах",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "57",
    images: [
      "images/balls-6-red/6.jpg", "images/balls-6-red/7.jpg"
    ]
  },

  // Коллекция СЕРЕБРЯНЫЙ
  {
    id: 71,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек с сереряным покрытием",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-3-silver/1.jpg", "images/balls-3-silver/4.jpg"
    ]
  },
 {
    id: 72,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек с сереряным покрытием",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "75,77",
    images: [
      "images/balls-3-silver/2.jpg", "images/balls-3-silver/4.jpg"
    ]
  },
 {
    id: 73,
    category: "Ёлочные игрушки - 3 шара",
    name: "Набор ёлочных игрушек с сереряным покрытием",
    price: "600 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 3 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-3-silver/3.jpg", "images/balls-3-silver/4.jpg"
    ]
  },
  {
    id: 74,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек с сереряным покрытием",
    price: "750 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 4 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-4-silver/1.jpg", "images/balls-4-silver/4.jpg"
    ]
  },
{
    id: 75,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек с сереряным покрытием",
    price: "750 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 4 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "72,77",
    images: [
      "images/balls-4-silver/2.jpg", "images/balls-4-silver/4.jpg"
    ]
  },
{
    id: 76,
    category: "Ёлочные игрушки - 4 шара",
    name: "Набор ёлочных игрушек с сереряным покрытием",
    price: "750 ₽",
    description: "Готовый подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 4 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "49",
    images: [
      "images/balls-4-silver/3.jpg", "images/balls-4-silver/4.jpg"
    ]
  },
  {
    id: 77,
    category: "Ёлочные игрушки - 6 шаров",
    name: "Набор ёлочных игрушек с сереряным покрытием",
    price: "1100 ₽",
    description: "Большой подарочный набор ёлочных игрушек из эпоксидной смолы. Данный набор из 6 шаров. Полная линейка размеров: 3, 4 и 6 шаров. Нажмите кнопку, чтобы посмотреть всю коллекцию в этом дизайне.",
    linkedIds: "72,75",
    images: [
      "images/balls-6-silver/1.jpg", "images/balls-6-silver/2.jpg"
    ]
  }
];

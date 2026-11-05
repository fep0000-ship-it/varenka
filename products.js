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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    description: "Елочные игрушки «Снежинки» 24 шт",
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
    name: "Снежинка «Уютная»",
    price: "250 ₽",
    description: "Тёплая на вид снежинка с мягким свечением.",
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
    name: "Снежинка «Элегантная»",
    price: "250 ₽",
    description: "Утончённая снежинка для стильного интерьера.",
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
    name: "Снежинка «Сказочная»",
    price: "250 ₽",
    description: "Снежинка с неповторимым узором.",
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
    name: "Снежинка «Новогодняя»",
    price: "250 ₽",
    description: "Главный символ зимы в вашем доме.",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник белый",
    price: "400 ₽",
    description: "Подсвечник с серебряным покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник желтый",
    price: "400 ₽",
    description: "Подсвечник с серебряным покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник светло-серый",
    price: "400 ₽",
    description: "Подсвечник с серебряным покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник голубой",
    price: "400 ₽",
    description: "Подсвечник с серебряным покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник оранжевый",
    price: "400 ₽",
    description: "Подсвечник с серебряным покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник белый",
    price: "400 ₽",
    description: "Подсвечник с золотым покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник желтый",
    price: "400 ₽",
    description: "Подсвечник с золотым покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник светло-серый",
    price: "400 ₽",
    description: "Подсвечник с золотым покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник голубой",
    price: "400 ₽",
    description: "Подсвечник с золотым покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник оранжевый",
    price: "400 ₽",
    description: "Подсвечник с золотым покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник коричневый",
    price: "400 ₽",
    description: "Подсвечник с золотым покрытием",
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
    category: "Набор подсвечников из гипса с насыпным воском, 2 шт. в подарочной коробке",
    name: "Подсвечник пыльная роза",
    price: "400 ₽",
    description: "Подсвечник с золотым покрытием",
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
  }
];

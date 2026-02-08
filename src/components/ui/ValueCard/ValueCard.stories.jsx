import ValueCard from "./ValueCard";

export default {
  title: "UI/ValueCard",
  component: ValueCard,
};

export const Default = {
  args: {
    title: "Радикальна Чесність",
    description:
      "Ми не боїмось казати правду. Якщо існує проблема - про неї кажуть вголос миттєво. Ініціатива не карається, а заохочується.",
  },
};

export const LongTitle = {
  args: {
    title: "Екосистема Важливості",
    description:
      "Пілот дрона - це вершина нашої екосистеми, але без ідеального забезпечення він просто не може літати. Ми цінуємо «механіків» так само як «гонщиків».",
  },
};

export const ShortContent = {
  args: {
    title: "Анти-Застій",
    description: "Ми - як військовий стартап. Ми вчимося щодня.",
  },
};

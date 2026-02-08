import CopyButton from "./CopyButton";

export default {
  title: "UI/CopyButton",
  component: CopyButton,
};

export const Default = {
  args: {
    text: "https://send.monobank.ua/jar/2ZnCUmV6bZ",
    size: 24,
  },
};

export const Small = {
  args: {
    text: "UA123456789012345678901234567",
    size: 18,
  },
};

export const Large = {
  args: {
    text: "Текст для копіювання",
    size: 32,
  },
};

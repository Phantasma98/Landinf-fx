import styles from "./SocialLinks.module.css";
import {
  InstaIcon,
  TelegramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon
} from "@/assets";

const defaultSocials = [
  { icon: InstaIcon, href: "https://instagram.com/phoenix_dpsu", alt: "Instagram" },
  { icon: TelegramIcon, href: "https://t.me/phoenix_dpsu", alt: "Telegram" },
  { icon: YoutubeIcon, href: "https://youtube.com", alt: "YouTube" },
  { icon: FacebookIcon, href: "https://facebook.com/phoenix.dpsu", alt: "Facebook" },
  { icon: TiktokIcon, href: "https://tiktok.com/@phoenix_dpsu", alt: "TikTok" },
];

export default function SocialLinks({
  socials,
  iconSize = 36,
  gap = 15,
  className = "",
}) {
  const items = socials || defaultSocials;

  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ gap: `${gap}px`, "--social-icon-size": `${iconSize}px` }}
    >
      {items.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.icon}
            width={iconSize}
            height={iconSize}
            alt={social.alt || ""}
          />
        </a>
      ))}
    </div>
  );
}

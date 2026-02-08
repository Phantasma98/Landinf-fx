import styles from "./SocialLinks.module.css";

/**
 * Shared SocialLinks component
 * Displays a row of social media icons
 *
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.direction] - "row" or "column"
 */
const SocialLinks = ({ className = "", direction = "row" }) => {
    const socialLinks = [
        { icon: "/images/InstaIcon.svg", href: "#instagram", alt: "Instagram" },
        { icon: "/images/TelegramIcon.svg", href: "#telegram", alt: "Telegram" },
        { icon: "/images/FacebookIcon.svg", href: "#facebook", alt: "Facebook" },
        { icon: "/images/YoutubeIcon.svg", href: "#youtube", alt: "YouTube" },
        { icon: "/images/TiktokIcon.svg", href: "#tiktok", alt: "TikTok" },
        { icon: "/images/ExIcon.svg", href: "#twitter", alt: "X (Twitter)" },
    ];

    return (
        <div className={`${styles.socialLinks} ${direction === "column" ? styles.column : ""} ${className}`}>
            {socialLinks.map((social, idx) => (
                <a
                    key={idx}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.alt}
                >
                    <img
                        src={social.icon}
                        width={27}
                        height={27}
                        alt={social.alt}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;

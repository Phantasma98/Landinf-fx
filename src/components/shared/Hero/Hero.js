import styles from "./Hero.module.css";
import PrimaryBtn from "@/components/elements/PrimaryBtn";
import SecondaryBtn from "@/components/elements/SecondaryBtn";
import SocialLinks from "@/components/shared/SocialLinks";

/**
 * Shared Hero component for all pages
 * 
 * @param {Object} props
 * @param {string} props.backgroundImage - Path to hero background image
 * @param {string} props.subtitle - Small text above title
 * @param {string|React.ReactNode} props.title - Main hero title (can include <br/>)
 * @param {Object} [props.primaryButton] - Primary button config { text, href }
 * @param {Object} [props.secondaryButton] - Secondary button config { text, href }
 * @param {boolean} [props.showSocials=true] - Whether to show social links
 * @param {string} [props.sectionId="home"] - Section ID for anchor links
 */
const Hero = ({
    backgroundImage,
    subtitle,
    title,
    primaryButton,
    secondaryButton,
    showSocials = true,
    sectionId = "home",
}) => {
    return (
        <section id={sectionId} className={styles.hero}>
            {/* Background Image */}
            <div className={styles.heroBackground}>
                <Image
                <img
                    src={backgroundImage}
                    alt="Hero Background"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>

            {/* Content Container */}
            <div className="container">
                <div className={`content ${styles.heroInner}`}>
                    {/* Text Content */}
                    <div className={styles.heroContent}>
                        <p className={`${styles.heroSubtitle} font-subtitle-l`}>
                            {subtitle}
                        </p>
                        <h1 className={`${styles.heroTitle} font-title-l title-l-l`}>
                            {title}
                        </h1>

                        {/* Action Buttons */}
                        {(primaryButton || secondaryButton) && (
                            <div className={styles.heroActions}>
                                {primaryButton && (
                                    <PrimaryBtn text={primaryButton.text} href={primaryButton.href} />
                                )}
                                {secondaryButton && (
                                    <SecondaryBtn text={secondaryButton.text} href={secondaryButton.href} />
                                )}
                            </div>
                        )}
                    </div>

                    {/* Social Links */}
                    {showSocials && (
                        <SocialLinks className={styles.heroSocials} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;

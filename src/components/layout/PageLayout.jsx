import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./PageLayout.module.css";

/**
 * PageLayout - common layout wrapper for all pages
 * Eliminates scroll logic duplication across 9 pages
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 * @param {"dark" | "surface"} [props.startTheme="dark"] - Alternating section background start
 * @param {string} [props.className] - Additional container class names
 * @param {boolean} [props.footerDark=false] - Whether footer has dark background
 * @param {boolean} [props.forceHeaderSolid=false] - Force solid header style regardless of scroll position
 */
const PageLayout = ({
    children,
    startTheme = "dark",
    className = "",
    footerDark = false,
    forceHeaderSolid = false,
}) => {
    const { isHeaderVisible, isScrolled } = useHeaderScroll();
    const startClass = startTheme === "surface" ? "start-surface" : "start-dark";

    return (
        <div className={`${styles.page} page-container ${startClass} ${className}`.trim()}>
            <Header
                isVisible={isHeaderVisible}
                isScrolled={isScrolled}
                forceSolid={forceHeaderSolid}
            />

            {children}

            <Footer backgroundDark={footerDark} />
        </div>
    );
};

export default PageLayout;

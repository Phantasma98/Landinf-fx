import styles from "./SectionForm.module.css";
import ComponentForm from "@/components/form/ComponentForm";

/**
 * Shared SectionForm component - wrapper for the recruitment form
 * 
 * @param {Object} props
 * @param {string} [props.title="ДОЛУЧИТИСЬ"] - Section title
 * @param {string|React.ReactNode} [props.description] - Description text
 * @param {string} [props.sectionId="form"] - Section ID for anchor links
 * @param {string} [props.variant="default"] - Visual variant: "default" | "dark"
 */
const SectionForm = ({
    title = "ДОЛУЧИТИСЬ",
    description = (
        <>
            Залишай заявку та будь на звʼязку. <br />
            Рекрутери Фенікса звʼяжуться з тобою.
        </>
    ),
    sectionId = "form",
    variant = "default",
}) => {
    return (
        <section
            id={sectionId}
            className={`${styles.formSection} ${variant === "dark" ? styles.dark : ""}`}
        >
            <div className="container">
                <div className={`content ${styles.formInner}`}>
                    {/* Header */}
                    <div className={styles.formHeader}>
                        <h2 className={`${styles.formTitle} font-title-l title-l-m`}>
                            {title}
                        </h2>
                        <div className={`${styles.formDescription} font-text-l-s`}>
                            <p>{description}</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className={styles.formContent}>
                        <ComponentForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionForm;

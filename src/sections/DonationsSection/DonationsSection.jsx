import styles from "./index.module.css";

const DonationsSection = ({ title, description, blocks = [] }) => {
  return (
    <section id="donations" className={`${styles.main} full-bleed`}>
      <div className={styles.section}>
        <div className={`${styles.block} content-grid`}>
          <div className={`${styles.titleHeader} font-title-l title-l-m section-title`}>
            {title}
          </div>
          <div className={`${styles.titleText} font-text-l-s `}>
            {description}
          </div>
        </div>
        {blocks.map((block, idx) => (
          <div key={`${block.title}-${idx}`} className={styles.block}>
            <div className={styles.blockHeader}>
              <div className={`${styles.blockHeaderTitle} font-title-l title-l-s`}>
                {block.title}
              </div>
              <div className={`${styles.blockHeaderText} font-text-l-s`}>
                {block.text}
              </div>
              <div
                className={`${styles.blockHeaderSum} font-headline-l headline-l-m`}
              >
                {block.sum}
              </div>
            </div>
            <div className={styles.blockVideo}>
              <iframe
                src={`https://www.youtube.com/embed/${block.videoId}`}
                title={block.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationsSection;

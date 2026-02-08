import styles from "./index.module.css";

export default function ContactsSection({ title, recruitment, messengers, media, cooperation }) {
  return (
    <section className={styles.contactsMain}>
      <div className={`${styles.contentWrapper} layout-1250`}>
        <div className="content-row">
          <h2 className={`${styles.sectionTitle} col-left font-title-l title-l-m section-title`}>
            {title}
          </h2>
          <div className={`col-right ${styles.grid}`}>
            {recruitment && (
              <div className={`${styles.card} ${styles.recruitment}`}>
                <h3 className="font-title-l title-l-s">{recruitment.title}</h3>
                <div className={`${styles.cardContent} font-subtitle-m`}>
                  {recruitment.phones?.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className={styles.link}>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {cooperation && (
              <div className={`${styles.card} ${styles.cooperation}`}>
                <h3 className="font-title-l title-l-s">{cooperation.title}</h3>
                <div className={`${styles.cardContent} font-subtitle-m`}>
                  <a href={`mailto:${cooperation.email}`} className={styles.link}>{cooperation.email}</a>
                </div>
              </div>
            )}
            {media && (
              <div className={`${styles.card} ${styles.media}`}>
                <h3 className="font-title-l title-l-s">{media.title}</h3>
                <div className={`${styles.cardContent} font-subtitle-m`}>
                  <a href={`mailto:${media.email}`} className={styles.link}>{media.email}</a>
                </div>
              </div>
            )}
            {messengers && (
              <div className={`${styles.card} ${styles.messengers}`}>
                <h3 className="font-title-l title-l-s">{messengers.title}</h3>
                <div className={`${styles.cardContent} ${styles.messengerList} font-subtitle-m`}>
                  {messengers.items?.map((item, idx) => (
                    <a key={idx} href="#" className={`${styles.link} ${styles.messengerItem}`}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

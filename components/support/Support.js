import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

import SecondaryBtn from "../SecondaryBtn";

const Support = () => {
  const [activePaymentMethods, setActivePaymentMethods] = useState("MONOBANK");
  const QRimage = "/images/Mono_zbir.svg";
  const copyUrl = "/images/CopyUrl.svg";
  const arrow = "/images/orangeArrow.svg";

  const paymentMethods = ["MONOBANK", "КАРТКА", "PAYPAL", "РЕКВІЗИТИ"];
  return (
    <section id="support" className={styles.supportMain}>
      <div className={styles.supportSection}>
        <div className={styles.supportHeader}>
          <h2 className={styles.sectionTitle}>ПІДТРИМАТИ</h2>
          <div className={styles.supportInfo}>
            <p>Збір на дрони - перехоплювачі.</p>
            <p>Ціль: 1 500 000 грн</p>
            <p>Зачистимо українське небо від ворожої присутності!</p>
          </div>
        </div>
        <div className={styles.supportContent}>
          {QRimage && (
            <div className={styles.donationImage}>
              <Image
                src={QRimage}
                alt="Donation"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          <div className={styles.paymentMethods}>
            <div className={styles.paymentButtons}>
              {paymentMethods.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.paymentBtn} ${
                    activePaymentMethods === cat ? styles.active : ""
                  }`}
                  onClick={() => setActivePaymentMethods(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={styles.bankInfoContainer}>
              <div className={styles.bankInfo}>
                <div className={styles.bankInfoTitle}>ПЕРЕЙТИ НА БАНКУ</div>
                <div className={styles.bankInfoUrlContainer}>
                  <div className={styles.bankInfoUrl}>
                    https://send.monobank.ua/jar/2ZnCUmV6bZ
                  </div>
                  <div className={styles.bankInfoSvg}>
                    <Image src={copyUrl} alt="copyUrl" width={24} height={24} />
                  </div>
                </div>
              </div>
              <div className={styles.bankInfoButton}>
                <Image src={arrow} alt="arrow" width={54} height={54} />
              </div>
            </div>

            <div className={styles.supportButton}>
              <SecondaryBtn text={"переглянути закриті збори"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

import SecondaryBtn from "../../elements/SecondaryBtn";
import ArrowButton from "../../elements/ArrowButton";

const Support = () => {
  const [activePaymentMethods, setActivePaymentMethods] = useState("MONOBANK");
  const QRimage = "/images/Mono_zbir.svg";
  const copyUrl = "/images/CopyUrl.svg";
  const arrow = "/images/Arrow45.svg";

  const paymentMethods = ["MONOBANK", "КАРТКА", "PAYPAL", "РЕКВІЗИТИ"];
  return (
    <section id="support" className={styles.supportMain}>
      <div className={styles.supportSection}>
        <div className={styles.supportHeader}>
          <h2 className={`${styles.sectionTitle} font-title-l  title-l-m `}>
            ПІДТРИМАТИ
          </h2>
          <div className={`${styles.supportInfo} font-text-l-s  `}>
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
                  className={`${styles.paymentBtn} font-jobButton-l ${
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
                <div className={`${styles.bankInfoTitle} font-text-l-l  `}>
                  ПЕРЕЙТИ НА БАНКУ
                </div>
                <div className={styles.bankInfoUrlContainer}>
                  <div className={`${styles.bankInfoUrl} font-jobButton-l`}>
                    https://send.monobank.ua/jar/2ZnCUmV6bZ
                  </div>
                  <div className={styles.bankInfoSvg}>
                    <Image src={copyUrl} alt="copyUrl" width={24} height={24} />
                  </div>
                </div>
              </div>
              <ArrowButton />
            </div>

            <div className={styles.supportButton}>
              <SecondaryBtn
                text={"переглянути закриті збори"}
                href={"/donations"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

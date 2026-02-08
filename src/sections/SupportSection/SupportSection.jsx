import { useState } from "react";

import styles from "./index.module.css";
import TabButtons from "@/components/ui/TabButtons";
import CopyButton from "@/components/ui/CopyButton";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import ArrowButton from "@/components/ui/ArrowButton";

const Support = ({
  id = "support",
  title,
  infoLines = [],
  paymentMethods = [],
  paymentLinks = {},
  bankTitles = {},
  requisites,
  defaultMethod,
  qrImage,
  bankTitle,
  ctaText,
  ctaHref,
}) => {
  const [activePaymentMethod, setActivePaymentMethod] = useState(
    defaultMethod || paymentMethods[0] || ""
  );
  const [copiedIndex, setCopiedIndex] = useState(null);

  const isRequisites = activePaymentMethod === "РЕКВІЗИТИ" || activePaymentMethod === "BANK TRANSFER";
  const currentBankUrl = paymentLinks[activePaymentMethod] || "#";
  const currentBankTitle = bankTitles[activePaymentMethod] || bankTitle || "ПЕРЕЙТИ";

  const handleCopy = (index) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleBankClick = () => {
    if (!isRequisites) {
      window.open(currentBankUrl, "_blank");
    }
  };

  return (
    <section id={id} className={`${styles.supportMain} full-bleed`}>
      <div className={`${styles.supportSection} layout-1250 reveal-horizontal`}>
        <div className="content-row">
          <h2 className="col-left font-title-l title-l-m section-title">
            {title}
          </h2>
          <div className={`col-right ${styles.supportInfo} font-text-l-s`}>
            {infoLines.map((line, idx) => (
              <p key={`${line}-${idx}`}>{line}</p>
            ))}
          </div>
        </div>

        <div className={styles.supportContent}>
          {qrImage ? (
            <div className={styles.donationImage}>
              <img
                src={qrImage}
                alt="Donation"
                className={styles.donationImg}
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : null}
          <div className={styles.paymentMethods}>
            <TabButtons
              items={paymentMethods}
              activeItem={activePaymentMethod}
              onSelect={setActivePaymentMethod}
              className={styles.paymentButtons}
              buttonClassName={styles.paymentButtonItem}
            />
            {isRequisites && requisites ? (
              <div className={styles.requisitesContainer}>
                <div className={styles.requisitesContent}>
                  <div className={`${styles.requisitesTitle} font-text-l-l`}>
                    {requisites.title}
                  </div>
                  <div className={styles.requisitesList}>
                    {requisites.items.map((item, idx) => (
                      <div key={idx} className={styles.requisiteRow}>
                        <span className={`${styles.requisiteText} font-text-l-xs`}>
                          {item.label}: {item.value}
                        </span>
                        <CopyButton
                          text={item.value}
                          onCopy={() => handleCopy(idx)}
                          className={copiedIndex === idx ? styles.copied : ""}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <ArrowButton
                  className={styles.bankInfoArrow}
                  imageClassName={styles.bankInfoArrowImg}
                />
              </div>
            ) : (
              <div className={styles.bankInfoContainer} onClick={handleBankClick}>
                <div className={styles.bankInfo}>
                  <div className={`${styles.bankInfoTitle} font-text-l-l`}>
                    {currentBankTitle}
                  </div>
                  <div className={styles.bankInfoUrlContainer}>
                    <div className={`${styles.bankInfoUrl} font-jobButton-l`}>
                      {currentBankUrl}
                    </div>
                    <CopyButton
                      text={currentBankUrl}
                      onCopy={() => handleCopy(-1)}
                      className={copiedIndex === -1 ? styles.copied : ""}
                    />
                  </div>
                </div>
                <div className="arrow-btn-container">
                  <ArrowButton />
                </div>
              </div>
            )}

            {ctaText ? (
              <div className={styles.supportButton}>
                <SecondaryBtn text={ctaText} href={ctaHref} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;

"use client";
import { useState, useCallback, useEffect } from "react";

import styles from "./index.module.css";
import PrimaryBtn from "../elements/PrimaryBtn";
import { customFetch } from "@/components/Functions";

const SectionVacancy = ({ vacancy }) => {
  return (
    <section id="vacancy" className={styles.main}>
      <div className={styles.section}>
        <div className={`${styles.title} font-title-l title-l-m `}>
          {vacancy.title}
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            обовʼязки
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            <ul>
              {vacancy.duties.map((vac, idx) => (
                <li key={idx}>{vac}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            вимоги
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            <ul>
              {vacancy.require.map((vac, idx) => (
                <li key={idx}>{vac}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.block}>
          <div
            className={`${styles.blockHeader} font-headline-l headline-l-m `}
          >
            умови
          </div>
          <div className={`${styles.blockText} font-text-l-s `}>
            <ul>
              {vacancy.conditions.map((vac, idx) => (
                <li key={idx}>{vac}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.teamButton}>
          <PrimaryBtn text={"приєднатись до команди"} />
        </div>
      </div>
    </section>
  );
};

export default SectionVacancy;

"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SectionVacancy from "@/components/vacancy/Vacancy";
import Job from "@/components/vacancy/Job";
import Form from "@/components/vacancy/Form";

export default function Cookies() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header
        className={`${styles.header} ${
          !isHeaderVisible ? styles.headerHidden : ""
        }`}
      >
        <Header />
      </header>

      {/* Vacancy Section */}
      <SectionVacancy />

      {/* Job Section */}
      <Job />

      {/* Job Section */}
      <Form />

      {/* Footer */}
      <Footer backgroundDark={true} />
    </div>
  );
}

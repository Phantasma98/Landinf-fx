"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Hero from "@/components/contacts/Hero";
import Statistic from "@/components/contacts/Statistic";
import Support from "@/components/contacts/Support";
import SectionForm from "@/components/vacancies/Form";
import Footer from "@/components/footer/Footer";

export default function Contacts() {
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

      {/* Hero Section */}
      <Hero />

      {/* Jobs Section */}
      <Statistic />

      {/* Recruitment Path */}
      <Support />

      {/* FORM Section */}
      <SectionForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

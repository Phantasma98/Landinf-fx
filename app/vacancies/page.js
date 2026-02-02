"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Hero from "@/components/vacancies/Hero";
import Job from "@/components/vacancies/Job";
import Recruit from "@/components/vacancies/Recruit";
import Faq from "@/components/vacancies/Faq";
import SectionForm from "@/components/vacancies/Form";
import Footer from "@/components/footer/Footer";

export default function Home() {
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
      <Job />

      {/* Recruitment Path */}
      <Recruit />

      {/* FAQ Section */}
      <Faq />

      {/* FORM Section */}
      <SectionForm />

      {/* Footer */}
      <Footer backgroundDark={true} />
    </div>
  );
}

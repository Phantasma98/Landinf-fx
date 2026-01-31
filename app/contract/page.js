"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Hero from "@/components/contract/Hero";
import About from "@/components/contract/About";
import Values from "@/components/contract/Values";
import Job from "@/components/contract/Job";
import Recruit from "@/components/contract/Recruit";
import Faq from "@/components/contract/Faq";
import SectionForm from "@/components/contract/SectionForm";
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

      {/* About Section */}
      <About />

      {/* Values Section */}
      <Values />

      {/* Jobs Section */}
      <Job />

      {/* Recruitment Path */}
      <Recruit />

      {/* FAQ Section */}
      <Faq />

      {/* FORM Section */}
      <SectionForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Hero from "@/components/about/Hero";
import About from "@/components/about/About";
import Statistic from "@/components/about/Statistic";
import Arsenal from "@/components/about/Arsenal";
import Commander from "@/components/about/Commander";
import Values from "@/components/about/Values";
import Faq from "@/components/about/Faq";
import SectionForm from "@/components/about/SectionForm";
import Footer from "@/components/footer/Footer";

export default function Main() {
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

      {/* Statistic Section */}
      <Statistic />

      {/* About Section */}
      <About />

      {/* FAQ Section */}
      <Faq />

      {/* Arsenal Section */}
      <Arsenal />

      {/* Commander Section */}
      <Commander />

      {/* Values Section */}
      <Values />

      {/* FORM Section */}
      <SectionForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

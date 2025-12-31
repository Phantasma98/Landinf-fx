"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.css";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Commander from "@/components/commander/Commander";
import Values from "@/components/values/Values";
import Job from "@/components/job/Job";
import Recruit from "@/components/recruit/Recruit";
import Support from "@/components/support/Support";
import Faq from "@/components/faq/Faq";
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

      {/* Commander Section */}
      <Commander />

      {/* Values Section */}
      <Values />

      {/* Jobs Section */}
      <Job />

      {/* Recruitment Path */}
      <Recruit />

      {/* Support Section */}
      <Support />

      {/* FAQ Section */}
      <Faq />

      {/* Footer */}
      <Footer />
    </div>
  );
}

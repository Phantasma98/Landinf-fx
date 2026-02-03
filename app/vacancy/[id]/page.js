"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { toast } from "react-hot-toast";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SectionVacancy from "@/components/vacancy/Vacancy";
import Job from "@/components/vacancy/Job";
import Form from "@/components/vacancy/Form";
import { customFetch } from "@/components/Functions";

export default function Vacancy({ params }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { id } = useParams();
  const [unit, setUnit] = useState();

  const fetchData = useCallback(async () => {
    try {
      await customFetch(
        `/api/vacancy/${id}`,
        (data) => {
          setUnit(data.unit || {});
        },
        (err) => {
          console.log(`API /api/vacancy/${id} error:`, err);
        },
      );
    } catch (error) {
      toast.error("Помилка серверу!");
    }
  }, [id]); // Dependencies for useCallback

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
    <>
      {unit ? (
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
          <SectionVacancy vacancy={unit} />

          {/* Job Section */}
          <Job />

          {/* Job Section */}
          <Form />

          {/* Footer */}
          <Footer backgroundDark={true} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

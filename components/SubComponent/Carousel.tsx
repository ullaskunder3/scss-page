"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.scss";

const Carousel = ({ images }:any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.slides}>
        {images.map((image: any, index:any) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </div>
        ))}
      </div>
      <button className={styles.prevBtn} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.nextBtn} onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;

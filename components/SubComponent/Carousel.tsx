import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.scss";
interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({ images, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images]);

  const startAutoPlay = useCallback(() => {
    if (autoPlay) {
      timerRef.current = setInterval(nextSlide, 3000);
    }
  }, [autoPlay, nextSlide]);

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
      return stopAutoPlay;
    } else {
      stopAutoPlay();
    }
  }, [autoPlay, startAutoPlay]);


  useEffect(() => {
    stopAutoPlay();
    startAutoPlay();
  }, [startAutoPlay]);

  return (
    <>
      <Image
        priority
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkso6pBwACGgEie2Im0gAAAABJRU5ErkJggg=="
        src={images[currentIndex]}
        fill
        style={{ objectFit: "cover" }}
        alt="hero image"
      />
      <div className={styles.gradientOverlay}></div>
      <button hidden={!autoPlay} className={styles.nextBtn} onClick={nextSlide}>
        <svg fill="#ffffff" height="100px" width="100px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>
      </button>
      <button hidden={!autoPlay} className={styles.prevBtn} onClick={prevSlide}>
        <svg fill="#ffffff" height="100px" width="100px" version="1.1" id="XMLID_54_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="previous"> <g> <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 "></polygon> </g> </g> </g></svg>
      </button>
    </>
  );
};
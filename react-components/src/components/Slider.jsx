import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/04/24135535/Sachin-Tendulkar-Biography-Early-Life-Family-Cricket-Career-Records-and-Legacy.png",
    "https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2023-07-13_at_01.53.40.webp?v=1689228938",
    "https://icecric.news/wp-content/uploads/2023/03/Virat-Kohli-1.webp",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slider-track">
        {slides.map((url, index) => (
          <div
            className="slide"
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;

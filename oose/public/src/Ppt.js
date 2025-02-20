import React, { useState } from "react";
import "./Ppt.css";

function Ppt() {
  const images = Array.from({ length: 10 }, (_, index) => `/images/image${index + 1}.jpg`);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < images.length ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
      <button className="next-btn" onClick={nextSlide}>&#10095;</button>

      {/* Dots for Navigation */}
      <div className="carousel-nav">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Ppt;

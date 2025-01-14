"use client";
import React, { useState, useEffect, useRef } from "react";

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

interface HeroProps {
  slides: SlideData[];
  autoPlayInterval?: number;
}

const Hero: React.FC<HeroProps> = ({
  slides,
  autoPlayInterval = 5000, // Default 5 seconds per slide
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      if (slides.length > 1) {
        timerRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, autoPlayInterval);
      }
    };

    startAutoPlay();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrentSlide(index);
    if (slides.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
            aria-hidden={index !== currentSlide}
          >
            <div className="hero-text-container">
              <h1 className="hero-title">
                {slide.title.startsWith("Dr.") ? (
                  <>
                    <span className="text-yellow">Dr.</span>
                    {slide.title.slice(3)}
                  </>
                ) : slide.title.includes("School") ? (
                  <>
                    <span className="text-yellow">School</span>
                    {slide.title.replace("School", "")}
                  </>
                ) : slide.title.includes("People's") ? (
                  <>
                    <span className="text-yellow">People&apos;s</span>
                    {slide.title.replace("People's", "")}
                  </>
                ) : (
                  slide.title
                )}
              </h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-button-container">
                <a href={slide.buttonLink} className="hero-button">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* Navigation Bullets */}
        <div className="hero-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`hero-nav-bullet ${
                index === currentSlide ? "active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hero-nav-arrow left"
          aria-label="Previous slide"
        >
          <span className="sr-only">Previous</span>
        </button>
        <button
          onClick={nextSlide}
          className="hero-nav-arrow right"
          aria-label="Next slide"
        >
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;

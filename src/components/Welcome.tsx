"use client";
import React from "react";
import Image from "next/image";

interface WelcomeProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrls: string[];
}

const Welcome: React.FC<WelcomeProps> = ({
  title,
  subtitle,
  description,
  imageUrls,
}) => {
  return (
    <section id="welcome" className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-card">
          <div className="welcome-content">
            <h1 className="welcome-title">{title}</h1>
            <h2 className="welcome-subtitle">{subtitle}</h2>
            <p className="welcome-description">{description}</p>
            <div className="image-slideshow">
              {imageUrls.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`A mesmerizing view ${index + 1}`}
                  width={300}
                  height={200}
                  className="slideshow-image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

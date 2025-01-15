"use client";
import React, { useState, useEffect } from "react";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <section id="welcome" className="welcome-section">
      <div className="welcome-container flex flex-col md:flex-row items-center">
        <div className="welcome-content md:w-1/2">
          <h1 className="welcome-title text-5xl font-extrabold mb-4">
            {title}
          </h1>
          <h2 className="welcome-subtitle text-3xl font-semibold text-yellow-500 mb-6">
            {subtitle}
          </h2>
          <p className="welcome-description text-lg text-gray-600 leading-relaxed mb-8">
            {description}
          </p>
          <button className="welcome-button px-6 py-3 bg-black text-white text-sm font-bold uppercase rounded hover:bg-gray-800 transition-colors">
            Read More
          </button>
        </div>
        <div className="welcome-image-wrapper md:w-1/2 flex justify-center">
          <div className="welcome-image-box border-4 border-yellow-500 p-2 rounded-lg">
            <Image
              src={imageUrls[currentImageIndex]}
              alt="Welcome image"
              width={500}
              height={300}
              className="welcome-image rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="welcome-footer text-gray-800 text-2xl font-semibold mt-12 text-center">
        30+ YEARS EXPERIENCE WORKING
      </div>
    </section>
  );
};

export default Welcome;

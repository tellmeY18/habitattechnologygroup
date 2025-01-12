import React from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import Navbar from "@/components/Nav";

const slides = [
  {
    id: 1,
    title: "Dr. G Shankar",
    subtitle:
      "Dr. G Shankar is dedicated at evolving the most cost effective and eco friendly designs that can guarantee sustainability.",
    buttonText: "READ MORE",
    buttonLink: "shankar.html",
    imageUrl: "slide1.jpg",
  },
  {
    id: 2,
    title: "School of Housing",
    subtitle: "A design and blend uniquely made for the Indian masses.",
    buttonText: "READ MORE",
    buttonLink: "#",
    imageUrl: "slide2.jpg",
  },
  {
    id: 3,
    title: "People's Movement",
    subtitle: "An initiative to help every individual find a roof for himself.",
    buttonText: "READ MORE",
    buttonLink: "#",
    imageUrl: "slide3.jpg",
  },
];

const welcomeContent = {
  title: "Welcome",
  subtitle: "We are Habitat Technology Group",
  description: `Established in 1987 in Kerala, Habitat is registered as a charitable society. It is totally committed to the concept of green and humane architecture. It has been recognized as a nodal agency to carry out developmental works under the decentralization process in Kerala Habitat is the largest non-governmental organization in the shelter sector in India committed to sustainable building solutions.`,
  imageUrls: ["pic1.jpg", "pic2.jpg", "pic3.jpg"], // Add your image URLs here
};

export default function Page() {
  return (
    <main className="pb-24">
      <Navbar /> {/* Adding the Navbar */}
      <Hero slides={slides} autoPlayInterval={5000} />
      <div className="flex flex-col pt-20 container mx-auto px-4 max-w-6xl">
        <section id="welcome" className="welcome-section">
          <div className="welcome-container">
            <div className="welcome-card">
              <div className="welcome-content">
                <h1 className="welcome-title">{welcomeContent.title}</h1>
                <h2 className="welcome-subtitle">{welcomeContent.subtitle}</h2>
                <p className="welcome-description">
                  {welcomeContent.description}
                </p>
                <div className="image-slideshow">
                  {welcomeContent.imageUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`Slideshow image ${index + 1}`}
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

        <section id="recent-projects" className="recent-projects-section">
          <div className="recent-projects-container">
            <div className="container mx-auto px-4">
              <h2 className="recent-projects-title">Recent Projects</h2>
              <div className="recent-projects-grid">
                {/* Add recent projects here */}
              </div>
            </div>
          </div>
        </section>

        <section id="snippets" className="snippets-section">
          <div className="snippets-container">
            <div className="container mx-auto px-4">
              <h2 className="snippets-title">Snippets</h2>
              <div className="snippets-grid">{/* Add snippets here */}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

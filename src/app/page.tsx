import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";

const slides = [
  {
    id: 1,
    title: "Dr. G Shankar",
    subtitle:
      "Dr. G Shankar is dedicated at evolving the most cost effective and eco friendly designs that can guarantee sustainability.",
    buttonText: "READ MORE",
    buttonLink: "shankar.html",
    imageUrl: "slide1.webp",
  },
  {
    id: 2,
    title: "School of Housing",
    subtitle: "A design and blend uniquely made for the Indian masses.",
    buttonText: "READ MORE",
    buttonLink: "#",
    imageUrl: "slide2.webp",
  },
  {
    id: 3,
    title: "People's Movement",
    subtitle: "An initiative to help every individual find a roof for himself.",
    buttonText: "READ MORE",
    buttonLink: "#",
    imageUrl: "slide3.webp",
  },
];

const welcomeContent = {
  title: "We are Habitat Technology Group",
  subtitle: "Established in 1987 in Kerala",
  description:
    "Habitat is registered as a charitable society. It is totally committed to the concept of green and humane architecture. It has been recognized as a nodal agency to carry out developmental works under the decentralization process in Kerala. Habitat is the largest non-governmental organization in the shelter sector in India committed to sustainable building solutions.",
  imageUrls: ["/pic1.webp", "/pic2.webp", "/pic3.webp"],
};

export default function Page() {
  return (
    <main className="pb-24">
      <Navbar />
      <Hero slides={slides} autoPlayInterval={5000} />
      <div className="flex flex-col pt-20 container mx-auto px-4 max-w-6xl">
        <Welcome
          title={welcomeContent.title}
          subtitle={welcomeContent.subtitle}
          description={welcomeContent.description}
          imageUrls={welcomeContent.imageUrls}
        />
      </div>
      <Footer />
    </main>
  );
}

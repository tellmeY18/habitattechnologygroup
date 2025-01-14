"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Youtube,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubMenu = (key: string) =>
    setOpenSubMenu((prev) => (prev === key ? null : key));

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Bar */}
      <div className="top-bar-wrapper">
        <div className="container mx-auto px-4">
          <div className="top-bar flex justify-between items-center">
            {/* Contact Info */}
            <div className="contact-info flex gap-6">
              <a
                href="tel:+914712344904"
                className="contact-link flex items-center gap-2"
              >
                <Phone size={16} />
                <span>(+91 471) 2344904</span>
              </a>
              <a
                href="mailto:habitat.technology@gmail.com"
                className="contact-link flex items-center gap-2"
              >
                <Mail size={16} />
                <span>habitat.technology@gmail.com</span>
              </a>
            </div>
            {/* Social Links */}
            <div className="social-links flex gap-4">
              <a
                href="https://www.facebook.com/habitattechnologygroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCwhpT-3M-LDoJdj2h94Wb5g"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`main-nav-wrapper ${isScrolled ? "sticky" : ""}`}>
        <div className="container mx-auto px-4">
          <nav className="main-nav flex items-center justify-between">
            {/* Logo */}
            <div className="logo-wrapper flex items-center gap-4">
              <Link href="/" className="logo-link">
                <Image
                  src="logo-dark.webp"
                  width={171}
                  height={49}
                  alt="Habitat Technology Group"
                  className="logo-image"
                />
              </Link>
              <span className="logo-slogan">
                <div className="highlighted-text">
                  People&apos;s Movement for Sustainable Architecture
                </div>
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="mobile-menu-button md:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation Menu */}
            <div className={`nav-menu-wrapper ${isOpen ? "open" : ""}`}>
              <button
                onClick={toggleMenu}
                className="close-button md:hidden"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
              <ul className="nav-menu flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item has-submenu">
                  <button
                    onClick={() => toggleSubMenu("about")}
                    className="nav-link submenu-trigger flex items-center gap-1"
                    aria-expanded={openSubMenu === "about"}
                  >
                    About Us
                    <ChevronDown size={16} />
                  </button>
                  <ul
                    className={`submenu ${openSubMenu === "about" ? "open" : ""}`}
                  >
                    <li>
                      <Link href="/shankar" className="submenu-link">
                        Dr. G Shankar
                      </Link>
                    </li>
                    <li>
                      <Link href="/mission_history" className="submenu-link">
                        Mission & History
                      </Link>
                    </li>
                    <li>
                      <Link href="/habitat_30" className="submenu-link">
                        Habitat@30
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" className="submenu-link">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="submenu-link">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/expertise" className="nav-link">
                    Expertise
                  </Link>
                </li>
                <li className="nav-item has-submenu">
                  <button
                    onClick={() => toggleSubMenu("projects")}
                    className="nav-link submenu-trigger flex items-center gap-1"
                    aria-expanded={openSubMenu === "projects"}
                  >
                    Projects
                    <ChevronDown size={16} />
                  </button>
                  <ul
                    className={`submenu ${openSubMenu === "projects" ? "open" : ""}`}
                  >
                    <li>
                      <Link href="/projects" className="submenu-link">
                        Completed/Ongoing/Upcoming
                      </Link>
                    </li>
                    <li>
                      <Link href="/kerala_floods" className="submenu-link">
                        Disaster Interventions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

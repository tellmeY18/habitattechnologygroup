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
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

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

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="top-bar-wrapper">
        <div className="container mx-auto px-4">
          <div className="top-bar">
            <div className="contact-info">
              <a href="tel:+914712344904" className="contact-link">
                <Phone size={16} />
                <span>(+91 471) 2344904</span>
              </a>
              <a
                href="mailto:habitat.technology@gmail.com"
                className="contact-link"
              >
                <Mail size={16} />
                <span>habitat.technology@gmail.com</span>
              </a>
            </div>
            <div className="social-links">
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

      <div className={`main-nav-wrapper ${isScrolled ? "sticky" : ""}`}>
        <div className="container mx-auto px-4">
          <nav className="main-nav">
            <div className="logo-wrapper">
              <Link href="/" className="logo-link">
                <Image
                  src="logo-dark.png"
                  width={171}
                  height={49}
                  alt="Habitat Technology Group"
                  className="logo-image"
                />
              </Link>
              <span className="logo-slogan">
                People&apos;s Movement for Sustainable Architecture
              </span>
            </div>

            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`nav-menu-wrapper ${isOpen ? "open" : ""}`}>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item has-submenu">
                  <button
                    onClick={() => toggleSubMenu("about")}
                    className="nav-link submenu-trigger"
                    aria-expanded={openSubMenus["about"]}
                  >
                    About Us
                    <ChevronDown size={16} />
                  </button>
                  <ul
                    className={`submenu ${openSubMenus["about"] ? "open" : ""}`}
                  >
                    <li>
                      <Link href="/shankar">Dr. G Shankar</Link>
                    </li>
                    <li>
                      <Link href="/mission_history">Mission & History</Link>
                    </li>
                    <li>
                      <Link href="/habitat_30">Habitat@30</Link>
                    </li>
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
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
                    className="nav-link submenu-trigger"
                    aria-expanded={openSubMenus["projects"]}
                  >
                    Projects
                    <ChevronDown size={16} />
                  </button>
                  <ul
                    className={`submenu ${openSubMenus["projects"] ? "open" : ""}`}
                  >
                    <li>
                      <Link href="/projects">Completed/Ongoing/Upcoming</Link>
                    </li>
                    <li>
                      <Link href="/kerala_floods">Disaster Interventions</Link>
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

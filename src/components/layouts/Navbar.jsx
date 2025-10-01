import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import TextType from "../ui/text-animations/TextType";
import { IconButton } from "@mui/material";

import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Services", href: "#services" },
  { id: 5, label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let current = "#home";

      for (const { href } of navLinks) {
        const section = document.querySelector(href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = href;
            break;
          }
        }
      }

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 font-poppins bg-gradient-to-br md:bg-gradient-to-r from-primary/95 to-secondary/75 backdrop-blur z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/application-logo.webp"
              alt="Application Logo"
              className="w-7 h-7"
            />
            <TextType
              text={[
                "Theo Wongkar",
                "useState(() => panic(), []);",
                "Happy coding!",
              ]}
              typingSpeed={75}
              pauseDuration={2500}
              showCursor={true}
              cursorCharacter="|"
              className="text-white text-lg font-bold"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <a
                  href={navLink.href}
                  onClick={() => setActiveLink(navLink.href)}
                  className={cn(
                    "text-white font-medium hover:text-primary transition-colors",
                    activeLink === navLink.href && "text-primary animate-pulse"
                  )}
                >
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Toggle mobile menu"
            onClick={() => setShowMenu(!showMenu)}
            className="md:!hidden !p-2 !bg-secondary/50 !text-white !rounded-md"
          >
            {showMenu ? <IoClose size={12} /> : <HiMenu size={12} />}
          </IconButton>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden mt-4">
            <ul className="md:hidden flex flex-col items-center gap-4">
              {navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <a
                    href={navLink.href}
                    onClick={() => {
                      setActiveLink(navLink.href);
                      setShowMenu(false);
                    }}
                    className={cn(
                      "text-white font-medium hover:text-primary transition-colors",
                      activeLink === navLink.href &&
                        "text-primary animate-pulse"
                    )}
                  >
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

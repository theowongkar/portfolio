import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const socials = [
  {
    id: 1,
    name: "Email",
    label: SiGmail,
    description: "theowongkar.tech@gmail.com",
    href: "mailto:theowongkar.tech@gmail.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    label: FaLinkedin,
    description: "in/theowongkar",
    href: "https://linkedin.com/in/theowongkar",
  },
  {
    id: 3,
    name: "GitHub",
    label: FaGithub,
    description: "theowongkar",
    href: "https://github.com/theowongkar",
  },
  {
    id: 4,
    name: "Instagram",
    label: AiFillInstagram,
    description: "@theowongkar",
    href: "https://instagram.com/theowongkar",
  },
  {
    id: 5,
    name: "TikTok",
    label: FaTiktok,
    description: "@theowongkar",
    href: "https://tiktok.com/@theowongkar",
  },
];

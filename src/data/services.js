import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Website Creation Services",
    category: {
      label: "Website",
      className: "bg-cyan-800",
    },
    description:
      "Website creation services (Landing Page, Company Profile/SME, School/Organization Website, Online Store, Government/Institution Website)",
    image: "/images/galery/pricelist-website.webp",
    actions: [
      {
        id: 1,
        name: "Price Lists",
        label: "Price Lists",
        href: "/files/pricelist-website.pdf",
        className: "!bg-red-900 !text-white",
      },
      {
        id: 2,
        name: "Order Now",
        label: "Order Now",
        href: "https://wa.me/085163546431",
        className: "!bg-green-900 !text-white",
      },
    ],
  },
  {
    id: 2,
    title: "Discord Server Creation Services",
    category: {
      label: "Discord",
      className: "bg-indigo-800",
    },
    description:
      "Discord server creation services (Public Communities, Schools/Organizations, Online Stores/Brands)",
    image: "/images/galery/pricelist-discord.webp",
    actions: [
      {
        id: 1,
        name: "Price Lists",
        label: "Price Lists",
        href: "/files/pricelist-discord.pdf",
        className: "!bg-red-900 !text-white",
      },
      {
        id: 2,
        name: "Order Now",
        label: "Order Now",
        href: "https://wa.me/085163546431",
        className: "!bg-green-900 !text-white",
      },
    ],
  },
  {
    id: 3,
    title: "Wusa Garden Nila Bioflok",
    category: {
      label: "Biofloc Tilapia",
      className: "bg-lime-800",
    },
    description:
      "Biofloc Tilapia Cultivation (Black & Red Tilapia, Ready-to-Spread Seeds, Consumption, Consultation & Mentoring)",
    image: "/images/galery/pricelist-wusa.webp",
    actions: [
      {
        id: 1,
        name: "Price Lists",
        label: "Price Lists",
        href: "/files/pricelist-wusa.pdf",
        className: "!bg-red-900 !text-white",
      },
      {
        id: 2,
        name: "Order Now",
        label: "Order Now",
        href: "https://wa.me/085163546431",
        className: "!bg-green-900 !text-white",
      },
    ],
  },
  {
    id: 4,
    title: "Official Kelas Daring",
    category: {
      label: "Learning Content",
      className: "bg-yellow-800",
    },
    description:
      "The most fun online learning place that discusses various tutorials, tips and tricks, simulations, and information packaged with easy-to-understand explanations.",
    image: "/images/galery/official-kelas-daring.webp",
    actions: [
      {
        id: 1,
        name: "Youtube",
        label: FaYoutube,
        href: "https://www.youtube.com/@officialkelasdaring",
        className: "!text-red-600",
      },
      {
        id: 2,
        name: "Instagram",
        label: AiFillInstagram,
        href: "https://www.instagram.com/officialkelasdaring",
        className: "!text-purple-600",
      },
      {
        id: 3,
        name: "TikTok",
        label: FaTiktok,
        href: "https://www.tiktok.com/@officialkelasdaring",
        className: "!text-white-600",
      },
      {
        id: 4,
        name: "Discord",
        label: FaDiscord,
        href: "https://discord.com/invite/zxQNmBnm6p",
        className: "!text-blue-600",
      },
    ],
  },
];

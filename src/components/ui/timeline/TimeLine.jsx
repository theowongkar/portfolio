"use client";

import { useRef, memo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ListItem = memo(function ListItem({ item }) {
  const { logo, title, subtitle, date, address, description } = item;

  return (
    <li className="relative mb-12 lg:mb-14 ps-16">
      {/* Icon */}
      <span
        className="absolute top-0 left-3 -translate-x-1/2 flex items-center justify-center
          w-10 h-10 lg:w-12 lg:h-12
          ring-4 ring-primary rounded-full shadow-[0_0_20px] shadow-accent overflow-hidden"
      >
        <img
          src={logo}
          alt={`Logo ${title}`}
          className="w-full h-full object-cover transition duration-300 hover:brightness-75"
        />
      </span>

      {/* Content */}
      <div className="text-sm leading-relaxed">
        <h3 className="text-base font-semibold">{title}</h3>
        <h4>{subtitle}</h4>
        <time className="block text-gray-300">{date}</time>
        <p className="text-gray-300">{address}</p>
        {description && <p className="mt-2">{description}</p>}
      </div>
    </li>
  );
});

const TimeLine = memo(function TimeLine({ lists }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.9"],
  });

  const progressLine = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative ps-4">
      {/* Static background line */}
      <div className="absolute top-0 left-6 h-full w-1 bg-gray-600 rounded-full" />

      {/* Animated progress line */}
      <motion.div
        style={{ scaleY: progressLine }}
        className="absolute top-0 left-6 h-full w-1 origin-top bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)]"
      />

      {/* Items */}
      <ul className="relative">
        {lists.map((item) => (
          <ListItem key={item.title + item.date} item={item} />
        ))}
      </ul>
    </div>
  );
});

export default TimeLine;

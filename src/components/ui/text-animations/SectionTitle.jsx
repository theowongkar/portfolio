import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, className }) {
  return (
    <div className={`mb-10 text-center ${className || ""}`}>
      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl mb-1 font-semibold"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--color-primary), var(--color-accent), #ffffff, var(--color-primary))",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textShadow:
            "0 0 8px var(--color-accent), 0 0 16px var(--color-primary)",
          willChange: "background-position, transform",
        }}
        animate={{
          backgroundPositionX: ["0%", "200%"],
        }}
        transition={{
          backgroundPositionX: {
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {subtitle}
      </motion.p>

      {/* Title */}
      <h2
        className="mb-4 text-2xl md:text-4xl font-bold"
        style={{
          color: "#fff",
          textShadow: `
            0 0 4px #aed60c,
            0 0 6px #ffd700,
            0 0 12px #fff,
            0 0 20px #fff
          `,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

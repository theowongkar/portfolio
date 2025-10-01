import { socials } from "@/data/socials";

const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Services", href: "#services" },
  { id: 5, label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer>
      {/* Slogan */}
      <section className="font-pacifico bg-accent text-secondary">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <h2>We speak in code, but deliver in style.</h2>
          <div className="absolute top-0 right-0 bg-accent rounded-full">
            <img
              src="/images/footer-logo.webp"
              alt="Footer Logo"
              className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"
            />
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="font-poppins bg-primary text-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tagline */}
            <div>
              <h2 className="mb-3 text-2xl md:text-3xl font-bold">
                Theo Wongkar
              </h2>
              <p className="text-sm leading-relaxed">
                I'm Theoterra Pitray Wongkar, a professional with expertise in
                web development, network engineering, digital marketing
                management, and creative content creation. I also run a
                biotechnology-based aquaculture business.
              </p>
            </div>

            {/* Quick Links */}
            <nav
              className="md:justify-self-center"
              aria-label="Footer navigation"
            >
              <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((navLink) => (
                  <li key={navLink.id}>
                    <a
                      href={navLink.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {navLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Lets Connect */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Let's Connect</h3>
              <div className="flex gap-2">
                {socials.map((social) => {
                  const Icon = social.label;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="p-2 bg-secondary rounded-full hover:bg-accent transition group"
                    >
                      <Icon
                        size={22}
                        className="text-white group-hover:text-secondary"
                      />
                    </a>
                  );
                })}
              </div>
              <address className="mt-2 not-italic text-sm">
                Minahasa, North Sulawesi, Indonesia
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="bg-primary text-secondary border-t border-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} All rights reserved — Built with
            ❤️ by <span className="font-semibold">Theo Wongkar</span>
          </p>
        </div>
      </section>
    </footer>
  );
}

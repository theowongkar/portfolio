import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import RotatingText from "../components/ui/text-animations/RotatingText";
import ElectricBorder from "../components/ui/animations/ElectricBorder";
import ProfileCard from "../components/ui/cards/ProfileCard";
import ScrollVelocity from "../components/ui/text-animations/ScrollVelocity";
import SectionTitle from "../components/ui/text-animations/SectionTitle";
import TimeLine from "../components/ui/timeline/TimeLine";
import CustomCard from "../components/ui/cards/CustomCard";
import GridCard from "../components/ui/cards/GridCard";
import Lanyard from "../components/ui/cards/Lanyard";
import CircularText from "../components/ui/text-animations/CircularText";
import Magnet from "../components/ui/animations/Magnet";
import TextType from "../components/ui/text-animations/TextType";

import { jobTitles } from "@/data/job-titles";
import { socials } from "@/data/socials";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

import { MdPushPin } from "react-icons/md";
import { Button } from "@mui/material";

const galeryItems = [
  `/images/galery/kmi-awards.webp`,
  `/images/galery/msm-intern.webp`,
  `/images/galery/absensi-polda-sulut.webp`,
  `/images/galery/arter-minut.webp`,
  `/images/galery/kmi-expo.webp`,
  `/images/galery/digital-marketing.webp`,
  `/images/galery/discord.webp`,
  `/images/galery/inspeksi-alat-berat.webp`,
  `/images/galery/klabat.webp`,
  `/images/galery/family.webp`,
  `/images/galery/elapor-dp3a-sulut.webp`,
  `/images/galery/wusa-kmi-award.webp`,
  `/images/galery/koperasi-toka-tindung.webp`,
  `/images/galery/notulen-bps-sulut.webp`,
  `/images/galery/promosi-bppd-sulut.webp`,
  `/images/galery/sidang-skripsi.webp`,
  `/images/galery/sig-gmahk-kamanga.webp`,
  `/images/galery/soputan.webp`,
  `/images/galery/stok-bps-sulut.webp`,
  `/images/galery/pkm-mapalus-siaga.webp`,
  `/images/galery/wusa-multimart.webp`,
  `/images/galery/alat-gunung.webp`,
  `/images/galery/3rd-floor.webp`,
  `/images/galery/babyjcd-icecream.webp`,
  `/images/galery/pricelist-website.webp`,
  `/images/galery/pricelist-discord.webp`,
  `/images/galery/pricelist-wusa.webp`,
  `/images/galery/official-kelas-daring.webp`,
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main */}
      <main className="flex-1">
        {/* Home Section */}
        <section id="home" className="font-inter bg-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              {/* Intro */}
              <div className="order-2 md:order-1 max-w-xl md:max-w-sm lg:max-w-xl">
                {/* Title & Subtitle */}
                <div className="mb-3 flex flex-col gap-2">
                  <h1 className="text-2xl lg:text-4xl text-center md:text-left font-bold">
                    Hi I'm Theo Wongkar
                  </h1>
                  <div className="flex justify-center md:justify-start items-center gap-2">
                    <span className="text-2xl lg:text-4xl font-bold">
                      Creative
                    </span>
                    <RotatingText
                      texts={jobTitles}
                      mainClassName="px-3 bg-primary text-secondary text-sm lg:text-base font-bold overflow-hidden py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </div>

                {/* Paragraph */}
                <p className="text-gray-200 text-center md:text-left leading-relaxed">
                  Welcome to my personal portfolio! This website showcases
                  information about me, my skills, education, work experience,
                  projects, and services.
                </p>

                {/* Lets Connect */}
                <div className="flex justify-center md:justify-start gap-3 mt-5">
                  {socials.map((social) => {
                    const Icon = social.label;
                    return (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="p-2 bg-gray-200 rounded-lg hover:bg-accent transition"
                      >
                        <Icon size={22} className="text-secondary" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Profile Card */}
              <div className="order-1 md:order-2 max-w-[18rem] lg:max-w-lg">
                <ElectricBorder
                  color="#aed60c"
                  speed={0.5}
                  chaos={0.5}
                  thickness={1}
                  style={{ borderRadius: 16, padding: 5 }}
                >
                  <ProfileCard
                    name="Theoterra Wongkar"
                    title={jobTitles[0]}
                    handle="theowongkar"
                    status={true}
                  />
                </ElectricBorder>
              </div>
            </div>
          </div>

          {/* Scroll Velocity */}
          <div className="pb-10 md:pb-12 lg:pb-14">
            <ScrollVelocity
              texts={["I'm Theo Wongkar", "Hello World!", "HTML CSS JS TS PHP"]}
              velocity={50}
              numCopies={12}
              className="custom-scroll-text text-3xl"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="font-inter bg-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
            {/* Title */}
            <SectionTitle title="Get To Know Me" subtitle="About" />

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-9 items-start gap-10">
              <div className="order-1 md:order-2 md:col-span-5 space-y-10">
                <div className="p-5 border border-gray-700 rounded-2xl shadow-md">
                  <h2 className="inline-block mb-4 px-3 py-1 bg-primary text-black text-sm font-bold rounded-xl">
                    About Me
                  </h2>
                  <p>
                    I'm Theoterra Pitray Wongkar, a professional with expertise
                    in web development, network engineering, digital marketing
                    management, and creative content creation. I also run a
                    biotechnology-based aquaculture business. The combination of
                    technical skills and an entrepreneurial spirit makes me
                    adaptable, collaborative, and always ready to face
                    challenges across industries.
                  </p>
                </div>

                <div className="p-5 border border-gray-700 rounded-2xl shadow-md">
                  <h2 className="inline-block mb-4 px-3 py-1 bg-primary text-black text-sm font-bold rounded-xl">
                    Education
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <div className="text-start">
                        <h3 className="font-semibold">
                          Universitas Sam Ratulangi
                        </h3>
                        <p className="text-gray-300">
                          Bachelor of Informatics Engineering Study Program
                        </p>
                      </div>
                      <div className="text-end">
                        <p>📍 Manado, North Sulawesi</p>
                        <time className="text-gray-300">2021 – 2025</time>
                      </div>
                    </li>
                    <li className="flex justify-between">
                      <div className="text-start">
                        <h3 className="font-semibold">SMKN 6</h3>
                        <p className="text-gray-300">
                          Computer and Network Engineering
                        </p>
                      </div>
                      <div className="text-end">
                        <p>📍 Balikpapan, East Kalimantan</p>
                        <time className="text-gray-300">2018 – 2021</time>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-5 border border-gray-700 rounded-2xl shadow-md">
                  <h2 className="inline-block mb-4 px-3 py-1 bg-primary text-black text-sm font-bold rounded-xl">
                    Core Competencies
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill) => (
                      <img key={skill.id} src={skill.src} alt={skill.name} />
                    ))}
                  </div>
                </div>

                <div className="p-5 border border-gray-700 rounded-2xl shadow-md">
                  <h2 className="inline-block mb-4 px-3 py-1 bg-primary text-black text-sm font-bold rounded-xl">
                    Extras
                  </h2>
                  <ul className="list-disc list-outside ml-5 space-y-3">
                    <li>
                      <h3 className="font-semibold">Organization:</h3>
                      <ul className="list-[style-type:circle] list-outside ml-5">
                        <li className="text-gray-300">
                          Himpunan Mahasiswa Elektro (Member)
                        </li>
                        <li className="text-gray-300">
                          UKM Kewirausahaan FT Unsrat (Treasurer)
                        </li>
                        <li className="text-gray-300">
                          UKM Kewirausahaan FT Unsrat (Coordinator)
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Language:</h3>
                      <ul className="list-[style-type:circle] list-outside ml-5">
                        <li className="text-gray-300">Indonesian (Fluent)</li>
                        <li className="text-gray-300">English (Basic)</li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="font-semibold">Certification:</h3>
                      <ul className="list-[style-type:circle] list-outside ml-5">
                        <li className="text-gray-300">
                          Udemy Sertifikat Penyelesaian HTML, CSS, dan
                          JavaScript: Pemula Sampai Mahir
                        </li>
                        <li className="text-gray-300">
                          Udemy Sertifikat Penyelesaian Git: Pemula Sampai Mahir
                        </li>
                        <li className="text-gray-300">
                          Kewirausahaan Digital Dasar Digital Entrepreneurship
                          Academy Digital Talent Scholarship 2024
                        </li>
                        <li className="text-gray-300">
                          Certificate Of Aprenticeship PT. Meares Soputan Mining
                          2024
                        </li>
                        <li className="text-gray-300">
                          Kewirausahaan Mahasiswa Indonesia (KMI) Expo XIV 2023
                        </li>
                        <li className="text-gray-300">
                          Indonesian Student Entrepreneur Camp (ISEC) 2023
                        </li>
                        <li className="text-gray-300">
                          Solo Learn C++ Course Certificate 2021
                        </li>
                        <li className="text-gray-300">
                          Sertifikat Praktek Kerja Nyata Telkom Indonesia 2020
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline */}
              <div className="order-2 md:order-1 md:col-span-4">
                <h2 className="inline-block mb-8 px-3 py-1 bg-primary text-black text-sm font-bold rounded-xl">
                  Work Experience
                </h2>
                <TimeLine lists={experiences} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="font-inter bg-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
            {/* Title */}
            <SectionTitle title="What I've Built" subtitle="Projects" />

            {/* Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects
                .slice()
                .reverse()
                .map((project) => (
                  <CustomCard
                    key={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    actions={project.actions}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="font-inter bg-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
            {/* Title */}
            <SectionTitle title="How I Can Help" subtitle="Services" />

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <CustomCard
                  key={service.id}
                  title={service.title}
                  category={service.category}
                  description={service.description}
                  image={service.image}
                  actions={service.actions}
                />
              ))}
            </div>

            {/* Read More */}
            <div className="flex items-center justify-center mt-10">
              <div className="flex-grow border-y border-primary"></div>
              <Button
                href="/services"
                variant="contained"
                color="success"
                className="!mx-4 w-52 !bg-gradient-to-r !from-primary/60 !to-secondary/40 !hover:bg-green-900"
              >
                <TextType
                  text={["Read More...", "Live Demo..."]}
                  typingSpeed={75}
                  pauseDuration={2500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </Button>
              <div className="flex-grow border-y border-primary"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="font-inter bg-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
            {/* Title */}
            <SectionTitle title="Get In Touch" subtitle="Contact" />

            <Magnet padding={50} disabled={false} magnetStrength={40}>
              <div className="flex flex-wrap justify-center gap-8 pb-5">
                {socials.map((social) => {
                  const Icon = social.label;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      aria-label={social.name}
                      className="relative flex items-center justify-between p-5 w-80 border border-gray-700 rounded-2xl shadow-md hover:border-gray-300 transition-colors ease-in group"
                    >
                      <div>
                        <h2 className="text-lg font-semibold">{social.name}</h2>
                        <span className="absolute -top-3 -right-3 p-2 bg-accent text-secondary rounded-full group-hover:animate-bounce">
                          <Icon size={20} />
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">
                        {social.description}
                      </p>
                    </a>
                  );
                })}
              </div>
            </Magnet>
          </div>

          <div className="relative">
            {/* GridCard */}
            <GridCard items={galeryItems} />

            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/40 z-5"></div>

            {/* Pin */}
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 p-2 bg-accent rounded-lg z-20">
              <MdPushPin className="size-4 sm:size-8 md:size-9 text-secondary" />
            </span>

            {/* Circular Text */}
            <span className="absolute -top-15 right-5 -translate-y-0 z-20 overflow-hidden">
              <CircularText
                text="IAM*THEOWONGKAR*"
                onHover="goBonkers"
                spinDuration={30}
              />
            </span>

            {/* Lanyard */}
            <div className="absolute inset-0 z-10">
              <Lanyard position={[0, 0, 17]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

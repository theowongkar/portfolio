import SectionTitle from "../../components/ui/text-animations/SectionTitle";
import PixelBlast from "../../components/ui/backgrounds/PixelBlast";

import { Button, Tooltip } from "@mui/material";

export default function Index() {
  const services = [
    {
      id: 1,
      title: "Jasa Pembuatan Website",
      description:
        "Layanan pembuatan situs web (Landing Page, Profil Perusahaan/UKM, Situs Web Sekolah/Organisasi, Toko Online, Situs Web Pemerintah/Lembaga).",
      image: "/images/galery/pricelist-website.webp",
      actions: [
        {
          id: 1,
          label: "Daftar Harga",
          href: "/files/pricelist-website.pdf",
        },
        {
          id: 2,
          label: "Pemesanan",
          href: "https://wa.me/085163546431",
        },
      ],
      demos: [
        {
          id: 1,
          title:
            "Cocok untuk personal branding, CV online, seniman, fotografer, freelancer, dll.",
          label: "Website Pribadi / Portofolio",
          href: "/services/personal-website",
        },
        {
          id: 2,
          title:
            "Cocok untuk bisnis kecil-menengah, usaha jasa, atau toko offline.",
          label: "Company Profile / UMKM",
          href: "#",
        },
        {
          id: 3,
          title: "Cocok untuk jualan produk secara online.",
          label: "E-Commerce / Toko Online",
          href: "#",
        },
        {
          id: 4,
          title:
            "Cocok untuk sekolah, kampus, lembaga pendidikan untuk menampilkan profil, jurusan, guru, dan berita.",
          label: "Web Sekolah / Lembaga Pendidikan",
          href: "#",
        },
        {
          id: 5,
          title:
            "Cocok untuk Untuk profil desa, data penduduk, pengumuman, dan layanan publik.",
          label: "Web Pemerintah / Instansi",
          href: "#",
        },
        {
          id: 6,
          title:
            "Cocok untuk proyek dengan kebutuhan khusus. Misal Sistem Pelaporan, Sistem Booking, Sistem Absensi Karyawan, Sistem Manajemen Keuangan, dll.",
          label: "Web Custom",
          href: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Jasa Pembuatan Server Discord",
      description:
        "Layanan pembuatan server Discord (Komunitas Publik, Sekolah/Organisasi, Toko/Merek Daring).",
      image: "/images/galery/pricelist-discord.webp",
      actions: [
        {
          id: 1,
          label: "Daftar Harga",
          href: "/files/pricelist-discord.pdf",
        },
        {
          id: 2,
          label: "Pemesanan",
          href: "https://wa.me/085163546431",
        },
      ],
    },
    {
      id: 3,
      title: "Wusa Garden Nila Bioflok",
      description:
        "Budidaya Ikan Nila Bioflok (Ikan Nila Hitam & Merah, Benih Siap Tebar, Konsumsi, Konsultasi & Pendampingan).",
      image: "/images/galery/pricelist-wusa.webp",
      actions: [
        {
          id: 1,
          label: "Daftar Harga",
          href: "/files/pricelist-wusa.pdf",
        },
        {
          id: 2,
          label: "Pemesanan",
          href: "https://wa.me/085163546431",
        },
      ],
    },
    {
      id: 4,
      title: "Official Kelas Daring",
      description:
        "Tempat belajar daring paling menyenangkan yang membahas berbagai tutorial, tips dan trik, simulasi, dan informasi yang dikemas dengan penjelasan yang mudah dipahami.",
      image: "/images/galery/official-kelas-daring.webp",
      actions: [
        {
          id: 1,
          label: "Youtube",
          href: "https://www.youtube.com/@officialkelasdaring",
        },
        {
          id: 2,
          label: "Instagram",
          href: "https://www.instagram.com/officialkelasdaring",
        },
        {
          id: 3,
          label: "TikTok",
          href: "https://www.tiktok.com/@officialkelasdaring",
        },
        {
          id: 4,
          label: "Discord",
          href: "https://discord.com/invite/zxQNmBnm6p",
        },
      ],
    },
  ];

  return (
    <main className="relative">
      {/* Background PixelBlast */}
      <div className="absolute inset-0 z-10">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#6F7FA0"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Services Section */}
      <section
        id="home"
        className="relative font-inter bg-secondary text-white min-h-screen"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
          {/* Header */}
          <header className="mb-10">
            <SectionTitle
              title="Layanan & Dukungan"
              subtitle="Percayakan Pada Kami"
            />

            <p className="max-w-xl mx-auto text-gray-200 text-center leading-relaxed">
              Mau bisnis keliatan keren dan komunitas makin rame? Kami bisa
              bantu kamu bikin website kece, server Discord siap pakai, bahkan
              suplai ikan nila segar langsung dari kolam! 🐟
              <span className="block my-5 text-white">
                Yuk, mulai dari digital sampai dapur semua bisa bareng kami! 🚀
              </span>
            </p>

            <div className="flex items-center justify-center">
              <Button
                href="/"
                variant="contained"
                color="success"
                className="w-52 bg-gradient-to-r from-primary/60 to-secondary/40 hover:bg-green-900 z-20"
              >
                Kembali
              </Button>
            </div>
          </header>

          {/* Konten */}
          <div className="flex flex-col items-center gap-5">
            {services.map((service) => {
              return (
                <article
                  key={service.id}
                  className="w-full max-w-2xl p-5 bg-secondary border border-gray-700 rounded-xl shadow-md overflow-hidden z-20"
                >
                  <h2 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-300">{service.description}</p>

                  <div className="flex flex-col md:flex-row justify-between gap-5 mt-5">
                    <div className="w-full md:w-5/6">
                      <h3 className="mb-1 font-medium">Informasi:</h3>
                      <ul className="ml-5 list-disc list-outside">
                        {service.actions.map((action) => {
                          return (
                            <li key={action.id}>
                              <a
                                href={action.href}
                                target="_blank"
                                className="text-blue-300 hover:text-blue-400"
                              >
                                {action.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {service.demos && (
                      <div className="w-full">
                        <h3 className="mb-1 font-medium">Demo Aplikasi:</h3>
                        <ul className="ml-5 list-disc list-outside">
                          {service.demos.map((demo) => {
                            return (
                              <li key={demo.id}>
                                <Tooltip
                                  title={demo.title}
                                  arrow
                                  disableInteractive
                                >
                                  <a
                                    href={demo.href}
                                    target="_blank"
                                    className="text-blue-300 hover:text-blue-400"
                                  >
                                    {demo.label}
                                  </a>
                                </Tooltip>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

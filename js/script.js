lottie.loadAnimation({
  container: document.getElementById("lottie-anim"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets2.lottiefiles.com/packages/lf20_jtbfg2nb.json",
});

function navbar() {
  return {
    open: false,
    active: "beranda",
    menu: [
      { id: "beranda", label: "Beranda" },
      { id: "tentang", label: "Tentang" },
      { id: "pengalaman", label: "Pengalaman" },
      { id: "pendidikan", label: "Pendidikan" },
    ],
    initObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.active = entry.target.id;
          }
        });
      }, options);

      this.menu.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      });
    },
  };
}

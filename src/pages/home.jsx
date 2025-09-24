import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main */}
      <main className="flex-1"></main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

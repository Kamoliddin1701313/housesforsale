import "aos/dist/aos.css"; // AOS uchun CSS fayl
import AOS from "aos"; // AOS kutubxonasini import qilish
import "aos/dist/aos.css"; // AOS uchun CSS fayl
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Layouts() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      offset: 200,
    });

    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layouts;

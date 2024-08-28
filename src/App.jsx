import "./App.css";
import Barchayangiliklar from "./app/components/Barchayangiliklar";
import BizningLoyihalarimiz from "./app/components/BizningLoyihalarimiz";
import Boglanish from "./app/components/Bog'lanish";
import Footer from "./app/components/footer/Footer";
import Hamkorlar from "./app/components/Hamkorlar";
import Home_img from "./app/components/Home_img";
import Murojat from "./app/components/Murojat";
import Navbar from "./app/components/navbar/Navbar";
import Xizmatlar from "./app/components/Xizmatlar";

// AOS kutubxonasi

import "aos/dist/aos.css"; // AOS uchun CSS fayl
import AOS from "aos"; // AOS kutubxonasini import qilish
import "aos/dist/aos.css"; // AOS uchun CSS fayl
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        offset: 200,
    });

},[])

  return (
    <div>
      <Navbar />
      <Xizmatlar />
      <Home_img />
      <BizningLoyihalarimiz />
      <Barchayangiliklar />
      <Hamkorlar />
      <Boglanish />
      <Murojat />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./app/components/footer/Footer";
import Navbar from "./app/components/navbar/Navbar";
import LayoutComponents from "./app/layout/LayoutComponents";

// AOS kutubxonasi

function App() {
  return (
    <div>
      <Navbar />
      <LayoutComponents />
      <Footer />
    </div>
  );
}

export default App;

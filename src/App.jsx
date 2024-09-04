import "./App.css";
import Layouts from "./app/layout/Layouts";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./app/components/MainLayout";
import BizningLoyihalarimiz from "./app/components/BizningLoyihalarimiz";
import AtayevBahodirHaqida from "./app/components/AtayevBahodirHaqida";

// AOS kutubxonasi

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layouts />}>
          <Route path="/" element={<MainLayout />} />
          <Route
            path="/bizningLoyihalarimiz"
            element={<BizningLoyihalarimiz />}
          />
          <Route
            path="/atayevBahodirHaqida"
            element={<AtayevBahodirHaqida />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

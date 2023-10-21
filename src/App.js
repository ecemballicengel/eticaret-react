import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import UrunList from "./components/UrunList";
import KategoriList from "./components/KategoriList";
import Sepet from "./components/Sepet";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<UrunList />}></Route>
        <Route path="/kategoriler" element={<KategoriList />}></Route>
        <Route path="/sepet" element={<Sepet />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Event from "./pages/Event";
import SyaratKet from "./pages/SyaratKet";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Sidebar from "./components/Sidebar";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProduct from "./admin/AdminProduct";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Syaratket" element={<SyaratKet />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminProduct" element={<AdminProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;

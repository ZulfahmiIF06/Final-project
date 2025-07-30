import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Event from "./pages/Event";
import SyaratKet from "./pages/SyaratKet";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";
import { Image } from "react-bootstrap";
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
        <Route path="/" Component={Homepage} />
        <Route path="/Destination" Component={Destination} />
        <Route path="/Event" Component={Event} />
        <Route path="/Syaratket" Component={SyaratKet} />
        <Route path="/Product" Component={Product} />
        <Route path="/Cart" Component={Cart} />
        <Route path="/Checkout" Component={Checkout} />
  
      </Routes>

      <Routes>
        <Route path="/Sidebar" Component={Sidebar} />
        <Route path="/AdminDashboard" Component={AdminDashboard} />
              <Route path="/AdminProduct" Component={AdminProduct} />
           <Route path="/AddProduct" Component={AddProduct} />   
      </Routes>
    </div>
  );
}

export default App;

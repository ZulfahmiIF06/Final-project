import React from 'react'
import { FaTachometerAlt, FaBox, FaList, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/AdminDashboard"><FaTachometerAlt /> <span>Dashboard</span></Link>
        </li>
        <li>
          <Link to="/AdminProduct"><FaBox /> <span>Produk</span></Link>
        </li>
        <li>
          <Link to="/kategori"><FaList /> <span>Kategori</span></Link>
        </li>
        <li>
          <Link to="/pesanan"><FaShoppingCart /> <span>Pesanan</span></Link>
        </li>
        <li>
          <Link to="/pengguna"><FaUsers /> <span>Pengguna</span></Link>
        </li>
        <li>
          <Link to="/pendapatan"><FaChartLine /> <span>Total Pendapatan</span></Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
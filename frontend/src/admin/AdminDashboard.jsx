import React from "react";
import Sidebar from "../components/Sidebar";
import {
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaMoneyBillWave,
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="Dashboardkonten">
        <h1 className="DashboardTitle">Admin Indo Tourism</h1>
        <div className="DashboardCards">
          <div className="DashboardCard">
            <FaBox className="DashboardIcon" />
            <h2>Produk</h2>
            <p>Jumlah Produk: 120</p>
          </div>
          <div className="DashboardCard">
            <FaUsers className="DashboardIcon" />
            <h2>Pengguna</h2>
            <p>Jumlah Pengguna: 350</p>
          </div>
          <div className="DashboardCard">
            <FaShoppingCart className="DashboardIcon" />
            <h2>Pesanan</h2>
            <p>Total Pesanan: 200</p>
          </div>
          <div className="DashboardCard">
            <FaMoneyBillWave className="DashboardIcon" />
            <h2>Total Pendapatan</h2>
            <p>Total Pendapatan: $5000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

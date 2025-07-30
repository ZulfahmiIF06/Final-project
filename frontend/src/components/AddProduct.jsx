import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";

const AddProduct = () => {
  const navigate = useNavigate();

  const [npm, setNpm] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [kategori, setKategori] = useState("");

  // Fungsi submit form
  const addData = async (e) => {
    e.preventDefault();
    try {

      await axios.post("http://localhost:3000/product/addData", {
        npm,
        nama,
        kelas,
        kategori,
      });

      // Setelah berhasil simpan, arahkan ke halaman AdminProduct
      navigate("/AdminProduct");
    } catch (error) {
      console.error("Gagal menambahkan produk:", error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Tambah Produk</h2>
      <form onSubmit={addData} className="add-product-form">
        <label>
          Harga:
          <input
            type="text"
            name="npm"
            value={npm}
            onChange={(e) => setNpm(e.target.value)}
            required
          />
        </label>
        <label>
          Nama:
          <input
            type="text"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </label>
                <label>
          Kategori:
          <input
            type="text"
            name="nama"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            required
          />
        </label>
        <label>
          Deskripsi:
          <textarea
            name="kelas"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Simpan Produk
        </button>
        <button type="submit" onClick={()=> navigate("/AdminProduct")} className="submit-btn ">
          kembali
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

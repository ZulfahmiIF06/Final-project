import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import axios from 'axios';

const AdminProduct = () => {
  const [products, setProducts] = useState([]);

  // Get data
  const getData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/product/getData');
      setProducts(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Delete data
  const deleteData = async (id) => {
    try {
      if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
        await axios.delete(`http://localhost:3000/product/deleteData/${id}`);
        getData(); // refresh data
      }
    } catch (error) {
      console.error("Gagal menghapus produk:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className='adminproductkonten'>
        <main className="product-page">
          <h1 className='text-dark'>Daftar Produk</h1>
          <Link to="/AddProduct">
            <button className="btn-add-product">+ Tambah Produk</button>
          </Link>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Harga</th>
                <th>Nama Produk</th>
                <th>Deskripsi</th>
                <th>kategori</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((data, index) => (
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>{data.npm}</td>
                  <td>{data.nama}</td>
                  <td>{data.kelas}</td>
                  <td>{data.kategori}</td>
                  <td>
                    <button>Edit</button>{' '}
                    <button onClick={() => deleteData(data._id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default AdminProduct;

import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Image, Button } from 'react-bootstrap';
import gambar1 from '../assets/img/17 Top Tours in Bali_ A Guide To The Best….jpeg'
import gambar2 from '../assets/img/bali.jpeg'
import gambar3 from '../assets/img/fstvl 1.jpeg'

const raftingImages = [
  gambar1,
  gambar2,
  gambar3,
];

const ProductRafting = () => {
  const [mainImage, setMainImage] = useState(raftingImages[0]);

  return (
     <div className=" productdetail container my-5 product-detail">
        <Row>
          <Col md={7}>
            <Image src={mainImage} fluid className="main-image" />
            <div className="d-flex justify-content-center mt-3">
              {raftingImages.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                  rounded
                />
              ))}
            </div>
            <div className="image-counter text-end pe-2">1 / 3</div>
          </Col>

          <Col md={5}>
            <div className="breadcrumb">
              Home » Produk »  
            </div>
            <h2 className="product-title">Paket Rafting Sungai Elo</h2>
            <div className="meta">👁️ 416 Dilihat</div>
            <h3 className="price">Rp1.250.000</h3>
            <p className="description">
              Rafting yang aman untuk pemula karena berada pada tingkat II-III.
              Cocok juga bagi Anda yang tidak bisa berenang, karena arus yang
              tidak begitu deras. Harga untuk menyewa 1 boat dan dapat menampung
              4 orang.
            </p>
            <Button variant="success" className="w-100 btn-whatsapp">
              💬 Beli Lewat WhatsApp
            </Button>
          </Col>
        </Row>
      </div>
  );
};

export default ProductRafting;

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import "animate.css";
import { Container, Row, Col } from "react-bootstrap";
import { PaketTerbaik } from "../data/index";
import Event from "../components/EvenComponent";
import Product from "../pages/Product"
import Navbar from "../components/NavbarComponent";
import Footer from "../components/FooterComponent";

const HomePage = () => {
  const [showTentang, setShowTentang] = useState(false);

  useEffect(() => {
    // Trigger animasi fade-in TENTANG setelah mount
    setTimeout(() => setShowTentang(true), 200);
  }, []);

  return (
    <>
    <Navbar></Navbar>
       <div className="homepage">
      {/*jumbotron */}
      <header className="w-100 min-vh-100 ">
        <section className="hero">
          <div className="hero-content ">
            <h1 class="animate__animated animate__backInLeft ">
              Explore with Heart, Travel Indonesia Smart
            </h1>
            <p class="animate__animated animate__backInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fugit aperiam iste repellendus ducimus nam!
            </p>
            <div className="hero-buttons">
              <button className="btn primary animate__animated animate__backInDown">
                Lihat Destinasi
              </button>
              <button className="btn outline animate__animated animate__backInRight">
                Lihat Promo
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper animate__animated animate__fadeInDown">
            <DotLottieReact
              src="https://lottie.host/19478748-b2f8-4f49-a6b8-fdc8e52f3bc4/yJYl65rPFM.lottie"
              loop
              autoplay
            />
          </div>
        </section>
        <div className="kelas w-100 min-vh-80"></div>
      </header>
      {/*jumbotron */}

      {/*isi content home */}
      <section className={`tentang ${showTentang ? "fade-in-up" : "tentang"}`}>
        <h2 className="tentang-title">TENTANG</h2>
        <p className="tentang-deskripsi animate__animated animate__backInRight">
          Pariwisata Indonesia merupakan cerminan kekayaan alam, budaya, dan
          sejarah yang luar biasa yang tersebar dari Sabang hingga Merauke.
          Dikenal sebagai negeri kepulauan terbesar di dunia, Indonesia
          menawarkan keindahan alam yang memukau seperti pantai-pantai tropis,
          pegunungan hijau, dan dunia bawah laut yang menakjubkan. Tak hanya
          itu, keragaman budaya dan tradisi yang hidup di ribuan pulau
          menjadikan setiap destinasi memiliki cerita dan pesona tersendiri.
          Dari Bali yang romantis, Yogyakarta yang sarat sejarah, hingga Raja
          Ampat yang eksotis, Indonesia adalah destinasi impian bagi wisatawan
          yang ingin merasakan petualangan, ketenangan, dan kehangatan dalam
          satu perjalanan.
          <br />
          <br />
          Dengan keramahan masyarakatnya dan kekayaan alam yang belum banyak
          tersentuh, pariwisata Indonesia adalah potret harmoni antara manusia
          dan alam yang tak tertandingi. <strong>INDONESIA TOURISM</strong>{" "}
          menawarkan kepada pelanggan dan para traveler yang ingin menikmati
          petualangan dan kenyamanan perjalanan dengan harga yang terjangkau dan
          destinasi wisata yang terjamin. Ayo nikmati petualangan dan wisata
          bersama keluarga, teman maupun solo trip yang menyenangkan.
        </p>
      </section>

      {/*DestinasiHome */}
      <div id="destination" className="destination-section">
        <h2 className="destination-title">DESTINATION</h2>
        <div
          className="destination-grid animate__animated animate__fadeInUp"
          data-aos="zoom-in"
        >
          <div className="destination-card">
            <div className="destination-content">
              <h3>WISATA SEJARAH</h3>
              <p>
                Wisata sejarah Indonesia mengajak kita menelusuri jejak
                peradaban masa lalu yang kaya dan mengagumkan. Dari candi megah
                seperti Borobudur dan Prambanan hingga benteng peninggalan
                kolonial, setiap situs menyimpan kisah perjuangan dan kejayaan
                bangsa.
              </p>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-content">
              <h3>WISATA ALAM</h3>
              <p>
                Wisata alam Indonesia menawarkan keindahan luar biasa, dari
                pegunungan hijau, hutan tropis, hingga pantai dan laut yang
                memukau. Setiap sudut nusantara menyimpan pesona alam yang alami
                dan menenangkan.
              </p>
            </div>
          </div>

          <div className="destination-card">
            <div className="destination-content">
              <h3>WISATA VIRAL</h3>
              <p>
                Wisata viral Indonesia menghadirkan destinasi unik yang ramai
                dibicarakan. Dari spot foto instagramable hingga desa wisata
                kreatif, semuanya menawarkan pengalaman seru dan estetika
                kekinian.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*DestinasiHome */}

      {/*paket travel*/}
    <div className="paket w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold">PAKET TERBARU </h1>
          <p className="text-center">Lorem ipsum dolor sit amet</p>
          </Col>
        </Row>
           <Row>
               {PaketTerbaik.map((paket) => {
                 return (
                   <Col
                     key={paket.id}
                     data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay={paket.delay}
                   >
                     <img
                       src={paket.image}
                       alt="Tourism.com"
                       className="w-100 mb-5 rounded"
                     />
                     <div className="star mb-2 px-3">
                       <i className={paket.star1}></i>
                       <i className={paket.star2}></i>
                       <i className={paket.star3}></i>
                       <i className={paket.star4}></i>
                     </div>
                     <h5 className="mb-5  px-3">{paket.title}</h5>
                     <div className="ket d-flex justify-content-between align-item-center px-3 pb-3">
                       <p className="m-0 text-primary fw-bold">{paket.price}</p>
                       <button a href ="/Product" className="btn primary">{paket.buy}</button>
                     </div>
                   </Col>
                 );
               })}
             </Row>
      </Container>
    </div>
      {/*paket travel*/}

      {/*awal keunggulan*/}
      <Event />
      {/*akhir keunggulan*/}

      {/*isi content home */}
    </div>
     <Footer></Footer>
    </>
 
  );
};

export default HomePage;

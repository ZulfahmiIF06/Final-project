import { Container, Col, Row } from "react-bootstrap";
import { semuaPaket } from "../data/index";
import EvenComponent from "../components/EvenComponent";
import Navbar from "../components/NavbarComponent";
import Footer from "../components/FooterComponent";

const Destination = () => {
  return (
    <div className="destinasi-page">
      <Navbar></Navbar>
      <div className="destinasi min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Semua Paket Destinasi</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Container>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li
                      class="breadcrumb-item active"
                      aria-current="page"
                      className="text-light"
                    >
                      Home
                    </li>
                  </ol>
                </nav>
                <Row>
                  <Col className="md-4 ">
                    <div className="card shadow border-0 bg-dark text-white">
                      <div className="card-body p-4">
                        <h3>Categori</h3>
                        <ul>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Wisata Alam</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Wisata Bahari</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Sejarah</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">City Tour</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Hotel</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col className="md-4 card">
                    <div className="card shadow border-0  bg-dark text-white">
                      <div className="card-body p-4">
                        <h3>Promo</h3>
                        <ul>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Flash sale</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">diskon akhir pekan</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">paket hemat</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">paket keluarga</label>
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Liburan Murah</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            {semuaPaket.map((paket) => {
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
                    <button className="btn primary">{paket.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <EvenComponent />
      <Footer></Footer>
    </div>
  );
};

export default Destination;

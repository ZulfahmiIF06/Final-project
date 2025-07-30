
import { Container, Row, Col } from "react-bootstrap";
import CartGambar1 from "../assets/img/candi1.jpeg";

const Checkout = () => {
  return (
    <div className="checkout">
      <Container>
        <Row>
          <Col>
            <div className="breadcrumb">Menu » Checkout</div>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <h3 className="border-bottom pb-3">
              <strong>Detail Pembayaran</strong>
            </h3>
            <form action="">
              <Row pt={3}>
                <Col md={6}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </Col>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Adress"
                  ></textarea>
                </div>
                <Col md={6}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
          <Col md={5}>
            <h3 className="border-bottom pb-3">
              <strong>Product</strong>
            </h3>
            <table className="table ">
              <tbody>
                <tr>
                  <td>
                    <img src={CartGambar1} width={100} alt="" />
                  </td>
                  <td width={600}>
                    <h4>Paket Wisata Sejarah</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span>Rp250.000</span>
                      <div className="ps-3"> X 1</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={CartGambar1} width={100} alt="" />
                  </td>
                  <td width={600}>
                    <h4>Paket Wisata Sejarah</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span>Rp250.000</span>
                      <div className="ps-3"> X 1</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col md={5} className="text-end">
            <div className="d-flex justify-content-between border-bottom pb-2">
              <div>Subtotal</div>
              <div>Rp250.000</div>
            </div>

            <div className="d-flex justify-content-between border-bottom pb-2">
              <div>Shipping</div>
              <div>Rp250.000</div>
            </div>

            <div className="d-flex justify-content-between border-bottom pb-2">
              <div>
                <strong>Grand Total</strong>
              </div>
              <div>Rp250.000</div>
            </div>
          </Col>
        </Row>

        <h3 className="border-bottom pt-4 pb-3 ">
          <strong>Payment Method</strong>
        </h3>
        <div class="input-group mb-3">
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">BNI</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Three</option>
          </select>
        </div>
        <div className="d-flex justify-content-end py-3 pb-2">
          <button className="btn btn-primary">Procced Payment</button>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;

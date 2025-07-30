import React from "react";
import Layout from "./Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartGambar1 from "../assets/img/Benteng Kesultanan Buton.jpeg";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <Container>
          <Row>
            <Col className="md-12">
              <h2 className="Border-bottom pb-3">Cart</h2>
              <table className="table ">
                <tbody >
                  <tr >
                    <td >
                      <img src={CartGambar1} width={150} alt="" />
                    </td>
                    <td width={600}>
                      <h4>Paket Wisata Sejarah</h4>
                      <div className="d-flex align-items-center pt-3">
                        <span>Rp250.000</span>
                      </div>
                    </td>
                    <td valign="middle">
                      <input
                        style={{ width: "100" }}
                        type="number"
                        value={1}
                        className="from-control"
                      />
                    </td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={CartGambar1} width={150} alt="" />
                    </td>
                    <td width={600}>
                      <h4>Paket Wisata Sejarah</h4>
                      <div className="d-flex align-items-center pt-3">
                        <span>Rp250.000</span>
                      </div>
                    </td>
                    <td valign="middle">
                      <input
                        style={{ width: "100" }}
                        type="number"
                        value={1}
                        className="from-control"
                      />
                    </td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col md={3} className="text-end">
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

              <div className="d-flex justify-content-end py-3 pb-2">
                <button className="btn btn-primary">Procced Payment</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cart;

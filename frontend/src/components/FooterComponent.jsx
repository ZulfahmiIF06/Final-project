import { Instagram, Youtube, Facebook, Tiktok } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer">
      <footer class="foot text-dark pt-5 pb-3">
        <div class="container">
          <div class="row">
            <div class="col-md-3 mb-4">
              <h5 class="fw-bold">INDONESIA TOURISM</h5>
              <p>
                Indonesia Tourism merupakan website paket travel terpercaya
                dengan harga tejangkau
              </p>
              <div class="d-flex gap-3 icon">
                <a href="https://www.facebook.com/?locale=id_ID">
                  <i class="fs-4">
                    <Facebook />
                  </i>
                </a>
                <a class="text-dark" href="https://www.instagram.com/">
                  <i class="fs-4">
                    <Instagram />
                  </i>
                </a>
                <a class="text-danger" href="https://www.youtube.com/">
                  <i class="fs-4">
                    <Youtube />
                  </i>
                </a>
                <a class="text-light" href="">
                  <i class="fs-4">
                    <Tiktok />
                  </i>
                </a>
              </div>
            </div>

            <div class="col-md-3 mb-4">
              <h5 class="fw-bold">LINK PENTING</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/" class="text-decoration-none text-dark">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="/Syaratket" class="text-decoration-none text-dark">
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a href="/Event" class="text-decoration-none text-dark">
                    Event
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-4">
              <h5 class="fw-bold">KANTOR</h5>
              <p>
                Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok,
                Kabupaten Sleman, Daerah Istimewa Yogyakarta, 55281
              </p>
              <p>Telepon: +6285215916610Email: INDONESIATour@gmail.com</p>
            </div>
          </div>
          <div class="text-center">&copy;Tugas Akhir Pemrograman web</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

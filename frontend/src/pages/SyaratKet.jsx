import EvenComponent from "../components/EvenComponent";
import { Container, Col, Row } from "react-bootstrap";


const SyaratKet = () => {
  return (
    <div>
      {/*Syarat dan Ketentuan */}
      <div className="syaratket-page min-vh-100">

        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">SYARAT DAN KETENTUAN</h1>
              <h5 className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
              <div className="paragraf ">
                <h6>
                  {" "}
                  <b>1. Penerimaan Syarat</b>
                </h6>
                <p>
                  Dengan mengunduh, mengakses, atau menggunakan aplikasi Travel
                  Kita, pengguna dianggap telah membaca, memahami, dan
                  menyetujui seluruh syarat dan ketentuan ini. Jika pengguna
                  tidak menyetujui sebagian atau seluruh ketentuan, harap tidak
                  menggunakan aplikasi ini.
                </p>
                <h6>
                  {" "}
                  <b>2. Layanan Travel</b>
                </h6>
                <p>
                  Kita Travel Kita menyediakan informasi destinasi wisata,
                  pemesanan paket perjalanan, akomodasi, transportasi, dan
                  layanan pendukung lainnya. Kami berhak untuk mengubah,
                  menambah, atau menghapus fitur tanpa pemberitahuan sebelumnya.
                </p>
                <h6>
                  {" "}
                  <b>3. Pendaftaran dan Akun</b>
                </h6>
                <p>
                  Pengguna harus membuat akun dengan data yang benar dan akurat.
                  Pengguna bertanggung jawab menjaga kerahasiaan akun dan sandi.
                  Travel Kita tidak bertanggung jawab atas penyalahgunaan akun
                  oleh pihak ketiga.
                </p>
                <h6>
                  {" "}
                  <b>4. Pembayaran dan Pembatalan</b>
                </h6>
                <p>
                  Semua pembayaran dilakukan melalui metode yang tersedia dalam
                  aplikasi. Pembatalan dan pengembalian dana tunduk pada
                  ketentuan yang berlaku di setiap paket atau layanan. Biaya
                  administrasi mungkin dikenakan dalam proses pembatalan.
                </p>
                <h6>
                  {" "}
                  <b>5. Kebijakan Penggunaan</b>
                </h6>
                <p>
                  Pengguna dilarang menggunakan aplikasi untuk tujuan ilegal,
                  merugikan pihak lain, menyebarkan konten yang melanggar hukum,
                  atau mengganggu sistem aplikasi. Travel Kita berhak
                  menangguhkan atau menghapus akun yang melanggar aturan.
                </p>
                <h6>
                  {" "}
                  <b>6. Kebijakan Privasi</b>
                </h6>
                <p>
                  Data pribadi pengguna akan dijaga kerahasiaannya sesuai dengan
                  Kebijakan Privasi kami. Kami hanya akan menggunakan data untuk
                  keperluan operasional dan peningkatan layanan.
                </p>
                <h6>
                  {" "}
                  <b>7. Tanggung Jawab</b>
                </h6>
                <p>
                  Travel Kita tidak bertanggung jawab atas keterlambatan,
                  pembatalan oleh pihak ketiga (maskapai, hotel, dll), atau
                  kerugian akibat force majeure (bencana alam, pandemi,
                  kerusuhan, dll). Namun, kami akan membantu memediasi
                  penyelesaian sebaik mungkin.
                </p>
                <h6>
                  {" "}
                  <b>8. Perubahan Syarat </b>
                </h6>
                <p>
                  Pengguna harus membuat akun dengan data yang benar dan akurat.
                  Pengguna bertanggung jawab menjaga kerahasiaan akun dan sandi.
                  Travel Kita tidak bertanggung jawab atas penyalahgunaan akun
                  oleh pihak ketiga.
                </p>
                <h6>
                  {" "}
                  <b>3. Pendaftaran dan Akun</b>
                </h6>
                <p>
                  Syarat dan ketentuan ini dapat diperbarui sewaktu-waktu tanpa
                  pemberitahuan terlebih dahulu. Versi terbaru akan tersedia di
                  dalam aplikasi dan berlaku setelah dipublikasikan.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* akhir Syarat dan Ketentuan */}

      {/*Event Component */}
      <EvenComponent />
    </div>
  );
};

export default SyaratKet;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section
      className="py-5 d-flex align-items-center"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.06)), url("/images/bg-about.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right" className="mb-4 mb-md-0 text-center">
            <img
              src="/images/about.jpeg"
              alt="Tentang PT Provis Garuda Services"
              style={{
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
                borderRadius: '15px',
                boxShadow: '0 8px 100px rgba(0, 0, 0, 0.13)',
              }}
              className="img-fluid"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                padding: '35px',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              <h2 className="fw-bold mb-4" style={{ color: '#1E3A8A' }}>
                PT Provis Garuda Services
              </h2>
              <p style={{ color: '#eaeaea', fontSize: '1.05rem' }}>
                PT Provis Garuda Services adalah perusahaan penyedia layanan tenaga kerja dan solusi Business Process Outsourcing (BPO)
                yang telah berpengalaman sejak tahun 1990. Didirikan sebagai PT Wahana Garuda Purnakarya (WGP), perusahaan ini kemudian
                bertransformasi menjadi Provis dan telah melayani berbagai sektor industri di Indonesia.
              </p>
              <p style={{ color: '#eaeaea', fontSize: '1.05rem' }}>
                Kami fokus pada penyediaan tenaga kerja berkualitas dan solusi manajemen SDM yang profesional, serta mendukung klien
                kami dalam mencapai efisiensi operasional dengan sistem yang modern dan terintegrasi. Kami percaya bahwa sumber daya
                manusia adalah aset utama untuk keberhasilan bisnis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

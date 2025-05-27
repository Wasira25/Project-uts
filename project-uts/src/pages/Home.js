import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="d-flex align-items-center"
        style={{
          height: '100vh',
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0,0,0,0.6)), url("/images/bg-home.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Container data-aos="fade-up" style={{ zIndex: 2, maxWidth: '800px' }}>
          <h1 className="mb-2" style={{ color: '#e0e0e0' }}>Selamat Datang di</h1>
          <h1 className="fw-bold mb-4" style={{ color: '#1E90FF' }}>
            PT Provis Garuda Services
          </h1>
          <p className="lead" style={{ lineHeight: '1.8', color: '#e0e0e0' }}>
            <strong>
              PT Provis Garuda Services adalah perusahaan terkemuka dalam penyediaan tenaga kerja dan solusi Business Process Outsourcing (BPO) di Indonesia.
              Kami berkomitmen memberikan layanan profesional yang membantu bisnis Anda berkembang dengan efisiensi dan kualitas sumber daya manusia terbaik.
            </strong>
          </p>

          <div className="mt-4">
            <Button variant="info" size="lg" className="fw-semibold shadow">
              Hubungi Kami
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;

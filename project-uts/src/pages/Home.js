import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
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
        <h1 className="fw-bold display-4 mb-4">Selamat Datang di <span style={{ color: '#ffd700' }}>PT Provis Garuda Services</span></h1>
        <p className="lead" style={{ lineHeight: '1.8', color: '#e0e0e0' }}>
          <strong>
            PT Provis Garuda Services adalah perusahaan terkemuka dalam penyediaan tenaga kerja dan solusi Business Process Outsourcing (BPO) di Indonesia.  
            Kami berkomitmen memberikan layanan profesional yang membantu bisnis Anda berkembang dengan efisiensi dan kualitas sumber daya manusia terbaik.
          </strong>
        </p>

        {/* Optional CTA Button */}
        <div className="mt-4">
          <Button variant="warning" size="lg" className="fw-semibold shadow">
            Hubungi Kami
          </Button>
        </div>
      </Container>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Home;

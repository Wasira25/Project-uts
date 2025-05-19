import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    title: 'Penyediaan Tenaga Kerja Profesional',
    content: [
      'Menyediakan tenaga kerja terlatih dan terverifikasi sesuai kebutuhan industri.',
      'Sektor meliputi manufaktur, perbankan, retail, dan logistik.',
      'Proses rekrutmen ketat dengan seleksi berbasis kompetensi dan pengalaman.',
    ],
  },
  {
    title: 'Solusi Business Process Outsourcing (BPO)',
    content: [
      'Layanan customer service, administrasi, dan back-office yang efisien.',
      'Pengelolaan proses bisnis dengan teknologi modern dan sistem terintegrasi.',
      'Mempercepat efisiensi operasional dan menekan biaya perusahaan klien.',
    ],
  },
  {
    title: 'Manajemen Sumber Daya Manusia',
    content: [
      'Pengelolaan SDM mulai dari pelatihan, pengembangan, hingga evaluasi kinerja.',
      'Mendukung pengembangan kompetensi tenaga kerja klien secara berkelanjutan.',
      'Konsultasi strategi HR sesuai kebutuhan bisnis dan budaya perusahaan.',
    ],
  },
  {
    title: 'Pelatihan dan Pengembangan SDM',
    content: [
      'Program pelatihan sesuai tren industri terbaru dan kebutuhan spesifik klien.',
      'Workshop soft skills dan technical skills untuk meningkatkan produktivitas.',
      'Evaluasi dan sertifikasi kompetensi tenaga kerja secara berkala.',
    ],
  },
  {
    title: 'Layanan Konsultasi HR dan Compliance',
    content: [
      'Bantuan kepatuhan terhadap regulasi ketenagakerjaan dan kebijakan internal.',
      'Audit HR dan rekomendasi perbaikan proses kerja.',
      'Pendampingan penyelesaian masalah ketenagakerjaan secara profesional.',
    ],
  },
];

const Services = () => {
  return (
    <section
      className="py-5"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.08)), url("/images/bg-services.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <div
          className="text-center mb-5 pt-5"
          data-aos="zoom-in"
          style={{ color: '#fff', marginTop: '40px' }}
        >
          <h2 className="fw-bold">Layanan Kami</h2>
          <p className="text-light">Solusi tenaga kerja dan manajemen bisnis profesional</p>
        </div>

        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={idx} md={6} lg={4} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  borderRadius: '15px',
                  minHeight: '100%',
                  transition: 'transform 0.3s ease',
                }}
                className="h-100 shadow-sm card-hover"
              >
                <Card.Body>
                  <Card.Title className="fw-semibold mb-3">{service.title}</Card.Title>
                  <Card.Text as="div">
                    <ul style={{ paddingLeft: '1rem' }}>
                      {service.content.map((item, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .card-hover:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Services;

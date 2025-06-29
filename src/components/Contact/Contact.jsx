import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ show: false, type: '', message: '' });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const text =
      `New Contact Form Submission:\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Message: ${message}`;
    // Copy to clipboard
    navigator.clipboard.writeText(text);
    // Show toast for 3.5 seconds, then open WhatsApp
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      const whatsappUrl = `https://wa.me/919840454758`;
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3500);
  };

  const contactInfo = [
    {
      icon: "geo-alt-fill",
      title: "Visit Our Office",
      text: ` 46&47, Booma Illam, Mani Garden,
 Y. Pudhupatti, Arumbanoor P.O.
Kadachanendal,
Madurai – 625104`,
      subText: "Open Monday-Friday, 9:00 AM - 6:00 PM"
    },
    {
      icon: "telephone-fill",
      title: "Let's Talk",
      text: "+91 98404 54758",
      subText: "We're available 24/7 for urgent inquiries"
    },
    {
      icon: "envelope-fill",
      title: "Email Us",
      text: "hello@frugaltrail.com",
      subText: "We typically respond within 24 hours"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-pattern"></div>
      <Container>
        <div className="text-center mb-4">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Get in Touch with Us
          </h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="contact-info" data-aos="fade-right">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="info-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="info-icon-wrapper">
                    <div className="info-icon">
                      <i className={`bi bi-${item.icon}`}></i>
                    </div>
                  </div>
                  <div className="info-content">
                    <h5 className="info-title">{item.title}</h5>
                    <p className="info-text">{item.text}</p>
                    <small className="text-muted">{item.subText}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links mt-5" data-aos="fade-up">
              <h5 className="mb-4">Follow Us</h5>
              <div className="social-icons">
                {[
                  { platform: 'facebook', url: ' https://www.facebook.com/profile.php?id=61573447725702' },
                  { platform: 'instagram', url: 'https://www.instagram.com/frugal_trail/' },
                  { platform: 'linkedin', url: 'https://www.linkedin.com/company/frugal-trail/?viewAsMember=true' }
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className={`social-icon ${social.platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`bi bi-${social.platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={7} className="offset-lg-1">
            <div className="contact-form-wrapper" data-aos="fade-left">
              {formStatus.show && (
                <Alert 
                  variant={formStatus.type} 
                  onClose={() => setFormStatus({...formStatus, show: false})} 
                  dismissible
                  className="mb-4"
                >
                  {formStatus.message}
                </Alert>
              )}
              
              {/* Toast message */}
              {showToast && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "40px",
                    background: "#1ABC9C",
                    color: "#fff",
                    padding: "12px 32px",
                    borderRadius: "30px",
                    zIndex: 2000,
                    fontWeight: 600,
                    fontSize: "1rem",
                    boxShadow: "0 2px 12px rgba(26,188,156,0.15)",
                  }}
                >
                  Message copied! Please paste in WhatsApp and send.
                </div>
              )}

              <Form className="contact-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <div className="form-floating">
                      <Form.Control 
                        type="text" 
                        id="nameInput"
                        placeholder="Your Name"
                        className="form-input"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                      <label htmlFor="nameInput">Your Name</label>
                    </div>
                  </Col>
                  <Col md={6} className="mb-4">
                    <div className="form-floating">
                      <Form.Control 
                        type="email" 
                        id="emailInput"
                        placeholder="Your Email"
                        className="form-input"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                      <label htmlFor="emailInput">Your Email</label>
                    </div>
                  </Col>
                </Row>

                <div className="form-floating mb-4">
                  <Form.Control 
                    type="tel" 
                    id="phoneInput"
                    placeholder="Your Phone"
                    className="form-input"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <label htmlFor="phoneInput">Your Phone</label>
                </div>

                <div className="form-floating mb-4">
                  <Form.Control 
                    as="textarea" 
                    style={{ height: '150px' }}
                    id="messageInput"
                    placeholder="Your Message"
                    className="form-input"
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                  <label htmlFor="messageInput">Your Message</label>
                </div>

                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    background: "#1ABC9C",
                    border: "none",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: "1px",
                    padding: "12px 0",
                    borderRadius: "30px",
                    boxShadow: "0 2px 12px rgba(26,188,156,0.10)",
                    cursor: "pointer"
                  }}
                >
                  Send via WhatsApp
                  <i className="bi bi-whatsapp ms-2"></i>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
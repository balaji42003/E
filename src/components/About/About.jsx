import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import logo from '../../assets/2.png';

// Import your images
import mainImage from '../../assets/nature_trip_1.jpg';
import secondaryImage from '../../assets/nature_travel_6.jpg';
import experienceImage from '../../assets/nature_travel_7.jpg';
import aboutUsImage from '../../assets/about us.png';
import Monish from '../../assets/Monish.jpg';
import Chief from '../../assets/Chief Pawsenger Officer.jpg';
import karthik from '../../assets/Karthik.jpg';
import image2 from '../../assets/IMG-20250227-WA0024.jpg';
import image3 from '../../assets/IMG-20250227-WA0025.jpg';
import image4 from '../../assets/IMG-20250227-WA0026.jpg';
import image5 from '../../assets/IMG-20250227-WA0027.jpg';
import image6 from '../../assets/IMG-20250227-WA0028.jpg';
import image7 from '../../assets/IMG-20250227-WA0029.jpg';
import image8 from '../../assets/IMG-20250227-WA0030.jpg';
import image9 from '../../assets/IMG-20250227-WA0031.jpg';
import image10 from '../../assets/IMG-20250227-WA0032.jpg';
import image11 from '../../assets/IMG-20250227-WA0033.jpg';
import image12 from '../../assets/IMG-20250227-WA0034.jpg';
import image13 from '../../assets/IMG-20250227-WA0035.jpg';
import image14 from '../../assets/IMG-20250227-WA0036.jpg';
import image15 from '../../assets/IMG-20250227-WA0037.jpg';
import image16 from '../../assets/IMG-20250227-WA0038.jpg';
import image17 from '../../assets/IMG-20250227-WA0039.jpg';
import image18 from '../../assets/IMG-20250227-WA0040.jpg';
import image19 from '../../assets/IMG-20250227-WA0041.jpg';
import image20 from '../../assets/IMG-20250227-WA0042.jpg';
import image21 from '../../assets/IMG-20250227-WA0043.jpg';
import image22 from '../../assets/IMG-20250227-WA0044.jpg';
import image23 from '../../assets/IMG-20250227-WA0045.jpg';
import image24 from '../../assets/IMG-20250227-WA0053.jpg';
import image25 from '../../assets/IMG-20250227-WA0054.jpg';
import image26 from '../../assets/IMG-20250227-WA0056.jpg';
import image27 from '../../assets/IMG-20250227-WA0057.jpg';
import image28 from '../../assets/IMG-20250227-WA0058.jpg';
import image29 from '../../assets/IMG-20250227-WA0061.jpg';
import image30 from '../../assets/IMG-20250227-WA0063.jpg';
import image31 from '../../assets/IMG-20250227-WA0064.jpg';
import image32 from '../../assets/IMG-20250227-WA0066.jpg';
import image33 from '../../assets/IMG-20250227-WA0067.jpg';
import image34 from '../../assets/IMG-20250227-WA0068.jpg';
import image35 from '../../assets/IMG-20250227-WA0069.jpg';
import image36 from '../../assets/IMG-20250227-WA0070.jpg';
import image37 from '../../assets/IMG-20250227-WA0071.jpg';
import image38 from '../../assets/IMG-20250227-WA0072.jpg';
import image39 from '../../assets/IMG-20250227-WA0073.jpg';


const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const stats = [
    { number: '2+', text: 'Months of Operations', icon: '🌟' },
    { number: '', text: 'Dozens of Trips Successfully Planned', icon: '🌍' },
    { number: '', text: 'Trusted by Families, Friends & First-Time Travelers', icon: '😊' },
    { number: '', text: 'Complete Guidance from Start to End', icon: '🏁' }
  ];

  const features = [
    {
      icon: '🛫',
      title: 'Transparent Service Fee (12%)',
      text: 'Tailored experiences for every traveler'
    },
    {
      icon: '🎯',
      title: 'Tailored Itineraries, Not Templates',
      text: 'Professional local guides worldwide'
    },
    {
      icon: '🏨',
      title: 'No Markups on Flight or Hotel',
      text: 'Premium accommodations at top locations'
    },
    {
      icon: '💬',
      title: 'Support via WhatsApp Throughout',
      text: '24/7 Support throughout your journey'
    }
  ];

  const teamMembers = [
    {
      src: Monish,
      alt: "Monish",
      name: "Monish – Co-founder and Chief Travel Strategist, Frugal Trail",
      text:  <>
      Travel has always been more than just a hobby for me—it’s a passion that has shaped my perspective on the world. Having traveled to 40 countries and experienced diverse cultures, I’ve learned the ins and outs of planning a perfect trip, whether it’s navigating visa processes, finding hidden gems, or crafting the most budget-friendly yet fulfilling itineraries.<br /><br />
      
      Over the years, I’ve helped countless friends and family members plan their travels, ensuring they have a hassle-free and unforgettable experience. From choosing the right destinations to securing visas smoothly, I’ve always enjoyed making travel simpler and more accessible for others. Seeing them return with incredible memories, thanking me for the seamless trips, made me realize that this is something I want to do on a larger scale.<br /><br />
      
      As a filmmaker, my work has taken me across borders, allowing me to explore places in ways most travelers don’t. This experience has given me a unique perspective on travel—beyond tourist spots, I look for authentic experiences that make each journey special. That’s what led me to co-found Frugal Trail—a platform where I can combine my love for travel and my expertise in planning to help others travel smarter, explore more, and spend less.
    </>
    },
    {
      src: karthik,
      alt: "Karthik",
      name: "Karthik – Co-founder & Chief Growth Officer, FrugalTrail",
      text: <>I’ve always believed that the real magic of travel lies not just in exploring new destinations, but in how thoughtfully those experiences are planned, communicated, and delivered. With over a decade of experience in customer success and operations, I’ve spent years solving problems, building systems, and ensuring people have seamless experiences — and that’s exactly what I bring to FrugalTrail.<br></br>
      <br></br>

      While I’m not the one crafting day-by-day itineraries, I’m the guy behind everything that makes FrugalTrail feel dependable and human. I take care of customer experience, brand positioning, partnerships, and community — the things that ensure FrugalTrail is not just a travel service, but a brand people remember and trust.<br></br>
      <br></br>
      
      My journey into travel began out of sheer curiosity — I loved watching how people planned trips, how destinations came alive through local culture, and how small details could make or break an experience. That curiosity turned into purpose when I realized most travel consultancies either overpromise or underdeliver. With FrugalTrail, we’re rewriting that script — by being honest, transparent, and absolutely committed to making travel simpler and smarter.<br></br>
      <br></br>
      
      If Monish is the guy who fixes your itinerary, I’m the guy ensuring you love every step of interacting with us — from the first WhatsApp message to the post-trip thank you.
        </>
    },
    {
      src: Chief,
      alt: "Chief",
      name: "Meet Our Chief Paw-senger Officers (CPOs)",
      text:  <>
      The Real Brains Behind the Brand 🐾<br /><br />
      
      Every great company has a leadership team that works hard, stays focused, and makes big decisions. We don't. Instead, we have a bunch of furry managers who nap through meetings and still expect applause.<br /><br />
      
      Our Chief Paw-senger Officers proudly handle the following responsibilities:<br />
      ✔ Sniffing out the best travel spots (and unattended snacks) 🌍🍗<br />
      ✔ Auditing naps at every location (quality control, of course) 🛏️😴<br />
      ✔ Providing instant approvals by walking on keyboards mid-task 🐾⌨️<br />
      ✔ Reminding us daily that “pack light” doesn’t apply to treats 🧳🍖<br /><br />
      
      They may not respond to emails or answer travel queries, but they firmly believe that every trip should involve curiosity, chaos, and at least one nap in the sun.
    </>
    }
  ];

  const galleryImages = [
    { src: image2, destination: "Bali Adventure" },
    { src: image3, destination: "Swiss Alps Journey" },
    { src: image4, destination: "Paris Exploration" },
    { src: image5, destination: "Dubai Discovery" },
    { src: image6, destination: "Thailand Adventure" },
    { src: image7, destination: "Singapore Experience" },
    { src: image8, destination: "Vietnam Journey" },
    { src: image9, destination: "Japan Discovery" },
    { src: image10, destination: "South Korea Trip" },
    { src: image11, destination: "Malaysia Adventure" },
    { src: image12, destination: "Indonesia Experience" },
    { src: image13, destination: "New Zealand Journey" },
    { src: image14, destination: "Australia Adventure" },
    { src: image15, destination: "Maldives Paradise" },
    { src: image16, destination: "Morocco Discovery" },
    { src: image17, destination: "Egypt Exploration" },
    { src: image18, destination: "Turkey Adventure" },
    { src: image19, destination: "Greece Journey" },
    { src: image20, destination: "Italy Experience" },
    { src: image21, destination: "Spain Discovery" },
    { src: image22, destination: "France Adventure" },
    { src: image23, destination: "Germany Journey" },
    { src: image24, destination: "Netherlands Trip" },
    { src: image25, destination: "Belgium Experience" },
    { src: image26, destination: "Switzerland Paradise" },
    { src: image27, destination: "Austria Discovery" },
    { src: image28, destination: "Czech Republic" },
    { src: image29, destination: "Hungary Adventure" },
    { src: image30, destination: "Poland Journey" },
    { src: image31, destination: "Croatia Experience" },
    { src: image32, destination: "Portugal Discovery" },
    { src: image33, destination: "Ireland Adventure" },
    { src: image34, destination: "Scotland Journey" },
    { src: image35, destination: "Iceland Experience" },
    { src: image36, destination: "Norway Discovery" },
    { src: image37, destination: "Sweden Adventure" },
    { src: image38, destination: "Finland Journey" },
    { src: image39, destination: "Denmark Experience" }
  ];

  // Display all images if showAllImages is true, otherwise show first 3
  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 3);
  console.log('Number of images displayed:', displayedImages.length);

  const handleSeeMore = () => {
    setShowAllImages(!showAllImages);
    
    // Scroll behavior based on expanding/collapsing
    setTimeout(() => {
      if (!showAllImages) {
        // Expanding - scroll down a bit
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
        });
      } else {
        // Collapsing - scroll back up to gallery section
        document.querySelector('.gallery-section').scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="page-wrapper">
      <section id="about" className="about py-4">
        <div className="about-pattern"></div>
        <Container>
          {/* Compact Header */}
          <Row className="justify-content-center mb-4">
            <Col lg={8} className="text-center">
              <div data-aos="fade-up">
                <span className="section-subtitle">About Us</span>
                <h2 className="section-title"> Your Travel, Our Process.</h2>
              </div>
            </Col>
          </Row>

          {/* Modified Main Content Row */}
          <Row className="align-items-center mb-4">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="about-image-wrapper">
                <div 
                  className="about-image-container grid-container" 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr', 
                    gap: '60px', 
                    height: '100%',
                    alignItems: 'center'
                  }}
                >
                  {teamMembers.map((member, index) => (
                    <div key={index} className="grid-item" style={{ display: 'flex', justifyContent: 'center' }}>
                      <img 
                        src={member.src} 
                        alt={member.alt}
                        onClick={() => setSelectedMember(member)}
                        style={{ 
                          width: '250px', 
                          height: '250px', 
                          objectFit: 'cover',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          border: '3px solid #1ABC9C'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                          e.target.style.boxShadow = '0 8px 25px rgba(26, 188, 156, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  ))}

                  {selectedMember && (
                    <>
                      <div 
                        style={{
                          position: 'fixed',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          zIndex: 999
                        }}
                        onClick={() => setSelectedMember(null)}
                      />
                      <div 
                        style={{
                          position: 'fixed',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          backgroundColor: 'white',
                          padding: '20px',
                          borderRadius: '15px',
                          boxShadow: '0 4px 20px rgba(26, 188, 156, 0.2)', // Light blue shadow
                          zIndex: 1000,
                          width: '90%',
                          maxWidth: '500px',
                          maxHeight: '80vh',
                          overflowY: 'auto',
                          animation: 'fadeIn 0.3s ease',
                          border: '1px solid rgba(26, 188, 156, 0.1)' // Light blue border
                        }}
                      >
                        <div 
                          style={{ 
                            position: 'absolute', 
                            top: '10px', 
                            right: '10px',
                            cursor: 'pointer',
                            fontSize: '24px',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            backgroundColor: '#1ABC9C',
                            color: 'white',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={() => setSelectedMember(null)}
                        >
                          ×
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '20px', 
                          marginBottom: '15px' 
                        }}>
                          <img 
                            src={selectedMember.src} 
                            alt={selectedMember.alt} 
                            style={{
                              width: '100px',
                              height: '100px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                              boxShadow: '0 4px 15px rgba(26, 188, 156, 0.15)'
                            }}
                          />
                          <h4 style={{ 
                            margin: 0, 
                            color: '#1ABC9C',
                            fontSize: '18px',
                            fontWeight: '600'
                          }}>
                            {selectedMember.name}
                          </h4>
                        </div>
                        <div style={{
                          fontSize: '14px',
                          lineHeight: '1.6',
                          color: '#555',
                          paddingRight: '10px',
                          maxHeight: '50vh',
                          overflowY: 'auto'
                        }}>
                          {selectedMember.text}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="about-content ps-lg-4" data-aos="fade-left">
                <h3 className="content-title mb-3">
                  Crafting Unforgettable Experiences
                </h3>
                <div className="content-description">
                  <p className="lead mb-3">
                  FrugalTrail was created to fix the mess that most people face while planning trips. Instead of selling rigid “packages”, we offer custom itineraries based on your destination, number of travelers, duration, and budget. That’s all we ask. Once we have that, we help you plan every detail — from flights and visas to hotels and local transport. No fluff. No upselling. Just practical, honest travel planning.
                  <br></br>
                  <br></br>
We’ve helped families, solo travelers, and groups experience stress-free trips without spending a rupee more than necessary.
<br></br>
<br></br>
Whether you're exploring nearby states or applying for a Schengen visa — we're the calm in your travel chaos.

                  </p>
                </div>
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="stat-card"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <span className="stat-icon">{stat.icon}</span>
                      <h4 className="stat-number">{stat.number}</h4>
                      <p className="stat-text">{stat.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Features Section - Compact */}
          <Row className="mt-4">
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index} className="mb-3">
                <div className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h5 className="feature-title mb-2">{feature.title}</h5>
                  <p className="feature-text mb-0">{feature.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Gallery Section */}
          <div className="gallery-section mt-5 text-center">
            <span className="section-subtitle">Photo Gallery</span>
            <h2 className="section-title mb-4">Explore Our Travel Memories</h2>
            <p className="text-muted mb-4">Browse through some of the destinations we've helped travelers explore. Real trips, real memories.</p>
            
            <Row className="g-4">
              {displayedImages.map((image, index) => (
                <Col md={4} key={index} className="mb-4">
                  <div 
                    className="gallery-item"
                    style={{ cursor: 'pointer', height: '300px', borderRadius: '15px', overflow: 'hidden' }}
                    onClick={() => handleImageClick(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.destination} 
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-content text-center">
                        <img src={logo} alt="Company Logo" className="gallery-icon" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                        {/* <h6 className="gallery-title text-white mt-2">{image.destination}</h6> */}
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-4 mb-5">
                <button 
                  onClick={handleSeeMore}
                  style={{
                    cursor: 'pointer',
                    background: showAllImages ? 'transparent' : '#1ABC9C', // Changed from #005F73
                    color: showAllImages ? '#1ABC9C' : 'white', // Changed from #005F73
                    border: showAllImages ? '2px solid #1ABC9C' : 'none', // Changed from #005F73
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '18px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: showAllImages ? 'none' : '0 4px 15px #1ABC9C', // Updated shadow color
                    outline: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                  onMouseOver={(e) => {
                    if (showAllImages) {
                      e.target.style.background = '#1ABC9C'; // Changed from #005F73
                      e.target.style.color = 'white';
                    } else {
                      e.target.style.background = '#16a085'; // Changed to darker shade of the new color
                    }
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(26, 188, 156, 0.3)'; // Updated shadow color
                  }}
                  onMouseOut={(e) => {
                    if (showAllImages) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#1ABC9C'; // Changed from #005F73
                    } else {
                      e.target.style.background = '#1ABC9C'; // Changed from #005F73
                    }
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = showAllImages ? 'none' : '0 4px 15px rgba(26, 188, 156, 0.2)'; // Updated shadow color
                  }}
                >
                  {showAllImages ? (
                    <>
                      Show Less Photos
                      <span style={{ fontSize: '20px', marginLeft: '5px' }}>↑</span>
                    </>
                  ) : (
                    <>
                      See More Photos
                      <span style={{ fontSize: '20px', marginLeft: '5px' }}>↓</span>
                    </>
                  )}
                </button>
              </div>
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                cursor: 'pointer'
              }}
              onClick={() => setSelectedImage(null)}
            >
              <div 
                style={{
                  maxWidth: '90%',
                  maxHeight: '90vh',
                  position: 'relative'
                }}
                onClick={e => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.destination}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '80vh',
                    objectFit: 'contain'
                  }}
                />
                <h4 
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '20px',
                    fontSize: '20px'
                  }}
                >
                  {/* {selectedImage.destination} */}
                </h4>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default About;
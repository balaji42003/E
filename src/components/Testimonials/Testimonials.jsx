import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import bharathImage from '../../assets/Bharath Kannan.jpg';
import vijayImage from '../../assets/Vijayaraghavan Venkatadri.png'; // This needs to be updated with Vijayaraghavan's image
import ayyappaImage from '../../assets/Ayyappa.jpg';
import kottiImage from '../../assets/Kotti Rajendar.jpg'; // This needs to be updated with Kotti Rajendar's image
import './Testimonials.css';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndexes, setExpandedIndexes] = useState(new Set());

  const allTestimonials = [
    {
      image: bharathImage,
      name: "Bharath Kannan",
      role: "Adventure Traveler",
      quote: <><b style={{color:'black', fontFamily:'cursive'}}>Kudos FrugalTrail!</b><br /><br />
          
      We as a family of 6 had an effortless and cozy first time international trip to Malaysia organised by Frugal trail.<br /><br />
      
      The most important and appealing aspect is that Frugal trail listened to our plans and did not offer a generic package. From seamless flight bookings to perfectly situated accommodations at 'The Robertson', they handled every detail.<br /><br />
      
      We effortlessly explored Kuala Lumpur's dazzling Petronas Towers and the vibrant energy of Chinatown, all within our budget and comfort.<br /><br />
      
      Frugal Trail didn't just plan a trip, they gifted us with precious, stress-free family memories. They tailored the trip to our needs. For our first international adventure, it was nothing short of magical.<br /><br />
      
      Thank you Frugal trail and looking forward to take your assistance in many of our future adventures.</>,
      rating: 5,
      location: "Swiss Alps Tour"
    },
    {
      image: vijayImage,
      name: "Vijayaraghavan Venkatadri",
      role: "Family Tourist",
      quote: <><b style={{color:'black', fontFamily:'cursive'}}>Expert Guidance That Felt Personal.</b><br /><br />
Monish is an exceptional travel explorer and the ultimate go-to person for travel guidance. His expertise and attention to detail are truly mind-blowing.<br /><br />
He doesn't just help with planning and guiding but also shares valuable insights on how to spend effectively, making the entire travel experience seamless and enjoyable.<br /><br />
Monish's advice during my Dubai and Singapore trips was invaluable, helping me navigate my travels smoothly and stress-free.<br /><br />
I can't thank him enough for his support in making my journeys memorable. Highly recommended!
</>,
      rating: 5,
      location: "Bali Adventure"
    },
    {
      image: ayyappaImage,
      name: "Ayyappa",
      role: "Photography Enthusiast",
      quote: <>
<b style={{color:'black', fontFamily:'cursive'}}>More Than a Planner — A Complete Travel Partner.</b><br /><br />
The Best thing about Consulting Monish about your Travel Itinerary, Budget etc is that he takes you through a Breezy Process because he literally takes care of all your doubts and queries and tries to provide you a complete A - Z Transparent idea starting from Visa, Flight, Hotels, Sight Seeing etc.<br /><br />
But here's the best part. According to your budget and travel needs and mode like Solo, Couples or Family he makes you aware of every small detail with regards to the trip which others don't even explain.<br /><br />
He literally becomes your virtual guide in your travel because he guides you right from your airport terminals info, flight options, taxis or even public transport and even guide you to the ways to head there at the planning stage itself. One will never see such a thorough guidance along with costs and the day trip ideas and details that he gives and the transparency he shows is unprecedented.<br /><br />
I have to say that during my travel, he patiently answered all my queries before travel and some doubts while in the middle of the travel also which shows the good support system.<br /><br />
Also regarding local cuisines, cost and specific unexplored off beat locations details was so helpful for my travel.
</>,
      rating: 5,
    },
    {
      image: kottiImage,
      name: "Kotti Rajendar",
      role: "Photography Enthusiast",
      quote: <>
Stress-Free, Budget-Friendly, and Unforgettable.<br /><br />
I recently had the pleasure of working with my dear buddy Monish to plan an unforgettable trip to Europe, and I couldn't be happier with the experience! Our adventure covered Germany, Paris, Austria, Switzerland, and Prague, and every moment was truly magical.<br /><br />
From the very beginning, Monish was incredibly attentive and supportive. He helped me with everything from preparing my Visa documents to creating a detailed itinerary tailored to our preferences, as well as booking flight tickets and rooms. His attention to detail and dedication were evident in every aspect of the trip.<br /><br />
Monish went above and beyond to suggest must-visit places, book all the attractions, and ensure everything was perfectly handled. What truly stood out was his availability and passion for travel. He was always updated with the latest changes and information, which proved to be incredibly helpful.<br /><br />
Even when it was late for him, he was just a call or message away to assist me with any queries or issues, making the journey completely stress-free.<br /><br />
Additionally, Monish managed to guide us and ensure a budget-friendly trip without compromising on the experience. His expertise and enthusiasm made all the difference, and I highly recommend Monish to anyone looking to plan a seamless and enjoyable travel experience.<br /><br />
Thank you, Monish, for making my trip so special and memorable!
</>,
      rating: 5,
      location: "Northern Lights Tour"
    },
  ];

  const displayedTestimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setTimeout(() => {
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handleReadMore = (index) => {
    setExpandedIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="testimonials py-5">
      <div className="bg-pattern"></div>
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title"> What Our Travelers Say</h2>
          <div className="title-underline mx-auto"></div>
          <p className="text-muted mt-3">Real stories from happy travelers! Hear how FrugalTrail made their trips seamless, stress-free, and budget-friendly.</p>
        </div>

        <Row className="testimonials-grid">
          {displayedTestimonials.map((testimonial, index) => (
            <Col lg={4} key={index} className="mb-4">
              <Card 
                className="testimonial-card border-0 h-100 shadow-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body className="p-4">
                  <div className="quote-icon">❝</div>
                  <div className="testimonial-content">
                    <div className="testimonial-header mb-4">
                      <div className="d-flex align-items-center">
                        <div className="testimonial-img-wrapper">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="testimonial-img"
                          />
                        </div>
                        <div className="ms-3">
                          <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                          {/* <p className="text-muted mb-0">{testimonial.role}</p>
                          <small className="text-primary">{testimonial.location}</small> */}
                        </div>
                      </div>
                    </div>
                    <p className={`testimonial-text ${expandedIndexes.has(index) ? 'expanded' : ''}`}>
                      {testimonial.quote}
                    </p>
                    <button 
                      onClick={() => handleReadMore(index)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: ' #1ABC9C',
                        fontWeight: '600',
                        fontSize: '16px',
                        cursor: 'pointer',
                        padding: '5px 0',
                        marginTop: '10px'
                      }}
                    >
                      {expandedIndexes.has(index) ? 'Read Less' : 'Read More'}
                      <i 
                        className={`bi bi-arrow-${expandedIndexes.has(index) ? 'up' : 'down'}`}
                        style={{ marginLeft: '5px' }}
                      ></i>
                    </button>
                    <div className="rating mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                    <div className="testimonial-footer">
                      <span className="verified-badge">
                        <i className="bi bi-patch-check-fill text-primary me-2"></i>
                        Verified Travel
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5" data-aos="fade-up">
          <button 
            className="view-more-btn"
            onClick={handleViewMoreClick}
          >
            {showAll ? 'Show Less Reviews' : 'View More Reviews'}
            <i className={`bi bi-arrow-${showAll ? 'up' : 'down'} ms-2`}></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
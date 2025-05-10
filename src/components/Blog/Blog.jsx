import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blog.css';

// Import blog post images from your existing gallery
import image2 from '../../assets/IMG-20250227-WA0024.jpg';
import image7 from '../../assets/IMG-20250227-WA0029.jpg';
import image11 from '../../assets/IMG-20250227-WA0033.jpg';
import image15 from '../../assets/IMG-20250227-WA0037.jpg';
import image22 from '../../assets/IMG-20250227-WA0044.jpg';
import image28 from '../../assets/IMG-20250227-WA0058.jpg';

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  const allBlogPosts = [
    {
      image: image2,
      category: "Travel Guide",
      title: "Planning a Europe Trip from Madurai? Read This First",
      excerpt: "A step-by-step breakdown of what you need to know about planning your European adventure from South India..."
    },
    {
      image: image7,
      category: "Visa Tips",
      title: "Visa Rejection? Here's How to Avoid the Common Mistakes",
      excerpt: "Real examples and solutions from past client experiences to help you secure your visa approval..."
    },
    {
      image: image11,
      category: "Budget Travel",
      title: "What ₹1 Lakh Can Get You in Southeast Asia",
      excerpt: "Breaking down destinations that fit the budget, with real costs and travel tips..."
    },
    {
      image: image15,
      category: "Cultural Travel",
      title: "Hidden Temples of Tamil Nadu",
      excerpt: "Discover the ancient architectural marvels and spiritual sanctuaries across Tamil Nadu's lesser-known regions..."
    },
    {
      image: image22,
      category: "Adventure",
      title: "Trekking in the Western Ghats",
      excerpt: "A comprehensive guide to the best trekking routes in the Western Ghats, from beginner trails to challenging peaks..."
    },
    {
      image: image28,
      category: "Photography",
      title: "Best Photo Spots in South India",
      excerpt: "Top locations for capturing the perfect shots of South India's diverse landscapes and cultural heritage..."
    }
  ];

  const displayedPosts = showAll ? allBlogPosts : allBlogPosts.slice(0, 3);

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="page-wrapper">
      <section id="blog" className="blog py-5">
        <div className="blog-pattern"></div>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Letters from Our Blog</span>
            <h2 className="section-title">Latest Travel Insights</h2>
            <div className="title-underline mx-auto"></div>
          </div>

          <Row className="blog-grid">
            {displayedPosts.map((post, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card 
                  className="blog-card border-0 h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="blog-img-wrapper">
                    <Card.Img variant="top" src={post.image} className="blog-img" />
                    <span className="category-badge">{post.category}</span>
                    <div className="blog-overlay">
                      <button className="read-more-btn">Read More</button>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="blog-title h5 mb-3">
                      {post.title}
                    </Card.Title>
                    <Card.Text className="blog-excerpt">
                      {post.excerpt}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5" data-aos="fade-up">
            <button 
              className="view-all-btn"
              onClick={handleViewMoreClick}
            >
              {showAll ? 'Show Less' : 'View All Posts'}
              <i className={`bi bi-arrow-${showAll ? 'up' : 'down'} ms-2`}></i>
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
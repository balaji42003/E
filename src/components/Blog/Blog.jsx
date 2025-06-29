import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Blog.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, onValue } from "firebase/database";

// Import blog post images from your existing gallery
import image2 from "../../assets/IMG-20250227-WA0024.jpg";
import image7 from "../../assets/IMG-20250227-WA0029.jpg";
import image11 from "../../assets/IMG-20250227-WA0033.jpg";
import image15 from "../../assets/IMG-20250227-WA0037.jpg";
import image22 from "../../assets/IMG-20250227-WA0044.jpg";
import image28 from "../../assets/IMG-20250227-WA0058.jpg";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBFfBeD_q7N5BHUSVUFjmp8N47ihLiMQDc",
  authDomain: "frugaltrailphotos.firebaseapp.com",
  projectId: "frugaltrailphotos",
  messagingSenderId: "387948789176",
  appId: "1:387948789176:web:2174d8a080369751de634d",
  databaseURL:
    "https://frugaltrailphotos-default-rtdb.asia-southeast1.firebasedatabase.app",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const staticBlogsArray = [
  {
    title: "Sample Static Blog 1",
    image: "https://via.placeholder.com/400x200",
    link: "https://yourblog.com/sample1",
  },
  {
    title: "Sample Static Blog 2",
    image: "https://via.placeholder.com/400x200",
    link: "https://yourblog.com/sample2",
  },
  // ...add your actual static blogs here...
];

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const [firebaseBlogs, setFirebaseBlogs] = useState([]);
  const [firebaseBlogsMeta, setFirebaseBlogsMeta] = useState([]);

  const allBlogPosts = [
    // {
    //   image: image2,
    //   category: "Travel Guide",
    //   title: "Planning a Europe Trip from Madurai? Read This First",
    //   excerpt:
    //     "A step-by-step breakdown of what you need to know about planning your European adventure from South India...",
    // },
    // {
    //   image: image7,
    //   category: "Visa Tips",
    //   title: "Visa Rejection? Here's How to Avoid the Common Mistakes",
    //   excerpt:
    //     "Real examples and solutions from past client experiences to help you secure your visa approval...",
    // },
    // {
    //   image: image11,
    //   category: "Budget Travel",
    //   title: "What ₹1 Lakh Can Get You in Southeast Asia",
    //   excerpt:
    //     "Breaking down destinations that fit the budget, with real costs and travel tips...",
    // },
    // {
    //   image: image15,
    //   category: "Cultural Travel",
    //   title: "Hidden Temples of Tamil Nadu",
    //   excerpt:
    //     "Discover the ancient architectural marvels and spiritual sanctuaries across Tamil Nadu's lesser-known regions...",
    // },
    // {
    //   image: image22,
    //   category: "Adventure",
    //   title: "Trekking in the Western Ghats",
    //   excerpt:
    //     "A comprehensive guide to the best trekking routes in the Western Ghats, from beginner trails to challenging peaks...",
    // },
    // {
    //   image: image28,
    //   category: "Photography",
    //   title: "Best Photo Spots in South India",
    //   excerpt:
    //     "Top locations for capturing the perfect shots of South India's diverse landscapes and cultural heritage...",
    // },
  ];

  const displayedPosts = showAll ? allBlogPosts : allBlogPosts.slice(0, 3);

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
  };

  // Fetch blogs from Firebase
  useEffect(() => {
    const refBlogs = dbRef(database, "blogs");
    const unsubscribe = onValue(refBlogs, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const arr = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setFirebaseBlogs(arr.reverse());
      } else {
        setFirebaseBlogs([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch blog meta for firebase blogs
  useEffect(() => {
    const fetchMeta = async () => {
      const metas = await Promise.all(
        firebaseBlogs.map(async (blog) => {
          try {
            const res = await fetch(
              `https://api.allorigins.win/get?url=${encodeURIComponent(blog.link)}`
            );
            const data = await res.json();
            const html = data.contents;

            // Extract og:title
            const ogTitleMatch = html.match(
              /property=["']og:title["'] content=["']([^"']+)["']/i
            );
            let title = "";
            if (ogTitleMatch) {
              title = ogTitleMatch[1].trim();
            } else {
              const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
              title = h1Match
                ? h1Match[1].replace(/<[^>]+>/g, "").trim()
                : "";
            }

            // Extract og:image
            const imgMatch = html.match(
              /property=["']og:image["'] content=["']([^"']+)["']/i
            );
            const image = imgMatch ? imgMatch[1] : null;

            // Extract og:description
            const descMatch = html.match(
              /property=["']og:description["'] content=["']([^"']+)["']/i
            );
            const excerpt = descMatch ? descMatch[1] : "";

            // Extract og:category or category if available
            const catMatch = html.match(
              /property=["']article:section["'] content=["']([^"']+)["']/i
            );
            const category = catMatch ? catMatch[1] : "";

            return { ...blog, title, image, excerpt, category };
          } catch {
            return {
              ...blog,
              title: "",
              image: "",
              excerpt: "",
              category: "",
            };
          }
        })
      );
      setFirebaseBlogsMeta(metas);
    };
    if (firebaseBlogs.length > 0) fetchMeta();
    else setFirebaseBlogsMeta([]);
  }, [firebaseBlogs]);

  // Combine firebase blogs (first) and static blogs (after)
  const allBlogs = [...firebaseBlogsMeta, ...allBlogPosts];

  // Get unique categories from both firebase and static blogs
  const categories = Array.from(
    new Set(allBlogs.map((b) => b.category).filter(Boolean))
  );

  // Show only 3 blogs if not showAll, otherwise show all
  const displayedBlogs = showAll ? allBlogs : allBlogs.slice(0, 3);

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
            {displayedBlogs.length === 0 && (
              <div
                style={{
                  color: "#888",
                  textAlign: "center",
                  width: "100%",
                  padding: "40px 0",
                  fontSize: "1.1rem",
                }}
              >
                No blogs available.
              </div>
            )}
            {displayedBlogs.map((blog, index) => (
              <Col lg={4} md={6} key={blog.id || blog.link} className="mb-4">
                <Card
                  className="blog-card border-0 h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="blog-img-wrapper">
                    {blog.image ? (
                      <Card.Img
                        variant="top"
                        src={blog.image}
                        alt={blog.title}
                        className="blog-img"
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: 180,
                          background: "#eee",
                        }}
                      />
                    )}
                    <div className="blog-overlay">
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more-btn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="blog-title h5 mb-3">
                      {blog.title || "Loading..."}
                    </Card.Title>
                    <Card.Text className="blog-excerpt">
                      {blog.excerpt}
                    </Card.Text>
                    {blog.category && (
                      <div className="blog-category">{blog.category}</div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {allBlogs.length > 3 && (
            <div className="text-center mt-5" data-aos="fade-up">
              <button
                className="view-all-btn"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Show Less" : "View All Posts"}
                <i
                  className={`bi bi-arrow-${showAll ? "up" : "down"} ms-2`}
                ></i>
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Blog;
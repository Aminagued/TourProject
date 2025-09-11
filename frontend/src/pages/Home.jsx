// pages/Home.js
import Contact from "./Contact";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BenYadjis</h1>
          <p>
            Discover amazing places and culinary experiences around the world
          </p>
          <button className="cta-button">Explore Now</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose TravelEase?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-map-marked-alt"></i>
              <h3>Best Destinations</h3>
              <p>
                Discover curated travel destinations recommended by our
                community
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-utensils"></i>
              <h3>Top Restaurants</h3>
              <p>
                Find and reserve tables at the best restaurants and fast food
                places
              </p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Community Driven</h3>
              <p>
                Share experiences and get recommendations from fellow travelers
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;

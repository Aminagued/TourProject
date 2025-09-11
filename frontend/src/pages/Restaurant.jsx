import { useState } from "react";
import "./Restaurant.scss";

const Restaurants = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Sunset Grill",
      type: "Fine Dining",
      cuisine: "International",
      rating: 4.8,
      price: "$$$$",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Upscale dining experience with panoramic views and exquisite cuisine.",
      location: "Beachfront, Main Street",
    },
    {
      id: 2,
      name: "Burger Haven",
      type: "Fast Food",
      cuisine: "American",
      rating: 4.5,
      price: "$",
      image:
        "https://images.unsplash.com/photo-1687945512099-400cbe94460c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The best burgers in town with a variety of options for everyone.",
      location: "Downtown, Food Court",
    },
    {
      id: 3,
      name: "Pasta Paradise",
      type: "Casual Dining",
      cuisine: "Italian",
      rating: 4.7,
      price: "$$",
      image:
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Authentic Italian pasta dishes made with fresh ingredients.",
      location: "Little Italy District",
    },
    {
      id: 4,
      name: "Sushi Sensation",
      type: "Fine Dining",
      cuisine: "Japanese",
      rating: 4.9,
      price: "$$$",
      image:
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Expertly crafted sushi and traditional Japanese dishes.",
      location: "Business District",
    },
    {
      id: 5,
      name: "Taco Time",
      type: "Fast Food",
      cuisine: "Mexican",
      rating: 4.3,
      price: "$",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Authentic Mexican street tacos with a modern twist.",
      location: "Market Square",
    },
    {
      id: 6,
      name: "The Green Leaf",
      type: "Casual Dining",
      cuisine: "Vegetarian",
      rating: 4.6,
      price: "$$",
      image:
        "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Plant-based cuisine that delights even the most avid meat lovers.",
      location: "Eco District",
    },
  ];

  const filteredRestaurants =
    activeTab === "all"
      ? restaurants
      : restaurants.filter(
          (restaurant) =>
            restaurant.type === activeTab || restaurant.cuisine === activeTab
        );

  const handleReservation = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowReservationModal(true);
  };

  const closeModal = () => {
    setShowReservationModal(false);
    setSelectedRestaurant(null);
  };

  return (
    <div className="restaurants-page">
      <div className="restaurants-hero">
        <div className="container">
          <h1>Best Restaurants & Fast Foods</h1>
          <p>Discover amazing culinary experiences curated by our community</p>
        </div>
      </div>

      <div className="container">
        <div className="filters-section">
          <h2>Find Your Perfect Dining Experience</h2>
          <div className="filter-tabs">
            <button
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              All Restaurants
            </button>
            <button
              className={activeTab === "Fine Dining" ? "active" : ""}
              onClick={() => setActiveTab("Fine Dining")}
            >
              Fine Dining
            </button>
            <button
              className={activeTab === "Casual Dining" ? "active" : ""}
              onClick={() => setActiveTab("Casual Dining")}
            >
              Casual Dining
            </button>
            <button
              className={activeTab === "Fast Food" ? "active" : ""}
              onClick={() => setActiveTab("Fast Food")}
            >
              Fast Food
            </button>
          </div>
        </div>

        <div className="restaurants-grid">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="card-image">
                <img src={restaurant.image} alt={restaurant.name} />
                <div className="card-overlay">
                  <span className="price-tag">{restaurant.price}</span>
                  <span className="rating">
                    <i className="fas fa-star"></i> {restaurant.rating}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3>{restaurant.name}</h3>
                <div className="restaurant-meta">
                  <span className="type">{restaurant.type}</span>
                  <span className="cuisine">{restaurant.cuisine}</span>
                </div>
                <p className="description">{restaurant.description}</p>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {restaurant.location}
                </p>
                <button
                  className="reserve-btn"
                  onClick={() => handleReservation(restaurant)}
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showReservationModal && selectedRestaurant && (
        <div className="modal-overlay">
          <div className="reservation-modal">
            <div className="modal-header">
              <h2>Reserve a Table at {selectedRestaurant.name}</h2>
              <button className="close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="reservation-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Your phone number" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="time" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Number of Guests</label>
                  <select required>
                    <option value="">Select guests</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5+ people</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea placeholder="Any special requirements or requests"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurants;

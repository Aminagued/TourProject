import { useState } from "react";
import "./Destinations.scss";

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Sample destination data
  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      type: "Beach",
      country: "Greece",
      rating: 4.9,
      price: "$$$",
      image:
        "https://images.unsplash.com/photo-1634319416906-4b8d7bb5eb4b?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
      bestTime: "April to November",
      attractions: ["Oia Village", "Red Beach", "Ancient Thera", "Wine Tours"],
      travelTips:
        "Book accommodations early during peak season. Rent an ATV for easy island exploration.",
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      type: "Cultural",
      country: "Japan",
      rating: 4.8,
      price: "$$",
      image:
        "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Ancient capital known for its temples, gardens, and traditional geisha culture.",
      bestTime: "March to May, October to November",
      attractions: [
        "Fushimi Inari Shrine",
        "Kinkaku-ji Temple",
        "Arashiyama Bamboo Forest",
        "Gion District",
      ],
      travelTips:
        "Visit temples early to avoid crowds. Experience a traditional tea ceremony.",
    },
    {
      id: 3,
      name: "Swiss Alps",
      type: "Adventure",
      country: "Switzerland",
      rating: 4.7,
      price: "$$$$",
      image:
        "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Majestic mountain range offering world-class skiing, hiking, and breathtaking scenery.",
      bestTime: "December to March (skiing), June to September (hiking)",
      attractions: ["Jungfraujoch", "Matterhorn", "Interlaken", "Lucerne"],
      travelTips:
        "Get a Swiss Travel Pass for transportation. Pack layers for changing weather conditions.",
    },
    {
      id: 4,
      name: "Machu Picchu",
      type: "Historical",
      country: "Peru",
      rating: 4.9,
      price: "$$",
      image:
        "https://images.unsplash.com/photo-1603566541830-972ff1b4b2cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Ancient Incan citadel set high in the Andes Mountains, one of the New Seven Wonders.",
      bestTime: "April to October",
      attractions: [
        "Sun Gate",
        "Inca Trail",
        "Huayna Picchu",
        "Temple of the Sun",
      ],
      travelTips:
        "Acclimate to altitude in Cusco first. Book permits months in advance for Inca Trail.",
    },
    {
      id: 5,
      name: "Maldives",
      type: "Beach",
      country: "Maldives",
      rating: 4.8,
      price: "$$$$",
      image:
        "https://images.unsplash.com/photo-1696914083279-3ce7756f41a4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Tropical paradise with overwater bungalows, coral reefs, and pristine white sand beaches.",
      bestTime: "November to April",
      attractions: ["Male", "Coral Reefs", "Local Islands", "Water Villas"],
      travelTips:
        "Choose between resort islands or local islands for different experiences. Great for snorkeling.",
    },
    {
      id: 6,
      name: "New York City",
      type: "Urban",
      country: "USA",
      rating: 4.6,
      price: "$$$",
      image:
        "https://plus.unsplash.com/premium_photo-1699566448055-671c8dbcc7ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The bustling metropolis known for its iconic skyline, cultural diversity, and endless activities.",
      bestTime: "April to June, September to November",
      attractions: [
        "Statue of Liberty",
        "Central Park",
        "Times Square",
        "Broadway Shows",
      ],
      travelTips:
        "Get a MetroCard for subway access. Book Broadway tickets in advance for better prices.",
    },
    {
      id: 7,
      name: "Serengeti National Park",
      type: "Adventure",
      country: "Tanzania",
      rating: 4.7,
      price: "$$$",
      image:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Famous for its annual migration of over 1.5 million wildebeest and 250,000 zebras.",
      bestTime: "June to October (migration), January to February (calving)",
      attractions: [
        "Great Migration",
        "Big Five Safari",
        "Hot Air Balloon Ride",
        "Maasai Culture",
      ],
      travelTips:
        "Choose the right season based on what you want to see. Pack neutral-colored clothing.",
    },
    {
      id: 8,
      name: "Paris, France",
      type: "Cultural",
      country: "France",
      rating: 4.8,
      price: "$$$",
      image:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The City of Light known for its art, fashion, gastronomy, and culture.",
      bestTime: "April to June, October to November",
      attractions: [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame",
        "Champs-Élysées",
      ],
      travelTips:
        "Purchase museum passes to skip lines. Enjoy picnics in beautiful parks.",
    },
  ];

  const filteredDestinations =
    activeFilter === "all"
      ? destinations
      : destinations.filter((destination) => destination.type === activeFilter);

  const viewDestinationDetails = (destination) => {
    setSelectedDestination(destination);
    setShowDetailModal(true);
  };

  const closeModal = () => {
    setShowDetailModal(false);
    setSelectedDestination(null);
  };

  return (
    <div className="destinations-page">
      <div className="destinations-hero">
        <div className="container">
          <h1>Discover Amazing Destinations</h1>
          <p>
            Explore the world's most beautiful places curated by travel experts
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filters-section">
          <h2>Find Your Perfect Getaway</h2>
          <div className="filter-tabs">
            <button
              className={activeFilter === "all" ? "active" : ""}
              onClick={() => setActiveFilter("all")}
            >
              All Destinations
            </button>
            <button
              className={activeFilter === "Beach" ? "active" : ""}
              onClick={() => setActiveFilter("Beach")}
            >
              Lake
            </button>
            <button
              className={activeFilter === "Cultural" ? "active" : ""}
              onClick={() => setActiveFilter("Cultural")}
            >
              Forest
            </button>
            <button
              className={activeFilter === "Adventure" ? "active" : ""}
              onClick={() => setActiveFilter("Adventure")}
            >
              Adventure
            </button>
            <button
              className={activeFilter === "Historical" ? "active" : ""}
              onClick={() => setActiveFilter("Historical")}
            >
              Historical
            </button>
            <button
              className={activeFilter === "Urban" ? "active" : ""}
              onClick={() => setActiveFilter("Urban")}
            >
              Urban
            </button>
          </div>
        </div>

        <div className="destinations-grid">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="card-image">
                <img src={destination.image} alt={destination.name} />
                <div className="card-overlay">
                  <span className="price-tag">{destination.price}</span>
                  <span className="rating">
                    <i className="fas fa-star"></i> {destination.rating}
                  </span>
                </div>
                <div className="type-badge">{destination.type}</div>
              </div>
              <div className="card-content">
                <h3>{destination.name}</h3>
                <p className="country">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  {destination.country}
                </p>
                <p className="description">{destination.description}</p>
                <div className="best-time">
                  <strong>Best Time to Visit:</strong> {destination.bestTime}
                </div>
                <button
                  className="explore-btn"
                  onClick={() => viewDestinationDetails(destination)}
                >
                  Explore Destination
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDetailModal && selectedDestination && (
        <div className="modal-overlay">
          <div className="destination-modal">
            <div className="modal-header">
              <h2>
                {selectedDestination.name}, {selectedDestination.country}
              </h2>
              <button className="close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                />
                <div className="image-overlay">
                  <span className="type-badge">{selectedDestination.type}</span>
                  <span className="rating">
                    <i className="fas fa-star"></i> {selectedDestination.rating}
                  </span>
                </div>
              </div>

              <div className="modal-content">
                <p className="description">{selectedDestination.description}</p>

                <div className="details-section">
                  <h3>Best Time to Visit</h3>
                  <p>{selectedDestination.bestTime}</p>
                </div>

                <div className="details-section">
                  <h3>Top Attractions</h3>
                  <div className="attractions-list">
                    {selectedDestination.attractions.map(
                      (attraction, index) => (
                        <span key={index} className="attraction-tag">
                          {attraction}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="details-section">
                  <h3>Travel Tips</h3>
                  <p>{selectedDestination.travelTips}</p>
                </div>

                <div className="action-buttons">
                  <button className="save-btn">
                    <i className="far fa-bookmark"></i> Save for Later
                  </button>
                  <button className="share-btn">
                    <i className="fas fa-share-alt"></i> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;

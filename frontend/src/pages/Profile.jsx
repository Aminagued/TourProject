import { useState } from "react";
import "./Profile.scss";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isEditing, setIsEditing] = useState(false);

  // Sample user data
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    username: "sarah_adventures",
    email: "sarah@example.com",
    bio: "Travel enthusiast | Photographer | Food lover | Exploring the world one destination at a time 🌍",
    location: "New York, USA",
    joinDate: "January 2023",
    avatar: "https://source.unsplash.com/random/200x200/?portrait,woman",
    coverPhoto: "https://source.unsplash.com/random/1200x400/?travel,landscape",
  });

  // Sample user posts
  const [userPosts, setUserPosts] = useState([
    {
      id: 1,
      content:
        "Just returned from an amazing trip to Bali! The temples, beaches, and food were absolutely incredible. Highly recommend visiting Ubud for its cultural experiences.",
      image: "https://source.unsplash.com/random/600x400/?bali",
      likes: 24,
      comments: 8,
      createdAt: "2 days ago",
      location: "Bali, Indonesia",
    },
    {
      id: 2,
      content:
        "Hidden gem alert! Found this incredible little restaurant in Tokyo's backstreets that serves the best ramen I've ever had.",
      image: "https://source.unsplash.com/random/600x400/?ramen,tokyo",
      likes: 18,
      comments: 5,
      createdAt: "1 week ago",
      location: "Tokyo, Japan",
    },
    {
      id: 3,
      content:
        "Hiking in the Swiss Alps was absolutely breathtaking! The views were worth every step.",
      image: "https://source.unsplash.com/random/600x400/?swiss-alps",
      likes: 32,
      comments: 12,
      createdAt: "2 weeks ago",
      location: "Swiss Alps",
    },
  ]);

  // Sample saved posts
  const [savedPosts, setSavedPosts] = useState([
    {
      id: 101,
      content: "Amazing guide to Italian cuisine - must try these dishes!",
      author: "Food Traveler",
      image: "https://source.unsplash.com/random/600x400/?italian-food",
      createdAt: "3 days ago",
    },
    {
      id: 102,
      content: "Best hiking trails in South America with incredible views",
      author: "Adventure Seeker",
      image: "https://source.unsplash.com/random/600x400/?hiking",
      createdAt: "1 week ago",
    },
  ]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Here you would typically save the data to your backend
    setIsEditing(false);
    console.log("Profile saved:", userData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeletePost = (postId) => {
    setUserPosts(userPosts.filter((post) => post.id !== postId));
  };

  const handleUnsavePost = (postId) => {
    setSavedPosts(savedPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="profile-page">
      {/* Cover Photo */}
      <div className="cover-photo">
        <img src={userData.coverPhoto} alt="Cover" />
        <div className="cover-overlay"></div>
      </div>

      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="avatar-section">
            <div className="avatar-container">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="profile-avatar"
              />
              <button className="edit-avatar-btn">
                <i className="fas fa-camera"></i>
              </button>
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-main">
              <h1>{userData.name}</h1>
              <p className="username">@{userData.username}</p>
              <p className="bio">{userData.bio}</p>

              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">{userPosts.length}</span>
                  <span className="stat-label">Posts</span>
                </div>
                <div className="stat">
                  <span className="stat-number">256</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">134</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>
            </div>

            <div className="profile-actions">
              <button
                className="edit-profile-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                <i className="fas fa-edit"></i>
                {isEditing ? "Cancel Editing" : "Edit Profile"}
              </button>
              <button className="settings-btn">
                <i className="fas fa-cog"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="profile-content">
          {/* Navigation Tabs */}
          <div className="profile-tabs">
            <button
              className={activeTab === "posts" ? "active" : ""}
              onClick={() => setActiveTab("posts")}
            >
              <i className="fas fa-th-large"></i> Posts
            </button>
            <button
              className={activeTab === "saved" ? "active" : ""}
              onClick={() => setActiveTab("saved")}
            >
              <i className="fas fa-bookmark"></i> Saved
            </button>
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              <i className="fas fa-star"></i> Reviews
            </button>
          </div>

          {/* Edit Profile Form */}
          {isEditing && (
            <div className="edit-profile-form">
              <h2>Edit Profile</h2>
              <form onSubmit={handleSaveProfile}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    value={userData.bio}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={userData.location}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Posts Tab */}
          {activeTab === "posts" && (
            <div className="posts-tab">
              <h2>Your Posts</h2>
              <div className="user-posts">
                {userPosts.map((post) => (
                  <div key={post.id} className="post-card">
                    <div className="post-content">
                      <p>{post.content}</p>
                      {post.image && (
                        <div className="post-image">
                          <img src={post.image} alt="Post" />
                        </div>
                      )}
                      <div className="post-meta">
                        <span className="location">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {post.location}
                        </span>
                        <span className="date">{post.createdAt}</span>
                      </div>
                    </div>
                    <div className="post-stats">
                      <span className="likes">
                        <i className="fas fa-heart"></i> {post.likes}
                      </span>
                      <span className="comments">
                        <i className="fas fa-comment"></i> {post.comments}
                      </span>
                    </div>
                    <button
                      className="delete-post-btn"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Tab */}
          {activeTab === "saved" && (
            <div className="saved-tab">
              <h2>Saved Posts</h2>
              <div className="saved-posts">
                {savedPosts.map((post) => (
                  <div key={post.id} className="saved-post-card">
                    <div className="saved-post-content">
                      <p>{post.content}</p>
                      {post.image && (
                        <div className="saved-post-image">
                          <img src={post.image} alt="Saved post" />
                        </div>
                      )}
                      <div className="saved-post-meta">
                        <span className="author">By {post.author}</span>
                        <span className="date">{post.createdAt}</span>
                      </div>
                    </div>
                    <button
                      className="unsave-btn"
                      onClick={() => handleUnsavePost(post.id)}
                    >
                      <i className="fas fa-bookmark"></i> Unsave
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="reviews-tab">
              <h2>Your Reviews</h2>
              <div className="reviews-placeholder">
                <i className="fas fa-star"></i>
                <p>You haven't written any reviews yet.</p>
                <button className="write-review-btn">
                  Write Your First Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

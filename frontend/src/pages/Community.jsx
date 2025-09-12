import { useState } from "react";
import "./Community.scss";

const Community = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "https://source.unsplash.com/random/100x100/?portrait,woman",
        location: "New York, USA",
      },
      content:
        "Just returned from an amazing trip to Bali! The temples, beaches, and food were absolutely incredible. Highly recommend visiting Ubud for its cultural experiences and Seminyak for beach relaxation.",
      image: "https://source.unsplash.com/random/600x400/?bali",
      likes: 24,
      comments: 8,
      createdAt: "2 days ago",
      tags: ["Bali", "Travel", "Beach"],
    },
    {
      id: 2,
      user: {
        name: "Mike Chen",
        avatar: "https://source.unsplash.com/random/100x100/?portrait,man",
        location: "Toronto, Canada",
      },
      content:
        "Hidden gem alert! Found this incredible little restaurant in Tokyo's backstreets that serves the best ramen I've ever had. The broth was rich and flavorful, and the noodles were perfectly cooked.",
      image: "https://source.unsplash.com/random/600x400/?ramen,tokyo",
      likes: 18,
      comments: 5,
      createdAt: "3 days ago",
      tags: ["Tokyo", "Food", "Ramen"],
    },
    {
      id: 3,
      user: {
        name: "Emma Rodriguez",
        avatar: "https://source.unsplash.com/random/100x100/?portrait,woman2",
        location: "Madrid, Spain",
      },
      content:
        "Hiking in the Swiss Alps was absolutely breathtaking! The views were worth every step. Pro tip: start early to avoid crowds and bring layers - weather changes quickly in the mountains!",
      image: "https://source.unsplash.com/random/600x400/?swiss-alps",
      likes: 32,
      comments: 12,
      createdAt: "5 days ago",
      tags: ["Switzerland", "Hiking", "Adventure"],
    },
  ]);

  const [newPost, setNewPost] = useState({
    content: "",
    image: "",
    tags: "",
  });

  const handleCreatePost = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      user: {
        name: "Current User",
        avatar: "https://source.unsplash.com/random/100x100/?portrait",
        location: "Your Location",
      },
      content: newPost.content,
      image: newPost.image,
      likes: 0,
      comments: 0,
      createdAt: "Just now",
      tags: newPost.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    setPosts([post, ...posts]);
    setNewPost({ content: "", image: "", tags: "" });
    setShowCreateModal(false);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="community-page">
      <div className="community-hero">
        <div className="container">
          <h1>Travel Community</h1>
          <p>
            Share your experiences, get inspired, and connect with fellow
            travelers
          </p>
        </div>
      </div>

      <div className="container">
        <div className="community-header">
          <div className="header-content">
            <h2>Recent Posts</h2>
            <p>
              Discover what other travelers are sharing from around the world
            </p>
          </div>
          <button
            className="create-post-btn"
            onClick={() => setShowCreateModal(true)}
          >
            <i className="fas fa-plus"></i> Create Post
          </button>
        </div>

        <div className="filters-section">
          <div className="filter-tabs">
            <button
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              All Posts
            </button>
            <button
              className={activeTab === "popular" ? "active" : ""}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
            <button
              className={activeTab === "recent" ? "active" : ""}
              onClick={() => setActiveTab("recent")}
            >
              Recent
            </button>
          </div>
        </div>

        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div className="user-info">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="user-avatar"
                  />
                  <div className="user-details">
                    <h4>{post.user.name}</h4>
                    <p>{post.user.location}</p>
                  </div>
                </div>
                <span className="post-time">{post.createdAt}</span>
              </div>

              <div className="post-content">
                <p>{post.content}</p>
                {post.image && (
                  <div className="post-image">
                    <img src={post.image} alt="Post visual" />
                  </div>
                )}
              </div>

              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="post-actions">
                <button
                  className="action-btn like-btn"
                  onClick={() => handleLike(post.id)}
                >
                  <i className="fas fa-heart"></i> {post.likes}
                </button>
                <button className="action-btn comment-btn">
                  <i className="fas fa-comment"></i> {post.comments}
                </button>
                <button className="action-btn share-btn">
                  <i className="fas fa-share"></i> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCreateModal && (
        <div className="modal-overlay">
          <div className="create-post-modal">
            <div className="modal-header">
              <h2>Create New Post</h2>
              <button
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="post-form">
              <div className="form-group">
                <label>Share your experience</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) =>
                    setNewPost({ ...newPost, content: e.target.value })
                  }
                  placeholder="What would you like to share with the community?"
                  rows="5"
                  required
                />
              </div>

              <div className="form-group">
                <label>Image URL (optional)</label>
                <input
                  type="url"
                  value={newPost.image}
                  onChange={(e) =>
                    setNewPost({ ...newPost, image: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="form-group">
                <label>Tags (comma separated)</label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) =>
                    setNewPost({ ...newPost, tags: e.target.value })
                  }
                  placeholder="Travel, Food, Adventure"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Post to Community
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;

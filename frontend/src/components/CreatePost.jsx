import { useState } from "react";
import "./CreatePost.scss";

const CreatePost = ({ onPostCreated }) => {
  const [postData, setPostData] = useState({
    content: "",
    image: null,
    imagePreview: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostData({
          ...postData,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPostData({
      ...postData,
      image: null,
      imagePreview: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const newPost = {
        id: Date.now(),
        content: postData.content,
        image: postData.imagePreview,
        createdAt: "Just now",
        likes: 0,
        comments: [],
        user: {
          name: "Current User",
          avatar: "https://source.unsplash.com/random/100x100/?portrait",
        },
      };

      onPostCreated(newPost);

      // Reset form
      setPostData({
        content: "",
        image: null,
        imagePreview: "",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="create-post-card">
      <div className="create-post-header">
        <h3>Create a Post</h3>
      </div>

      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <textarea
            name="content"
            value={postData.content}
            onChange={handleInputChange}
            placeholder="What's on your mind?"
            rows="3"
            required
          />
        </div>

        {postData.imagePreview && (
          <div className="image-preview">
            <img src={postData.imagePreview} alt="Preview" />
            <button
              type="button"
              className="remove-image-btn"
              onClick={handleRemoveImage}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}

        <div className="create-post-actions">
          <div className="action-buttons">
            <label htmlFor="image-upload" className="image-upload-btn">
              <i className="fas fa-image"></i> Add Photo
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <button
            type="submit"
            className="post-submit-btn"
            disabled={isLoading || !postData.content.trim()}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

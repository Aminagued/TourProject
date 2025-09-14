import { useState } from "react";
import "./Comment.scss";

const Comment = ({ comment, onReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText("");
      setShowReplyForm(false);
    }
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <img
          src={comment.user.avatar}
          alt={comment.user.name}
          className="comment-avatar"
        />
        <div className="comment-user-info">
          <h4>{comment.user.name}</h4>
          <span className="comment-time">{comment.createdAt}</span>
        </div>
      </div>

      <div className="comment-content">
        <p>{comment.content}</p>
      </div>

      <div className="comment-actions">
        <button
          className="action-btn"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          <i className="fas fa-reply"></i> Reply
        </button>
      </div>

      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="reply-form">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            rows="2"
            required
          />
          <div className="reply-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setShowReplyForm(false)}
            >
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Post Reply
            </button>
          </div>
        </form>
      )}

      {/* Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;

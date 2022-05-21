import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/reducers/postsSlice";

import "./editpostmodal.css";
export function EditPostModal({ showEditModal, setShowEditModal, post }) {
  const [updatedPost, setUpdatedPost] = useState({ ...post });
  const dispatch = useDispatch();
  return (
    <div
      className={`sm-modal-main ${showEditModal ? "sm-modal-main-show" : ""}`}
    >
      <div className="sm-modal-content">
        <button
          id="btn btn-primary"
          className="sm-card-dismiss"
          title="Dismiss"
          onClick={() => setShowEditModal((p) => !p)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="sm-modal-title fw-700"> Edit Post Content</div>

        <div className="sm-home-new-post-conatiner">
          <textarea
            type="text"
            autoFocus
            rows="4"
            className="sm-home-text-area"
            value={updatedPost.content}
            onChange={(e) =>
              setUpdatedPost((prev) => ({ content: e.target.value }))
            }
          ></textarea>{" "}
          <button
            className="btn btn-primary btn-bold btn-round "
            title="Smash It!!"
            disabled={updatedPost.content === "" ? true : false}
            onClick={() => {
              dispatch(
                editPost({
                  postId: post?._id,
                  postData: updatedPost,
                })
              );
              setShowEditModal((p) => !p);
            }}
          >
            <span>Smash</span>
          </button>
        </div>
      </div>
    </div>
  );
}

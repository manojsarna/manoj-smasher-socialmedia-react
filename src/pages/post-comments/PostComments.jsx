import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CommentCard, LeftSideBar, Post, RightSideBar } from "../../components";
import { postComment } from "../../redux/reducers/postsSlice";
import { InfinitySpin as Loader } from "react-loader-spinner";
import "./postcomments.css";
import { toast } from "react-toastify";

export function PostComments() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const allPosts = useSelector((state) => state.posts.posts);
  const currentPost = allPosts.find((item) => item._id === postId);
  const loading = useSelector((state) => state.posts.loading);
  const [comment, setComment] = useState("");

  let finalComments = [...currentPost.comments];

  finalComments = finalComments.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <main className="sm-main">
      <LeftSideBar />
      <div className="sm-content-area">
        <div className="sm-main-user-comment-container">
          <p className="sm-main-heading">Comments</p>
          <Post key={currentPost._id} post={currentPost} />
          <div className="sm-add-comments">
            <input
              type="text"
              placeholder="Enter Comment..."
              name="valid"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className="sm-comment-btn"
              onClick={() => {
                if (comment !== "") {
                  dispatch(
                    postComment({ postId, commentData: { text: comment } })
                  );
                  setComment("");
                } else {
                  toast.error("Empty Comment. Please Try Again!");
                }
              }}
            >
              Comment
            </button>
          </div>
          <div className="sm-show-comments">
            {finalComments.map((comment) => (
              <CommentCard
                key={comment._id}
                postId={postId}
                comment={comment}
              />
            ))}
          </div>
        </div>
      </div>
      {loading && (
        <div className="sm-react-loader-spinner">
          <Loader />
        </div>
      )}
      <RightSideBar />
    </main>
  );
}

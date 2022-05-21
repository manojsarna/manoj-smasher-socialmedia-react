import "./commentcard.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { MdDelete } from "react-icons/md/";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { deleteComment } from "../../redux/reducers/postsSlice";
export function CommentCard({ postId, comment }) {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  return (
    <div className="sm-single-comment-container">
      <Link to={`/${comment.username}`} className="sm-home-avatar">
        <div title="Go To Profile">
          <div className="avatar avatar-hover s-s ">
            <img src={`${comment.profilePhoto}`} alt="badminton" />
          </div>
        </div>
      </Link>
      <div className="sm-single-post-content">
        <div className="sm-post-user-info-date">
          <Link
            to={`/${comment.username}`}
            className="sm-remove-link-props"
            title="Go To Profile"
          >
            <span className="sm-post-name">{`${comment.firstName} ${comment.lastName} `}</span>
            <span className="sm-post-username">{`  @${comment.username} `}</span>
          </Link>
          <span className="sm-dot-separator"></span>
          <span
            className="sm-post-date"
            title={dayjs(comment.createdAt).format("MMM DD,YYYY hh:mm A")}
          >{` ${
            width > 480
              ? dayjs(comment.createdAt).format("MMM DD,YYYY")
              : dayjs(comment.createdAt).format("MMM DD")
          }`}</span>
        </div>
        <div className="sm-post-content-container">
          <span className="sm-post-content">{comment.text}</span>
        </div>
      </div>
      <div
        className="sm-comment-delete-btn"
        onClick={() => {
          dispatch(
            deleteComment({
              postId,
              commentId: comment._id,
            })
          );
        }}
      >
        <MdDelete />
      </div>
    </div>
  );
}

import "./post.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import dayjs from "dayjs";
import {
  FaRegComment,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaEdit,
} from "react-icons/fa/";
import { MdDelete } from "react-icons/md/";

import { formatNumber } from "../../hooks/formatNumber";
import {
  addToBookmarks,
  deletePost,
  dislikePost,
  likePost,
  removeFromBookmarks,
} from "../../redux/reducers/postsSlice";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useState } from "react";
import { EditPostModal } from "./EditPostModal";
export function Post({ post }) {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const user = useSelector((state) => state.auth.user);
  const bookmarks = useSelector((state) => state.posts.bookmarks);
  const isPostLikedByUser = post.likes.likedBy?.some(
    (item) => item.username === user.username
  )
    ? true
    : false;

  const isPostBookmarkedByUser = bookmarks.some((id) => id === post._id)
    ? true
    : false;

  const { pathname } = useLocation();
  const { username } = useParams();
  const allUsers = useSelector((state) => state.users.users);
  const profileUser = allUsers.find((user) => user.username === username);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
  const isLoggedInUser = user?.username === profileUser?.username;

  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="sm-single-post-container">
      <Link to={`/${post.username}`} className="sm-home-avatar">
        <div title="Go To Profile">
          <div className="avatar avatar-hover s-s ">
            <img
              src={
                post.username === loginUserDetails?.username
                  ? loginUserDetails?.profilePhoto
                  : post.profilePhoto
              }
              alt="badminton"
            />
          </div>
        </div>
      </Link>
      <div className="sm-single-post-content">
        <div className="sm-post-user-info-date">
          <Link
            to={`/${post.username}`}
            className="sm-remove-link-props"
            title="Go To Profile"
          >
            <span className="sm-post-name">{`${post.firstName} ${post.lastName} `}</span>
            <span className="sm-post-username">{`  @${post.username} `}</span>
          </Link>
          <span className="sm-dot-separator"></span>
          <span
            className="sm-post-date"
            title={dayjs(post.createdAt).format("MMM DD,YYYY hh:mm A")}
          >{` ${
            width > 480
              ? dayjs(post.createdAt).format("MMM DD,YYYY")
              : dayjs(post.createdAt).format("MMM DD")
          }`}</span>
        </div>
        <div className="sm-post-content-container">
          <span className="sm-post-content">{post.content}</span>
          {post.postImage && (
            <div className="sm-post-content-image-container">
              <img src={post.postImage} alt="badminton" />
            </div>
          )}
        </div>
        <div className="sm-post-cta-container">
          <Link to={`/${user.username}/${post._id}`} className="sm-comment-cta">
            <span className="sm-cta-comment" title="Post Comments">
              <FaRegComment />
              <span className="sm-cta-like-count">
                {post.comments.length !== 0 &&
                  formatNumber(post.comments.length)}
              </span>
            </span>
          </Link>

          <span
            className="sm-cta-like"
            title={`${isPostLikedByUser ? "Dislike Post" : "Like Post"}`}
            onClick={() => {
              isPostLikedByUser
                ? dispatch(dislikePost(post._id))
                : dispatch(likePost(post._id));
            }}
          >
            {isPostLikedByUser ? <FaHeart /> : <FaRegHeart />}

            <span className="sm-cta-like-count">
              {post.likes.likeCount !== 0 && formatNumber(post.likes.likeCount)}
            </span>
          </span>
          <span
            className="sm-cta-bookmark"
            title={`${
              isPostBookmarkedByUser
                ? "Remove from Bookmarks"
                : "Add to Bookmarks"
            }`}
            onClick={() => {
              isPostBookmarkedByUser
                ? dispatch(removeFromBookmarks(post._id))
                : dispatch(addToBookmarks(post._id));
            }}
          >
            {isPostBookmarkedByUser ? <FaBookmark /> : <FaRegBookmark />}
          </span>
          {isLoggedInUser && pathname === `/${username}` && (
            <>
              <span
                className="sm-cta-edit"
                title="Edit Post"
                onClick={() => {
                  setShowEditModal((p) => !p);
                }}
              >
                <FaEdit />
              </span>
              <span
                className="sm-cta-delete"
                title="Delete Post"
                onClick={() => dispatch(deletePost(post?._id))}
              >
                <MdDelete />
              </span>
            </>
          )}
        </div>
      </div>
      <EditPostModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        post={post}
      />
    </div>
  );
}

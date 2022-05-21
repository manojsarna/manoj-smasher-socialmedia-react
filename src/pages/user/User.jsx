import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { LeftSideBar, Post, RightSideBar } from "../../components";
import { InfinitySpin as Loader } from "react-loader-spinner";
import { useDocTitle } from "../../hooks/useDocTitle";
import { logout } from "../../redux/reducers/authSlice";
import "./user.css";
import {
  followUser,
  getUserPost,
  unfollowUser,
} from "../../redux/reducers/usersSlice";
import { toast } from "react-toastify";
import { EditUserProfile } from "./edit-user-profile/EditUserProfile";

export function User() {
  useDocTitle("User Profile - Smasher - Manoj Sarna");
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const allUsers = useSelector((state) => state.users.users);
  const loggedInUser = useSelector((state) => state.auth.user);
  const loginUserDetails = allUsers.find(
    (user) => user.username === loggedInUser.username
  );
  const profileUser = allUsers.find((user) => user.username === username);
  let currentUser =
    loginUserDetails?.username === profileUser?.username
      ? loginUserDetails
      : profileUser;

  let currentUserPosts = useSelector((state) => state.users.profileUserPosts);
  const loading = useSelector((state) => state.users.loading);

  const followingThisUser = loginUserDetails?.following.some(
    (user) => user.username === profileUser?.username
  );

  let allPosts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    if (currentUser) {
      dispatch(getUserPost(currentUser.username));
    } else {
      toast.error("User Not Found");
      navigate("/");
    }
  }, [currentUser, dispatch, navigate, allPosts]);

  return (
    <main className="sm-main">
      <LeftSideBar />
      <div className="sm-content-area">
        <div className="sm-main-user-profile-container">
          <div className="sm-main-user-profile">
            <p className="sm-main-heading">
              {`${currentUser?.firstName} ${currentUser?.lastName}'s `}
              Profile
            </p>

            {loginUserDetails?.username === profileUser?.username ? (
              <div className="sm-user-profile-cta">
                <button
                  className="sm-category-outline-btn sm-active"
                  title="Edit Profile"
                  onClick={() => {
                    setShowEditProfile((p) => !p);
                  }}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="sm-category-outline-btn sm-active"
                  title="Share Profile"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(
                      `https://smasher-react.netlify.app/${loginUserDetails.username}`
                    );
                    toast.success(`Profile Link Copied`);
                  }}
                >
                  <i className="fas fa-share-alt"></i>
                </button>
                <button
                  className="sm-category-outline-btn sm-active"
                  title="Logout Now"
                  onClick={() => dispatch(logout())}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </div>
            ) : (
              <div className="sm-user-profile-cta">
                <button
                  className="sm-category-outline-btn sm-active"
                  title="Share Profile"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(
                      `https://smasher-react.netlify.app/${profileUser.username}`
                    );
                    toast.success(`Profile Link Copied`);
                  }}
                >
                  <i className="fas fa-share-alt"></i>
                </button>
                <button
                  className="btn btn-primary btn-bolder btn-round"
                  title={followingThisUser ? "Unfollow" : "Follow"}
                  onClick={() => {
                    if (followingThisUser) {
                      dispatch(unfollowUser({ followUserId: profileUser._id }));
                    } else {
                      dispatch(followUser({ followUserId: profileUser._id }));
                    }
                  }}
                >
                  {followingThisUser ? "Unfollow" : "Follow"}
                </button>
              </div>
            )}
          </div>

          <div className="sm-user-profile-main">
            <div className="avatar avatar-hover s-xl">
              <img src={`${currentUser?.profilePhoto}`} alt="badminton" />
            </div>
            <div className="sm-user-profile-content">
              <div className="sm-user-profile-content-username">{`@${currentUser?.username}`}</div>
              <div className="sm-user-profile-content-bio">{`${currentUser?.bio}`}</div>
              <div className="sm-user-modal-counters">
                <span className="sm-user-profile-count">
                  {currentUserPosts.length}
                </span>
                <span> posts</span>
                <span className="sm-user-profile-count">
                  {currentUser?.followers?.length}
                </span>
                <span>followers</span>
                <span className="sm-user-profile-count">
                  {" "}
                  {currentUser?.following?.length}{" "}
                </span>
                <span>following</span>
              </div>

              <div>
                <a href={currentUser?.website} target="_blank" rel="noreferrer">
                  {currentUser?.website}
                </a>
              </div>
            </div>
          </div>
          {[...currentUserPosts]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post) => (
              <Post key={post._id} post={post} />
            ))}
        </div>
        <EditUserProfile
          showEditProfile={showEditProfile}
          setShowEditProfile={setShowEditProfile}
          user={loginUserDetails}
        />
      </div>

      <RightSideBar />
      {loading && (
        <div className="sm-react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}

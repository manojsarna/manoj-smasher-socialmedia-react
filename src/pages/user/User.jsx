import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { LeftSideBar, Post, RightSideBar } from "../../components";
import { InfinitySpin as Loader } from "react-loader-spinner";
import { useDocTitle } from "../../hooks/useDocTitle";
import { logout } from "../../redux/reducers/authSlice";
import "./user.css";
import { getUserPost } from "../../redux/reducers/usersSlice";
import { toast } from "react-toastify";

export function User() {
  useDocTitle("User Profile - Smasher - Manoj Sarna");
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allUsers = useSelector((state) => state.users.users);
  // Logged In User
  const loggedInUser = useSelector((state) => state.auth.user);
  const profileUser = allUsers.find((user) => user.username === username);
  let currentUser =
    loggedInUser?.username === profileUser?.username
      ? loggedInUser
      : profileUser;

  if (!currentUser) {
  }
  let currentUserPosts = useSelector((state) => state.users.profileUserPosts);
  const loading = useSelector((state) => state.users.loading);

  const [followingThisUser, setFollowingThisUser] = useState(null);

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

            {/* Following User */}
            {loggedInUser?.username === profileUser?.username ? (
              <div className="sm-user-profile-cta">
                <button
                  className="sm-category-outline-btn sm-active"
                  title="Edit Profile"
                >
                  <i className="fas fa-edit"></i>
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
                  className="btn btn-primary btn-bolder btn-round"
                  title={followingThisUser ? "Unfollow" : "Follow"}
                  // onClick={() => {
                  //   if (followingThisUser) {
                  //     dispatch(unfollowUser(profileUser._id));
                  //   } else {
                  //     dispatch(followUser(profileUser._id));
                  //   }
                  // }}
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

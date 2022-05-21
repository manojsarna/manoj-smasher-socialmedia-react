import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function AuthIcon() {
  const user = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.users.users);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user.username
  );
  const navigate = useNavigate();
  return loginUserDetails ? (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary sm-header-nav-user-avatar"
      title={loginUserDetails ? "Go To User Profile" : "Go To Login"}
      onClick={() => navigate(`${loginUserDetails.username}`)}
    >
      <div className="avatar avatar-hover s-xs sm-profile-div-avatar">
        <img src={`${loginUserDetails.profilePhoto}`} alt="badminton" />
      </div>
    </button>
  ) : (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      title={loginUserDetails ? "Go To User Profile" : "Go To Login"}
      onClick={() => navigate("/")}
    >
      <div className="icon">
        <i className="fas fa-sign-in-alt icon-in-btn"></i>
      </div>
    </button>
  );
}

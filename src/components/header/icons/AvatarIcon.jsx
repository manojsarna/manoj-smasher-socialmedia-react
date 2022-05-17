import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function AvatarIcon() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  return (
    user._id && (
      <button
        className="sm-icon-btn color-dm sm-icon-btn-primary sm-header-nav-user-avatar"
        title={user ? "Go To User Profile" : "Go To Login"}
        onClick={() => navigate(`${user.username}`)}
      >
        <div className="avatar avatar-hover s-s">
          <img src={`${user.profilePhoto}`} alt="badminton" />
        </div>
      </button>
    )
  );
}

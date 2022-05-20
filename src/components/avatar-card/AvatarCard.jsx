import { Link } from "react-router-dom";
import "./avatarcard.css";
export function AvatarCard({ user }) {
  return (
    <Link to={`/${user.username}`} className="sm-avatar-link-container">
      <div className="sm-avatar-link-profile" title="Go To Profile">
        <div className="avatar avatar-hover s-s sm-avatar-link-margin">
          <img src={`${user.profilePhoto}`} alt="badminton" />
        </div>
        <div className="sm-avatar-link-info">
          <div className="sm-avatar-link-name">
            {`${user.firstName} ${user.lastName}`}
          </div>
          <div className="sm-avatar-link-username">{`@${user.username} `}</div>
        </div>
      </div>
    </Link>
  );
}

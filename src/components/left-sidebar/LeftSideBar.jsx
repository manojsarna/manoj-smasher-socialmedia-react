import "./leftsidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineHome,
  MdHome,
  MdOutlineExplore,
  MdExplore,
  MdBookmarkBorder,
  MdBookmark,
} from "react-icons/md/";
import { FaRegUser, FaUser } from "react-icons/fa/";
import { useSelector } from "react-redux";

export function LeftSideBar() {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.users.users);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
  return (
    <aside className="sm-left-sidebar">
      <ul className="left-sidebar-list-container">
        <Link to="/home">
          <li
            className={`${
              location.pathname === "/home" ? "sm-list-item-active" : ""
            }`}
            title="Go To Home"
          >
            {location.pathname === "/home" ? <MdHome /> : <MdOutlineHome />}
            <span>Home</span>
          </li>
        </Link>
        <Link to="/explore">
          <li
            className={`${
              location.pathname === "/explore" ? "sm-list-item-active" : ""
            }`}
            title="Go To Explore"
          >
            {location.pathname === "/explore" ? (
              <MdExplore />
            ) : (
              <MdOutlineExplore />
            )}
            <span>Explore</span>
          </li>
        </Link>
        <Link to="/bookmarks">
          <li
            className={`${
              location.pathname === "/bookmarks" && "sm-list-item-active"
            }`}
            title="Go To Bookmarks"
          >
            {location.pathname === "/bookmarks" ? (
              <MdBookmark />
            ) : (
              <MdBookmarkBorder />
            )}
            <span>Bookmarks</span>
          </li>
        </Link>
        <Link to={`/${loginUserDetails?.username}`}>
          <li
            className={`${
              location.pathname === `/${loginUserDetails?.username}` &&
              "sm-list-item-active"
            }`}
            title="Go To User Profile"
          >
            {location.pathname === `/${loginUserDetails?.username}` ? (
              <FaUser />
            ) : (
              <FaRegUser />
            )}
            <span>Profile</span>
          </li>
        </Link>

        <Link to="/home">
          <li className="sm-btn-smash">
            <i className="fas fa-share"></i>
            <span className="link-name">Smash</span>
          </li>
        </Link>
      </ul>
      <Link
        to={`/${loginUserDetails?.username}`}
        className="sm-profile-div-link"
      >
        <div className="sm-profile-div" title="Go To Profile">
          <div className="avatar avatar-hover s-s sm-profile-div-avatar">
            <img src={`${loginUserDetails?.profilePhoto}`} alt="badminton" />
          </div>
          <div className="sm-profile-info">
            <div className="sm-profile-name">
              {`${loginUserDetails?.firstName} ${loginUserDetails?.lastName}`}
            </div>
            <div className="sm-profile-username">{`@${loginUserDetails?.username} `}</div>
          </div>
        </div>
      </Link>
    </aside>
  );
}

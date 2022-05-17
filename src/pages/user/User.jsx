import { useDispatch, useSelector } from "react-redux";
import { LeftSideBar, RightSideBar } from "../../components";

import { useDocTitle } from "../../hooks/useDocTitle";
import { logout } from "../../redux/reducers/authSlice";
import "./user.css";

export function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useDocTitle("User Profile - Smasher - Manoj Sarna");
  return (
    <main className="sm-main">
      <LeftSideBar />
      <div className="sm-content-area">
        <div className="sm-main-user-profile-container">
          <div className="sm-main-user-profile">
            <p className="sm-main-heading">
              {user && `${user.firstName} ${user.lastName}'s `}
              Profile
            </p>
            <button
              className="sm-category-outline-btn sm-active"
              title="Logout Now"
              onClick={() => dispatch(logout())}
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <RightSideBar />
    </main>
  );
}

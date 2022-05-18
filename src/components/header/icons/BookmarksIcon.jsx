import { Link } from "react-router-dom";

export function BookmarksIcon() {
  return (
    <Link to="/bookmarks" title="Go To Bookmarks">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-bookmark"></i>
        </div>
      </button>
    </Link>
  );
}

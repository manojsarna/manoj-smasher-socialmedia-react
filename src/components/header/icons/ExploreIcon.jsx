import { Link } from "react-router-dom";

export function ExploreIcon() {
  return (
    <Link to="/explore" title="Go To Explore">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-compass"></i>
        </div>
      </button>
    </Link>
  );
}

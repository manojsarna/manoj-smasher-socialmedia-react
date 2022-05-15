import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link className="link-text-dec" title="Go To Home" to="/home">
      <div id="sc-logo" className=" sm-nav-logo flex-row-wrap">
        <span className="sm-header-icon">
          <i className="fas fa-share"></i>
        </span>
        <span>Smasher</span>
      </div>
    </Link>
  );
}

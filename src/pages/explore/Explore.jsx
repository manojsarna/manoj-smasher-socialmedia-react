import { LeftSideBar, RightSideBar } from "../../components";
import "./explore.css";
export function Explore() {
  return (
    <main className="sm-main">
      <LeftSideBar />
      <div className="sm-content-area">
        <div className="sm-main-user-explore-container">
          <p className="sm-main-heading">Explore</p>
        </div>
      </div>
      <RightSideBar />
    </main>
  );
}

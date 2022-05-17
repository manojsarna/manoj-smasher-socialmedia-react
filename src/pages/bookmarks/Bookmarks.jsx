import { LeftSideBar, RightSideBar } from "../../components";
import "./bookmarks.css";
export function Bookmarks() {
  return (
    <main className="sm-main">
      <LeftSideBar />
      <div className="sm-content-area">
        <div className="sm-main-user-bookmarks-container">
          <p className="sm-main-heading">Bookmarks</p>
        </div>
      </div>
      <RightSideBar />
    </main>
  );
}

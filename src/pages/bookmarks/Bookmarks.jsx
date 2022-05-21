import "./bookmarks.css";
import { useSelector } from "react-redux";
import { LeftSideBar, Post, RightSideBar } from "../../components";
import { InfinitySpin as Loader } from "react-loader-spinner";
export function Bookmarks() {
  const loading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.posts);
  const bookmarks = useSelector((state) => state.posts.bookmarks);
  const bookmarkedPosts = posts.filter((post) =>
    bookmarks.find((id) => post._id === id)
  );
  return (
    <main className="sm-main">
      <LeftSideBar />
      <div className="sm-content-area">
        <div className="sm-main-user-bookmarks-container">
          <div className="sm-home-top">
            <p className="sm-main-heading">Bookmarks</p>
          </div>
          {bookmarks.length === 0 && (
            <span className="sm-no-bookmarks">
              Save Posts for later. Right now there are no bookmarked posts.
            </span>
          )}
          {bookmarkedPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
      <RightSideBar />
      {loading && (
        <div className="sm-react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}

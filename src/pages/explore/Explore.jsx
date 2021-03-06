import { useSelector } from "react-redux";
import { InfinitySpin as Loader } from "react-loader-spinner";
import { LeftSideBar, Post, RightSideBar } from "../../components";
import "./explore.css";
export function Explore() {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  let finalPosts = [...posts];
  finalPosts = finalPosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <main className="sm-main">
      <LeftSideBar />
      <div className="sm-content-area">
        <div className="sm-main-user-explore-container">
          <div className="sm-home-top">
            <p className="sm-main-heading">Explore</p>
          </div>
          {finalPosts.map((post) => (
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

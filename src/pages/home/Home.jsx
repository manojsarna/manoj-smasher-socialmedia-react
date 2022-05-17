import "./home.css";
import { useDocTitle } from "../../hooks/useDocTitle";
import {
  LeftSideBar,
  Loader,
  Post,
  RightSideBar,
  ScrollToTop,
} from "../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdImage } from "react-icons/md/";
import { useState } from "react";
import { toast } from "react-toastify";
import { createPost } from "../../redux/reducers/postsSlice";

export function Home() {
  useDocTitle("Home - Smasher - Manoj Sarna");
  const [postDetails, setPostDetails] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  const postHandler = (postDetails) => {
    if (postDetails !== "") {
      if (postDetails.length > 5) {
        dispatch(createPost(postDetails));
        setPostDetails("");
      } else {
        toast.error("Post length must be more than 5 chars!");
      }
    } else {
      toast.error("Post is Empty. Try Again!");
    }
  };

  return (
    <main className="sm-main">
      <LeftSideBar />
      <ScrollToTop />
      <div className="sm-content-area">
        <div className="sm-main-user-homepage-container">
          <div className="sm-home-top">
            <p className="sm-main-heading">Home</p>
            <select className="sm-home-select-sort" title="Select Options">
              <option value="Latest">Latest Posts</option>
              <option value="Trending">Trending</option>
              <option value="Oldest">Oldest Posts</option>
            </select>
          </div>
          <div className="sm-home-new-post-conatiner">
            <Link to={`/${user.username}`} className="sm-home-avatar">
              <div title="Go To Profile">
                <div className="avatar avatar-hover s-s ">
                  <img src={`${user.profilePhoto}`} alt="badminton" />
                </div>
              </div>
            </Link>
            <textarea
              type="text"
              placeholder="What's Happening?"
              autoFocus
              rows="4"
              className="sm-home-text-area"
              value={postDetails}
              onChange={(e) => setPostDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="sm-home-feature-cta-container">
            <span
              className="sm-home-image-upload-btn"
              title="Click To Upload Image"
            >
              <MdImage />
            </span>
            <button
              className="btn btn-primary btn-bold btn-round "
              title="Smash It!!"
              onClick={() => postHandler(postDetails)}
            >
              <span>Smash</span>
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : (
            posts.map((post) => <Post key={post._id} post={post} />)
          )}
        </div>
      </div>

      <RightSideBar />
    </main>
  );
}

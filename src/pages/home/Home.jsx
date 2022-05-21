import "./home.css";
import { useDocTitle } from "../../hooks/useDocTitle";
import { InfinitySpin as Loader } from "react-loader-spinner";
import { LeftSideBar, Post, RightSideBar, ScrollToTop } from "../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdImage } from "react-icons/md/";
import { AiOutlineCloseCircle } from "react-icons/ai/";
import { useState } from "react";
import { toast } from "react-toastify";
import { createPost, sortByValue } from "../../redux/reducers/postsSlice";
import { sortPosts } from "../../hooks/sortPosts";

export function Home() {
  useDocTitle("Home - Smasher - Manoj Sarna");
  const [postDetails, setPostDetails] = useState({
    content: "",
    postImage: "",
  });

  const [selectSortValue, setSelectSortValue] = useState("Latest");
  const loading = useSelector((state) => state.posts.loading);

  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.users.users);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  let sortBy = useSelector((state) => state.posts.sortBy);

  const cloudinaryPost = async (postDetails) => {
    const data = new FormData();
    data.append("file", postDetails.postImage);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    const requestOptions = {
      method: "POST",
      body: data,
    };
    setIsLoading(true);
    await fetch(process.env.REACT_APP_CLOUDINARY_API_URL, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        dispatch(
          createPost({ content: postDetails.content, postImage: json.url })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const postHandler = (postDetails) => {
    if (postDetails.content !== "") {
      if (postDetails.content.length > 5) {
        if (postDetails.postImage !== "") {
          cloudinaryPost(postDetails);
        } else {
          dispatch(createPost(postDetails));
        }
        setPostDetails({
          content: "",
          postImage: "",
        });
      } else {
        toast.error("Post length must be more than 5 chars!");
      }
    } else {
      toast.error("Post is Empty. Try Again!");
    }
  };

  let finalPosts = sortPosts(posts, sortBy);

  return (
    <main className="sm-main">
      <LeftSideBar />
      <ScrollToTop />
      <div className="sm-content-area">
        <div className="sm-main-user-homepage-container">
          <div className="sm-home-top">
            <p className="sm-main-heading">Home</p>
            <select
              className="sm-home-select-sort"
              title="Select Options"
              value={selectSortValue}
              onChange={(e) => {
                setSelectSortValue(e.target.value);
                dispatch(sortByValue(e.target.value));
              }}
            >
              <option value="Latest">Latest Posts</option>
              <option value="Trending">Trending</option>
              <option value="Oldest">Oldest Posts</option>
            </select>
          </div>
          <div className="sm-home-new-post-conatiner">
            <Link
              to={`/${loginUserDetails?.username}`}
              className="sm-home-avatar"
            >
              <div title="Go To Profile">
                <div className="avatar avatar-hover s-s ">
                  <img
                    src={`${loginUserDetails?.profilePhoto}`}
                    alt="badminton"
                  />
                </div>
              </div>
            </Link>
            <textarea
              type="text"
              placeholder="What's Happening?"
              autoFocus
              rows="4"
              className="sm-home-text-area"
              value={postDetails.content}
              onChange={(e) =>
                setPostDetails((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
            ></textarea>
          </div>
          {postDetails.postImage && (
            <div className="sm-postimage-container">
              <img
                src={URL.createObjectURL(postDetails.postImage)}
                alt="badminton"
              />
              <div
                className="sm-close-icon "
                onClick={(e) =>
                  setPostDetails((prev) => ({
                    ...prev,
                    postImage: "",
                  }))
                }
              >
                <AiOutlineCloseCircle />
              </div>
            </div>
          )}
          <div className="sm-home-feature-cta-container">
            <label htmlFor="postImage">
              <span
                className="sm-home-image-upload-btn"
                title="Click To Upload Image"
              >
                <MdImage />
              </span>
            </label>
            <input
              type="file"
              id="postImage"
              accept="image/*"
              hidden
              onInput={(e) =>
                setPostDetails((prev) => ({
                  ...prev,
                  postImage: e.target.files[0],
                }))
              }
            />

            <button
              className="btn btn-primary btn-bold btn-round "
              title="Smash It!!"
              onClick={() => postHandler(postDetails)}
            >
              <span>Smash</span>
            </button>
          </div>
          {finalPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
      <RightSideBar />
      {(isLoading || loading) && (
        <div className="sm-react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdImage } from "react-icons/md/";
import "./edituserprofile.css";

import { updateUser } from "../../../redux/reducers/usersSlice";
import { toast } from "react-toastify";

export function EditUserProfile({ showEditProfile, setShowEditProfile, user }) {
  const [updateUserDetails, setUpdateUserDetails] = useState({ ...user });
  const dispatch = useDispatch();
  const uploadImage = async (avatarImage) => {
    const data = new FormData();
    data.append("file", avatarImage);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(process.env.REACT_APP_CLOUDINARY_API_URL, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setUpdateUserDetails((prev) => ({ ...prev, profilePhoto: json.url }));
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const updateHandler = () => {
    dispatch(updateUser(updateUserDetails));
  };

  return (
    <div
      className={`sm-modal-main ${showEditProfile ? "sm-modal-main-show" : ""}`}
    >
      <div className="sm-modal-content">
        <button
          id="btn btn-primary"
          className="sm-card-dismiss"
          title="Dismiss"
          onClick={() => setShowEditProfile((p) => !p)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="sm-modal-title fw-700">
          {`Edit ${user?.firstName} ${user?.lastName}'s Profile`}{" "}
        </div>
        <div className="sm-home-new-edit-post-conatiner">
          <div className="avatar avatar-badge s-xl">
            <img src={`${updateUserDetails.profilePhoto}`} alt="badminton" />
            <label
              className="av-badge bd-green bd-xxl bd-bottom-right"
              htmlFor="postImage"
              title="Click To Upload Image"
            >
              <MdImage />
            </label>
            <input
              type="file"
              id="postImage"
              accept="image/*"
              hidden
              onChange={(e) => uploadImage(e.target.files[0])}
            />
          </div>

          <div className="sm-user-profile-content">
            <input
              type="text"
              autoFocus
              rows="4"
              className="sm-home-text-area"
              value={updateUserDetails.bio}
              onChange={(e) =>
                setUpdateUserDetails((prev) => ({
                  ...prev,
                  bio: e.target.value,
                }))
              }
            />
            <input
              type="text"
              autoFocus
              rows="4"
              className="sm-home-text-area"
              value={updateUserDetails.website}
              onChange={(e) =>
                setUpdateUserDetails((prev) => ({
                  ...prev,
                  website: e.target.value,
                }))
              }
            />
          </div>
          <button
            className="btn btn-primary btn-bold btn-round "
            title="Update Profile"
            onClick={() => {
              updateHandler();
              setShowEditProfile((p) => !p);
            }}
          >
            <span>Update Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

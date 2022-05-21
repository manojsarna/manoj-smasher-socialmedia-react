import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Manoj",
    lastName: "Sarna",
    username: "manojsarna",
    email: "manojsarna@gmail.com",
    password: "Manoj@123",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
    coverPhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618812/1500x500_qx8faw.jpg",
    bio: "FullStack Web Developer 1",
    website: "https://smashui.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Holly",
        lastName: "Jackson",
        username: "hollyjackson",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
      },
      {
        _id: uuid(),
        firstName: "Walter",
        lastName: "White",
        username: "walterwhite",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Holly",
        lastName: "Jackson",
        username: "hollyjackson",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
      },
      {
        _id: uuid(),
        firstName: "Walter",
        lastName: "White",
        username: "walterwhite",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Holly",
    lastName: "Jackson",
    username: "hollyjackson",
    email: "hollyjackson@gmail.com",
    password: "Holy@123",
    bio: "FullStack Web Developer 2",
    website: "https://smashui.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
    coverPhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618812/1500x500_qx8faw.jpg",
    following: [
      {
        firstName: "Manoj",
        lastName: "Sarna",
        username: "manojsarna",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
      },
    ],
    followers: [
      {
        firstName: "Manoj",
        lastName: "Sarna",
        username: "manojsarna",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
      },
      {
        firstName: "Frank",
        lastName: "Hill",
        username: "frankhill",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Frank",
    lastName: "Hill",
    username: "frankhill",
    email: "frankhill@gmail.com",
    password: "Frank@123",
    bio: "FullStack Web Developer 3",
    website: "https://smashui.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
    coverPhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618812/1500x500_qx8faw.jpg",
    followers: [
      {
        firstName: "Manoj",
        lastName: "Sarna",
        username: "manojsarna",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
      },
      {
        _id: uuid(),
        firstName: "Walter",
        lastName: "White",
        username: "walterwhite",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Holly",
        lastName: "Jackson",
        username: "hollyjackson",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Walter",
    lastName: "White",
    username: "walterwhite",
    email: "walterwhite@gmail.com",
    password: "Walt@123",
    bio: "FullStack Web Developer 4",
    website: "https://smashui.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
    coverPhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618812/1500x500_qx8faw.jpg",

    followers: [
      {
        firstName: "Manoj",
        lastName: "Sarna",
        username: "manojsarna",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
      },
      {
        firstName: "Jesse",
        lastName: "Green",
        username: "jessegreen",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
      },
    ],
    following: [
      {
        firstName: "Manoj",
        lastName: "Sarna",
        username: "manojsarna",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
      },
      {
        firstName: "Jesse",
        lastName: "Green",
        username: "jessegreen",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
      },
      {
        firstName: "Frank",
        lastName: "Hill",
        username: "frankhill",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
      },
    ],
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Jesse",
    lastName: "Green",
    username: "jessegreen",
    email: "jessegreen@gmail.com",
    password: "Jesse@123",
    bio: "FullStack Web Developer 5",
    website: "https://smashui.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
    coverPhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618812/1500x500_qx8faw.jpg",

    following: [
      {
        firstName: "Manoj",
        lastName: "Sarna",
        username: "manojsarna",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
      },
      {
        _id: uuid(),
        firstName: "Walter",
        lastName: "White",
        username: "walterwhite",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
      },
    ],
    followers: [
      {
        firstName: "Manoj",
        lastName: "Sarna",
        username: "manojsarna",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
      },
      {
        _id: uuid(),
        firstName: "Walter",
        lastName: "White",
        username: "walterwhite",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
      },
    ],
    bookmarks: [],
  },
];

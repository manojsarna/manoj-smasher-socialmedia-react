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
    email: "manojsarna@gmail.com",
    username: "manojsarna",
    password: "Manoj@123",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
    coverPhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618812/1500x500_qx8faw.jpg",
    bio: "Full Stack Web Developer",
    website: "https://neog.camp/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jesse",
    lastName: "Green",
    email: "jessegreen@gmail.com",
    username: "jessegreen",
    password: "Jessegreen@123",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
    coverPhoto: "",
    bio: "Frontend Developer",
    website: "https://neog.camp/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Holly",
    lastName: "Jackson",
    email: "hollyjackson@gmail.com",
    username: "hollyjackson",
    password: "Holly@123",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
    coverPhoto: "",
    bio: "MBA Finance",
    website: "https://neog.camp/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Frank",
    lastName: "Hill",
    email: "frankhill@gmail.com",
    username: "frankhill",
    password: "Frank@123",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
    coverPhoto: "",
    bio: "Student at Student",
    website: "https://neog.camp/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Walter",
    lastName: "White",
    email: "walterwhite@gmail.com",
    username: "walterwhite",
    password: "Walter@123",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
    coverPhoto: "",
    bio: "Chemistry Teacher",
    website: "https://www.google.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

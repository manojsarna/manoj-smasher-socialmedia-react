import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: "Manoj",
    lastName: "Sarna",
    username: "manojsarna",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
    content: `toote hue dil se hi #code nikalta hai 🚀🧑‍💻.`,

    likes: {
      likeCount: 1000,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jesse",
    lastName: "Green",
    username: "jessegreen",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
    content:
      "Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.",
    likes: {
      likeCount: 500,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],

    createdAt: new Date("May 10 2022 04:15:43 PM"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Holly",
    lastName: "Jackson",
    username: "hollyjackson",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
    content: "Everybody is riding the web3 wave.",
    likes: {
      likeCount: 20012,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],

    createdAt: new Date("May 9 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    trending: true,
  },
  {
    _id: uuid(),
    firstName: "Frank",
    lastName: "Hill",
    username: "frankhill",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
    content: "Javascript is love!!",
    likes: {
      likeCount: 500,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: new Date("May 8 2022 04:15:43 PM"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Walter",
    lastName: "White",
    username: "walterwhite",
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
    content: "Say My Name!!",
    likes: {
      likeCount: 990,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    createdAt: new Date("May 7 2022 04:15:43 PM"),
    updatedAt: formatDate(),
  },
];

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
    postImage:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652984625/t-3_ubmooi.webp",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        },
        {
          firstName: "Jesse",
          lastName: "Green",
          username: "jessegreen",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
        },
        {
          firstName: "Walter",
          lastName: "White",
          username: "walterwhite",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
        },
      ],
      dislikedBy: [],
    },
    createdAt: new Date("20 May 2022 11:58:15 PM"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Holly",
        lastName: "Jackson",
        username: "hollyjackson",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        text: "testing comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("20 May 2022 10:11:15 PM"),
      },
      {
        _id: uuid(),
        firstName: "Frank",
        lastName: "Hill",
        username: "frankhill",
        profilePhoto:
          "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        text: "testing comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("20 May 2022 10:11:15 PM"),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.Well-written Python looks like a poem to your computer.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Manoj",
          lastName: "Sarna",
          username: "manojsarna",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "hollyjackson",
    firstName: "Holly",
    lastName: "Jackson",
    createdAt: new Date("May 10 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Great work on the new post ",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        },
        {
          firstName: "Jesse",
          lastName: "Green",
          username: "jessegreen",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
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
      dislikedBy: [],
    },
    firstName: "Frank",
    lastName: "Hill",
    username: "frankhill",
    createdAt: new Date("May 12 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Everybody is riding the web3 wave.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Walter",
          lastName: "White",
          username: "walterwhite",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "manojsarna",
    firstName: "Manoj",
    lastName: "Sarna",
    createdAt: new Date("May 15 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Testing Post 12",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
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
      dislikedBy: [],
    },
    firstName: "Jesse",
    lastName: "Green",
    username: "jessegreen",
    createdAt: new Date("May 16 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Javascript is love!!",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        },
        {
          firstName: "Jesse",
          lastName: "Green",
          username: "jessegreen",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
        },
        {
          firstName: "Manoj",
          lastName: "Sarna",
          username: "manojsarna",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Walter",
    lastName: "White",
    username: "walterwhite",
    createdAt: new Date("May 13 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
    comments: [],
  },
  {
    _id: uuid(),
    content: "PrepInTech",
    postImage:
      "https://res.cloudinary.com/ms-inc/image/upload/v1653075765/Screenshot_2022-05-09_201932_zww3eq.jpg",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        },
        {
          firstName: "Jesse",
          lastName: "Green",
          username: "jessegreen",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
        },

        {
          firstName: "Walter",
          lastName: "White",
          username: "walterwhite",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "manojsarna",
    firstName: "Manoj",
    lastName: "Sarna",
    createdAt: new Date("May 17 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
    comments: [],
  },

  {
    _id: uuid(),
    content: "testing post 123",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Manoj",
          lastName: "Sarna",
          username: "manojsarna",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "manojsarna",
    firstName: "Manoj",
    lastName: "Sarna",
    createdAt: new Date("May 11 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "testing post 189",
    likes: {
      likeCount: 3,
      likedBy: [
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
        {
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jesse",
    lastName: "Green",
    username: "jessegreen",
    createdAt: new Date("May 09 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "testing post 12323",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Manoj",
          lastName: "Sarna",
          username: "manojsarna",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
        },
        {
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Holly",
    lastName: "Jackson",
    username: "hollyjackson",
    createdAt: new Date("May 15 2022 05:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
    comments: [],
  },

  {
    _id: uuid(),
    content: "tesing post 345",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Manoj",
          lastName: "Sarna",
          username: "manojsarna",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
        },
        {
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        },
        {
          firstName: "Jesse",
          lastName: "Green",
          username: "jessegreen",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Frank",
    lastName: "Hill",
    username: "frankhill",
    createdAt: new Date("May 07 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Say My Name !!",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Manoj",
          lastName: "Sarna",
          username: "manojsarna",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Walter",
    lastName: "White",
    username: "walterwhite",
    createdAt: new Date("May 11 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
    comments: [],
  },
  {
    _id: uuid(),
    content: "testing post 5697",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        },
        {
          firstName: "Jesse",
          lastName: "Green",
          username: "jessegreen",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
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
      dislikedBy: [],
    },
    firstName: "Frank",
    lastName: "Hill",
    username: "frankhill",
    createdAt: new Date("May 03 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
    comments: [],
  },
  {
    _id: uuid(),
    content: "testing one 1",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
        {
          firstName: "Frank",
          lastName: "Hill",
          username: "frankhill",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "manojsarna",
    firstName: "Manoj",
    lastName: "Sarna",
    createdAt: new Date("May 02 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "testing post 1299",
    likes: {
      likeCount: 3000,
      likedBy: [
        {
          firstName: "Jesse",
          lastName: "Green",
          username: "jessegreen",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620951/johndoe_y6l9yo.jpg",
        },
        {
          firstName: "Manoj",
          lastName: "Sarna",
          username: "manojsarna",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652618738/6Ma76Y2Z_400x400_egub5u.jpg",
        },
        {
          firstName: "Holly",
          lastName: "Jackson",
          username: "hollyjackson",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
        },
      ],
      dislikedBy: [],
    },

    firstName: "Frank",
    lastName: "Hill",
    username: "frankhill",
    createdAt: new Date("May 18 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652618938/blank-profile-picture-973460_960_720_gcq6h1.webp",
    comments: [],
  },

  {
    _id: uuid(),
    content: "Testing testing testing",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Walter",
          lastName: "White",
          username: "walterwhite",
          profilePhoto:
            "https://res.cloudinary.com/ms-inc/image/upload/v1652620899/BB-S5B-Walt-590_etlsew.webp",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Holly",
    lastName: "Jackson",
    username: "hollyjackson",
    createdAt: new Date("May 01 2022 04:15:43 PM"),
    updatedAt: formatDate(),
    profilePhoto:
      "https://res.cloudinary.com/ms-inc/image/upload/v1652621027/hollyjackson_stfsal.jpg",
    comments: [],
  },
];

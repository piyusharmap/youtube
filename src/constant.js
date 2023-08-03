export const API_KEY = "AIzaSyCZxpmXTY1LWMyMMPfGUHWX-kpeHXj5fGY";

export const VIDEO_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&key=";

export const VIDEO_PLAY_API = "https://www.youtube.com/watch?v=";

export const SEARCH_SUGGESTIONS_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

export const VIDEO_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const CHANNEL_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=";

export const SIMILAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&relatedToVideoId=";

export const VIDEO_SHIMMER_VALUE = 15;

export const COMMENTS_DATA = [
  {
    id: 100,
    author: "Katelyn Pham",
    comment: "Great video, thanks!",
    replies: [
      {
        id: 1001,
        author: "Primrose Kibler",
        comment: "Nice content, well done!",
        replies: [
          {
            id: 10011,
            author: "Brooklynn Chandler",
            comment: "Short and sweet, amazing!",
            replies: [
              {
                id: 2001,
                author: "Tia Carney",
                comment: "Awesome video, loved it!",
                replies: [],
                postedAt: "2 hours ago",
              },
            ],
            postedAt: "5 hours ago",
          },
        ],
        postedAt: "1 day ago",
      },
    ],
    postedAt: "1 day ago",
  },
  {
    id: 200,
    author: "Esteban Hurley",
    comment: "Very informative, loved it.",
    replies: [
      {
        id: 1001,
        author: "Primrose Kibler",
        comment: "Nice content, well done!",
        replies: [
          {
            id: 10011,
            author: "Brooklynn Chandler",
            comment: "Short and sweet, amazing!",
            replies: [],
            postedAt: "5 hours ago",
          },
          {
            id: 10012,
            author: "Primrose Kibler",
            comment: "Random reply with random words.",
            replies: [],
            postedAt: "3 hours ago",
          },
          {
            id: 10013,
            author: "Ashley Swett",
            comment: "Awesome, keep it up!",
            replies: [],
            postedAt: "2 hours ago",
          },
        ],
        postedAt: "2 hours ago",
      },
    ],
    postedAt: "1 day ago",
  },
  {
    id: 300,
    author: "Michaela Atkins",
    comment: "Thanks for sharing!",
    replies: [
      {
        id: 2001,
        author: "Tia Carney",
        comment: "Awesome video, loved it!",
        replies: [],
        postedAt: "2 hours ago",
      },
      {
        id: 2002,
        author: "Michaela Atkins",
        comment: "You're welcome!",
        replies: [],
        postedAt: "1 hour ago",
      },
    ],
    postedAt: "3 hours ago",
  },
  {
    id: 400,
    author: "Sebastian Booth",
    comment: "Impressive work!",
    replies: [],
    postedAt: "1 day ago",
  },
  {
    id: 500,
    author: "Lyla-Rose Irwin",
    comment: "Very helpful, thanks!",
    replies: [],
    postedAt: "1 hour ago",
  },
  {
    id: 600,
    author: "Maddox Archer",
    comment: "Nice job, keep it up!",
    replies: [],
    postedAt: "10 minutes ago",
  },
  {
    id: 700,
    author: "Amara-May Holden",
    comment: "Loved the video!",
    replies: [
      {
        id: 3001,
        author: "Amara-May Holden",
        comment: "Thanks for the support!",
        replies: [],
        postedAt: "1 hour ago",
      },
    ],
    postedAt: "1 hour ago",
  },
  {
    id: 800,
    author: "Ahmad Jefferson",
    comment: "Good stuff!",
    replies: [],
    postedAt: "2 days ago",
  },
  {
    id: 900,
    author: "Emilis Carver",
    comment: "Awesome content!",
    replies: [
      {
        id: 4001,
        author: "Emilis Carver",
        comment: "Glad you liked it!",
        replies: [],
        postedAt: "30 minutes ago",
      },
    ],
    postedAt: "30 minutes ago",
  },
  {
    id: 1000,
    author: "Hadley-Ann Galloway",
    comment: "Short and sweet!",
    replies: [],
    postedAt: "5 hours ago",
  },
  {
    id: 1100,
    author: "Nikodem Korba",
    comment: "Interesting video!",
    replies: [],
    postedAt: "4 hours ago",
  },
  {
    id: 1200,
    author: "Imaan Gunn",
    comment: "Really helpful, thanks!",
    replies: [
      {
        id: 1101,
        author: "Danya Drake",
        comment: "Glad you found it helpful!",
        replies: [],
        postedAt: "1 day ago",
      },
    ],
    postedAt: "1 day ago",
  },
  {
    id: 1300,
    author: "Samiha Esquivel",
    comment: "Great job, keep it up!",
    replies: [],
    postedAt: "1 day ago",
  },
  {
    id: 1400,
    author: "Duncan Connolly",
    comment: "Awesome video!",
    replies: [],
    postedAt: "2 hours ago",
  },
  {
    id: 1500,
    author: "Talitha Lees",
    comment: "Short and informative!",
    replies: [],
    postedAt: "20 minutes ago",
  },
  {
    id: 1600,
    author: "Umaima Harvey",
    comment: "Thanks for sharing this!",
    replies: [],
    postedAt: "5 hours ago",
  },
  {
    id: 1700,
    author: "Kadin Stacey",
    comment: "Great explanation, thanks!",
    replies: [],
    postedAt: "1 day ago",
  },
  {
    id: 1800,
    author: "Riley-James Hopkins",
    comment: "Very insightful, loved it!",
    replies: [],
    postedAt: "3 hours ago",
  },
  {
    id: 1900,
    author: "Alaya Dunlop",
    comment: "Great content, keep it coming!",
    replies: [
      {
        id: 1201,
        author: "Taliah Wyatt",
        comment: "I agree, looking forward to more!",
        replies: [],
        postedAt: "2 hours ago",
      },
    ],
    postedAt: "4 hours ago",
  },
  {
    id: 2000,
    author: "Zayn Whitworth",
    comment: "Awesome presentation!",
    replies: [],
    postedAt: "1 hour ago",
  },
  {
    id: 2100,
    author: "Sierra O'Doherty",
    comment: "Thanks for the valuable insights!",
    replies: [],
    postedAt: "2 days ago",
  },
  {
    id: 2200,
    author: "Mohammed Rankin",
    comment: "Well explained, thumbs up!",
    replies: [],
    postedAt: "6 hours ago",
  },
  {
    id: 2300,
    author: "Liya Mathews",
    comment: "Short and to the point, loved it!",
    replies: [],
    postedAt: "30 minutes ago",
  },
  {
    id: 2400,
    author: "Idrees Moran",
    comment: "Excellent content, very helpful!",
    replies: [],
    postedAt: "3 hours ago",
  },
  {
    id: 2500,
    author: "Laraib Pollard",
    comment: "Thanks for sharing this with us!",
    replies: [],
    postedAt: "2 hours ago",
  },
  {
    id: 2600,
    author: "Emaan Roche",
    comment: "Keep up the good work!",
    replies: [
      {
        id: 1301,
        author: "Ishanah Cuevas",
        comment: "Agreed, you're doing great!",
        replies: [],
        postedAt: "1 hour ago",
      },
    ],
    postedAt: "1 day ago",
  },
  {
    id: 2700,
    author: "Nawal Hilton",
    comment: "Very informative video!",
    replies: [],
    postedAt: "4 hours ago",
  },
  {
    id: 2800,
    author: "Hadiya Spencer",
    comment: "Loved the content, thanks!",
    replies: [],
    postedAt: "1 hour ago",
  },
  {
    id: 2900,
    author: "Yuvraj Britton",
    comment: "Awesome job, keep it up!",
    replies: [],
    postedAt: "10 minutes ago",
  },
  {
    id: 3000,
    author: "Waleed Childs",
    comment: "Great video, very helpful!",
    replies: [
      {
        id: 1401,
        author: "Yara Whitmore",
        comment: "Thanks for sharing your knowledge!",
        replies: [],
        postedAt: "1 day ago",
      },
      {
        id: 1402,
        author: "Waleed Childs",
        comment: "You're welcome! Happy to help!",
        replies: [],
        postedAt: "5 hours ago",
      },
    ],
    postedAt: "1 day ago",
  },
  {
    id: 3100,
    author: "Sidrah Lawrence",
    comment: "Very interesting topic!",
    replies: [],
    postedAt: "2 hours ago",
  },
  {
    id: 3200,
    author: "Jaya Shepherd",
    comment: "Thanks for the valuable information!",
    replies: [],
    postedAt: "1 hour ago",
  },
  {
    id: 3300,
    author: "Aaryan Mcgill",
    comment: "Short and sweet, loved it!",
    replies: [],
    postedAt: "5 hours ago",
  },
  {
    id: 3400,
    author: "Reema Mcknight",
    comment: "Great work, keep it coming!",
    replies: [
      {
        id: 1501,
        author: "Arianna Whittaker",
        comment: "Can't wait for more!",
        replies: [],
        postedAt: "30 minutes ago",
      },
    ],
    postedAt: "3 hours ago",
  },
  {
    id: 3500,
    author: "Mikaeel Perez",
    comment: "Thanks for sharing this knowledge!",
    replies: [],
    postedAt: "2 hours ago",
  },
  {
    id: 3600,
    author: "Maira Prosser",
    comment: "Awesome content, keep it up!",
    replies: [],
    postedAt: "1 day ago",
  },
  {
    id: 3700,
    author: "Arwa Shaffer",
    comment: "Impressive explanation!",
    replies: [],
    postedAt: "1 hour ago",
  },
];

export const CHAT_DATA = [
  {
    id: "",
    author: "Sophia Lee",
    comment: "I can't wait for the live stream to begin! 🤩",
  },
  {
    id: "",
    author: "John Smith",
    comment: "Come on, when is it starting already? 🙄",
  },
  {
    id: "",
    author: "Emily Johnson",
    comment: "Counting down the seconds till it starts! ⏳",
  },
  {
    id: "",
    author: "Michael Brown",
    comment: "Any idea when the live video will kick off? 🤔",
  },
  {
    id: "",
    author: "Isabella Martinez",
    comment: "The excitement is building up! Let's go! 🎉",
  },
  {
    id: "",
    author: "Chris Thompson",
    comment: "Ready to engage with this live stream! 🚀",
  },
  {
    id: "",
    author: "Sophia Lee",
    comment: "Is it starting soon? I can't wait! 😊",
  },
  {
    id: "",
    author: "John Smith",
    comment: "Looking forward to the live stream! 🌟",
  },
  {
    id: "",
    author: "Emily Johnson",
    comment: "The anticipation is real! 🙌",
  },
  {
    id: "",
    author: "Michael Brown",
    comment: "Excited to see what's in store! 🤗",
  },
  {
    id: "",
    author: "Isabella Martinez",
    comment: "Hoping it starts soon! 🤞",
  },
  {
    id: "",
    author: "Chris Thompson",
    comment: "Ready and waiting for the live stream! 🎬",
  },
  {
    id: "",
    author: "Sophia Lee",
    comment: "The anticipation is killing me! 😅",
  },
  {
    id: "",
    author: "John Smith",
    comment: "Patiently waiting for the live video! ⌛",
  },
];

export const SUBSCRIPTIONS = [];

export const LIVE_CHAT_OFFSET = 50;

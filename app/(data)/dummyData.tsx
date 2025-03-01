import { Intro, About, ProjectDetails, Article } from "./types";

const intro: Intro = {
  name: "Ruby Chen",
  intro: "This is a place to let me practice web skill.",
  img: "/images/TEST_JPG.jpg",
  resumeUrl: "/",
  socialMedia: [
    {
      title: "BH",
      href: "https://www.behance.net",
      displayIcon: "BehanceIcon",
    },
    {
      title: "GH",
      href: "https://github.com/",
      displayIcon: "GitHubIcon",
    },
    {
      title: "LI",
      href: "https://tw.linkedin.com",
      displayIcon: "LinkedInIcon",
    },
  ],
  pageRoute: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Project",
      href: "/project",
    },
    {
      title: "Article",
      href: "/article",
    },
  ]
};

const about: About = {
  aboutMe: {
    description: "Try to introduce myself in this paragraph, but exactly what to say is a mystery. Typing is a kind of way to say something.",
    img: "/images/TEST_JPG.jpg",
  },
  skills: [
    {
      id: "1",
      title: "HTML",
      level: "85%",
    },
    {
      id: "2",
      title: "CSS",
      level: "90%",
    },
    {
      id: "3",
      title: "JavaScript",
      level: "70%",
    },
    {
      id: "4",
      title: "Tailwind CSS",
      level: "80%",
    },
    {
      id: "5",
      title: "NodeJS",
      level: "60%",
    },
    {
      id: "6",
      title: "ReactJS",
      level: "70%",
    },
    {
      id: "7",
      title: "Web Management",
      level: "95%",
    },
    {
      id: "8",
      title: "Git",
      level: "70%",
    },
    {
      id: "9",
      title: "TypeScript",
      level: "60%",
    },
    {
      id: "10",
      title: "Motion",
      level: "80%",
    },
    {
      id: "11",
      title: "AEM",
      level: "60%",
    },
    {
      id: "12",
      title: "JIRA",
      level: "60%",
    },
  ],
  experiences: [
    { title: "First", description: "Happy first job ever, the colleagues were nice and the projects were fun, yet I want to explore the world more.", id: 1 },
    { title: "Second", description: "Temp Job for transition of my next career, great operating team.", id: 2 },
    { title: "Third", description: "The weirdest place I ever been, people are scared all the time.", id: 3 },
    { title: "Fourth", description: "Nice opportunity for developer newbies, yet the dev team seems to be disbanding at any moment.", id: 4 },
    { title: "Fifth", description: "Keep going and beyond", id: 5 },
  ],
  educations: [
  { title: "First", description: "University is where I met my best friends.", id: 1 },
  { title: "Second", description: "Truly taught me how to write codes.", id: 2 }
]
};

const projectDatas: ProjectDetails[] = [
  {
    id: 1,
    title: "Ocean",
    description: "I love this work so much, so proud to be involve in this project.",
    time: "2021",
    img: "/images/TEST_JPG.jpg",
    gif: "/images/GIF/TEST_GIF.gif",
    longImg: "/images/TEST_JPG.jpg",
    longDescription: "This is where description goes to. Try to type more values in here to make it looks good. Try to type more word but still fit. Exactly what am I talking about is a mystery 1.",
    brainStormingDescription: "explaining what I am doing to people who know and try to make it look easy 1.",
    makingDescription: "making is where magic happened 1.",
    outComeDescription: "appreciate for any help 1.",
    brainStormingImg: ["/images/TEST_JPG.jpg", "/images/TEST_JPG.jpg", "/images/TEST_JPG.jpg"],
    makingImg: "/images/TEST_JPG.jpg",
    outComeImg: "/images/TEST_JPG.jpg",
    videoImg: "/images/TEST_YOUTUBE.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vEhD5WwCo44",
    demoUrl: "/",
  },
  {
    id: 2,
    title: "Simple Twitter",
    description: "Surely teach me how to write code.",
    time: "2023",
    img: "/images/TEST2_JPG.jpg",
    gif: "/images/GIF/TEST_GIF.gif",
    longImg: "/images/TEST2_JPG.jpg",
    longDescription: "This is where description goes to. Try to type more values in here to make it looks good. Try to type more word but still fit. Exactly what am I talking about is a mystery 2.",
    brainStormingDescription: "explaining what I am doing to people who know and try to make it look easy 2.",
    makingDescription: "making is where magic happened 2.",
    outComeDescription: "appreciate for any help 2.",
    brainStormingImg: ["/images/TEST2_JPG.jpg", "/images/TEST2_JPG.jpg", "/images/TEST2_JPG.jpg"],
    makingImg: "/images/TEST2_JPG.jpg",
    outComeImg: "/images/TEST2_JPG.jpg",
    videoImg: "/images/TEST2_YOUTUBE.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vEhD5WwCo44",
    demoUrl: "/",
  },
  {
    id: 3,
    title: "LaBar game",
    description: "A little project that I joint.",
    time: "2024",
    img: "/images/TEST3_JPG.jpg",
    gif: "/images/GIF/TEST_GIF.gif",
    longImg: "/images/TEST3_JPG.jpg",
    longDescription: "This is where description goes to. Try to type more values in here to make it looks good. Try to type more word but still fit. Exactly what am I talking about is a mystery 3.",
    brainStormingDescription: "explaining what I am doing to people who know and try to make it look easy 3.",
    makingDescription: "making is where magic happened 3.",
    outComeDescription: "appreciate for any help 3.",
    brainStormingImg: ["/images/TEST3_JPG.jpg", "/images/TEST3_JPG.jpg", "/images/TEST3_JPG.jpg"],
    makingImg: "/images/TEST3_JPG.jpg",
    outComeImg: "/images/TEST3_JPG.jpg",
    videoImg: "/images/TEST3_YOUTUBE.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vEhD5WwCo44",
    demoUrl: "/",
  },
  {
    id: 4,
    title: "Store Location",
    description: "Small little project.",
    time: "2024",
    img: "/images/TEST4_JPG.jpg",
    gif: "/images/GIF/TEST_GIF.gif",
    longImg: "/images/TEST4_JPG.jpg",
    longDescription: "This is where description goes to. Try to type more values in here to make it looks good. Try to type more word but still fit. Exactly what am I talking about is a mystery 4.",
    brainStormingDescription: "explaining what I am doing to people who know and try to make it look easy 4.",
    makingDescription: "making is where magic happened 4.",
    outComeDescription: "appreciate for any help 4.",
    brainStormingImg: ["/images/TEST4_JPG.jpg", "/images/TEST4_JPG.jpg", "/images/TEST4_JPG.jpg"],
    makingImg: "/images/TEST4_JPG.jpg",
    outComeImg: "/images/TEST4_JPG.jpg",
    videoImg: "/images/TEST4_YOUTUBE.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vEhD5WwCo44",
    demoUrl: "https://table-store-iota.vercel.app/",
  },
  {
    id: 5,
    title: "Chill split",
    description: "This is my fifth work, I truly admire the people who work with me in this project.",
    time: "2024",
    img: "/images/TEST5_JPG.jpg",
    gif: "/images/GIF/TEST_GIF.gif",
    longImg: "/images/TEST5_JPG.jpg",
    longDescription: "This is where description goes to. Try to type more values in here to make it looks good. Try to type more word but still fit. Exactly what am I talking about is a mystery 5.",
    brainStormingDescription: "explaining what I am doing to people who know and try to make it look easy 5.",
    makingDescription: "making is where magic happened 5.",
    outComeDescription: "appreciate for any help 5.",
    brainStormingImg: ["/images/TEST5_JPG.jpg", "/images/TEST5_JPG.jpg", "/images/TEST5_JPG.jpg"],
    makingImg: "/images/TEST5_JPG.jpg",
    outComeImg: "/images/TEST5_JPG.jpg",
    videoImg: "/images/TEST5_YOUTUBE.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vEhD5WwCo44",
    demoUrl: "https://cost-sharing-app-git-staging-samchlius-projects.vercel.app/",
  },
];

projectDatas.reverse();

const articleDatas: Article[] = [
  { id: 1, title: "Article 1", description: "Description about this article to make it look good. Description about this article to make it look good.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: true },
  { id: 2, title: "Article 2", description: "Description about this article to make it look good 2. Description about this article to make it look good 2.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: true },
  { id: 3, title: "Article 3", description: "Description about this article to make it look good 3. Description about this article to make it look good 3.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: true },
  { id: 4, title: "Article 4", description: "Description about this article to make it look good 4. Description about this article to make it look good 4.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: false },
  { id: 5, title: "Article 5", description: "Description about this article to make it look good 5. Description about this article to make it look good 5.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: false },
  { id: 6, title: "Article 6", description: "Description about this article to make it look good 6. Description about this article to make it look good 6.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: false },
  { id: 7, title: "Article 7", description: "Description about this article to make it look good 7. Description about this article to make it look good 7.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: false },
  { id: 8, title: "Article 8", description: "Description about this article to make it look good 8. Description about this article to make it look good 8.", img: "/images/TEST_JPG.jpg", date: "2024-12-09T12:00:00.000Z", isMain: false },
];

export { intro, about, projectDatas, articleDatas };

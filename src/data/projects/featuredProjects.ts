import { SnappyChat, ElBook, TipCalculator } from "../../assets";

const featuredProjects = [
  {
    id: 1,
    image: SnappyChat,
    title: "Snappy Chat",
    description: "The real-time chat application I have developed using MERN stack is a dynamic and interactive platform for users to engage in live conversations seamlessly. the application is a feature-rich platform with real-time messaging updates, efficient backend operations, and visually appealing aesthetics and styling.",
    designLink: "https://snappy-chat-geo.vercel.app",
    githubLink: "https://github.com/justtfelix/snappy-chat",
    techList: ["React", "Node", "Express", "MongoDB", "Socket.io"],
    isLeft: false,
  },
  {
    id: 2,
    image: ElBook,
    title: "Sandro's Book",
    description: "This book is an online edition of the book. The stories told in this book are about technology and the magical abilities of modern man. There is no printed version of this book, the stories told in the book can be read and heard only thanks to technology.",
    designLink: "https://nokak.github.io/Web-edition-of-Sandro-s-book",
    githubLink: "https://github.com/justtfelix/Web-edition-of-Sandro-s-book",
    techList: ["JavaScript", "HTML", "SCSS"],
    isLeft: true,
  },
  {
    id: 3,
    image: TipCalculator,
    title: "Tip Calculator",
    description: "The purpose of the project is to take values from the input fields and select the tip percentage by pressing a button. After completion, the amount to be paid based on the entered value will be displayed.",
    designLink: "https://tip-calculator-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/tip-calculator",
    techList: ["React", "TypeScript", "Styled Components", "HTML"],
    isLeft: false,
  },
]

export default featuredProjects;
import { SnappyChat, ElBook, NotesWallpaper } from "../../assets";

const featuredProjects = [
  {
    id: 1,
    image: SnappyChat,
    title: "Snappy Chat",
    description: "The real-time chat application I have developed using MERN stack is a dynamic and interactive platform for users to engage in live conversations seamlessly. the application is a feature-rich platform with real-time messaging updates, efficient backend operations, and visually appealing aesthetics and styles.",
    designLink: "https://snappy-chat-geo.vercel.app",
    githubLink: "https://github.com/gigaamiridze/snappy-chat",
    techList: ["React", "Node", "Express", "MongoDB", "Socket.io"],
    isLeft: false,
  },
  {
    id: 2,
    image: NotesWallpaper,
    title: "Notes App",
    description: "The notes app I built using Django and React is a powerful tool that allows users to create, update, and delete their notes efficiently. With this application, users can organize their thoughts, ideas, tasks, or any other important information in a digital format.",
    designLink: "https://notes-app-client.vercel.app",
    githubLink: "https://github.com/gigaamiridze/notes-app-server",
    techList: ["React", "Django", "Django REST Framework", "Styled Components"],
    isLeft: true,
  },
  {
    id: 3,
    image: ElBook,
    title: "Sandro's Book",
    description: "This book is an online edition of the book. The stories told in this book are about technology and the magical abilities of modern man. There is no printed version of this book, the stories told in the book can be read and heard only thanks to technology.",
    designLink: "https://nokak.github.io/Web-edition-of-Sandro-s-book",
    githubLink: "https://github.com/gigaamiridze/Web-edition-of-Sandro-s-book",
    techList: ["JavaScript", "HTML", "SCSS"],
    isLeft: false,
  },
]

export default featuredProjects;
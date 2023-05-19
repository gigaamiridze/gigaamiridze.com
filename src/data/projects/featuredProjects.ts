import { ElBook, Devfinder, TableChart } from "../../assets";

const featuredProjects = [
  {
    id: 1,
    image: TableChart,
    title: "Table and Chart",
    description: "People table where users can be added, edited and deleted. There is also a table with information on the percentage of people by city.",
    designLink: "https://client-callapp.vercel.app",
    githubLink: "https://github.com/justtfelix/callapp-exercise",
    techList: ["React", "Node", "Express", "Zustand", "Ant Design"],
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
    image: Devfinder,
    title: "Devfinder",
    description: "The project with dark and light theme modes, where you can find registered users on GitHub. This app uses the GitHub API.",
    designLink: "https://github-devfinder-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/github-user-search-app",
    techList: ["React", "TypeScript", "HTML", "SCSS", "GitHub API"],
    isLeft: false,
  }
]

export default featuredProjects;
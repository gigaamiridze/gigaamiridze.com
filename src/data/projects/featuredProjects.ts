import { ElBook, TipCalculator, Devfinder } from "../../assets";

const featuredProjects = [
  {
    id: 1,
    image: ElBook,
    title: "Sandro's Book",
    className: "book",
    description: "This book is an online edition of the book. The stories told in this book are about technology and the magical abilities of modern man. There is no printed version of this book, the stories told in the book can be read and heard only thanks to technology.",
    designLink: "https://nokak.github.io/Web-edition-of-Sandro-s-book",
    githubLink: "https://github.com/justtfelix/Web-edition-of-Sandro-s-book",
    techList: ["JavaScript", "HTML", "SCSS"],
    isLeft: false,
  },
  {
    id: 2,
    image: TipCalculator,
    title: "Tip Calculator",
    className: "tip-calc",
    description: "The purpose of the project is to take values from the input fields and select the tip percentage by pressing a button. After completion, the amount to be paid based on the entered value will be displayed.",
    designLink: "https://tip-calculator-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/tip-calculator",
    techList: ["React", "TypeScript", "Styled Components", "HTML"],
    isLeft: true,
  },
  {
    id: 3,
    image: Devfinder,
    title: "Devfinder",
    className: "devfinder",
    description: "The project with dark and light theme modes, where you can find registered users on GitHub. This app uses the GitHub API.",
    designLink: "https://github-devfinder-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/github-user-search-app",
    techList: ["React", "TypeScript", "HTML", "SCSS", "GitHub API"],
    isLeft: false,
  }
]

export default featuredProjects;
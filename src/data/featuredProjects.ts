import { ElBook, TipCalculator, TodoList } from "../assets";

export const featuredProjects = [
  {
    id: 1,
    image: ElBook,
    title: "Sandro's Book",
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
    description: "The purpose of the project is to take values from the input fields and select the tip percentage by pressing a button. After completion, the amount to be paid based on the entered value will be displayed.",
    designLink: "https://tip-calculator-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/tip-calculator",
    techList: ["React", "TypeScript", "Styled Components", "HTML"],
    isLeft: true,
  },
  {
    id: 3,
    image: TodoList,
    title: "Todo List",
    description: "Todo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do. It helps plan our daily schedules.",
    designLink: "https://todo-list-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/todo-list",
    techList: ["React", "JavaScript", "HTML", "SCSS"],
    isLeft: false,
  }
]
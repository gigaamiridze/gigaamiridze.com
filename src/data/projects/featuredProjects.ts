import { SnappyChat, SpotifyProfile, NotesWallpaper } from "../../assets";

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
    image: SpotifyProfile,
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    designLink: "https://spotify-profile-geo.vercel.app",
    githubLink: "https://github.com/gigaamiridze/spotify-profile",
    techList: ["React", "Styled Components", "Chart.js", "Docker", "Spotify API"],
    isLeft: true,
  },
  {
    id: 3,
    image: NotesWallpaper,
    title: "Notes App",
    description: "The notes app I built using Django and React is a powerful tool that allows users to create, update, and delete their notes efficiently. With this application, users can organize their thoughts, ideas, tasks, or any other important information in a digital format.",
    designLink: "https://notes-app-client.vercel.app",
    githubLink: "https://github.com/gigaamiridze/notes-app-server",
    techList: ["React", "Django", "Django REST Framework", "Styled Components"],
    isLeft: false,
  },
]

export default featuredProjects;
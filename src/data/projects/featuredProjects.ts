import { SnappyChat, SpotifyProfile, WissolLoyalty } from "../../assets";

const featuredProjects = [
  {
    id: 1,
    image: WissolLoyalty,
    title: "Wissol",
    description: "Loyalty & Client Management System for Wissol. As part of this project, I had to make push notifications in a mobile application using React Native, Spring Boot, and Firebase Cloud Messaging.",
    designLink: "https://apps.apple.com/fi/app/wissol/id1634800977",
    githubLink: "https://play.google.com/store/apps/details?id=com.wissol.azry.card&hl=en&gl=US",
    techList: ["React Native", "Spring Boot", "Firebase Cloud Messaging"],
    isLeft: false,
  },
  {
    id: 2,
    image: SnappyChat,
    title: "Snappy Chat",
    description: "The real-time chat application I have developed using MERN stack is a dynamic and interactive platform for users to engage in live conversations seamlessly. the application is a feature-rich platform with real-time messaging updates, efficient backend operations, and visually appealing aesthetics and styles.",
    designLink: "https://snappy-chat-geo.vercel.app",
    githubLink: "https://github.com/gigaamiridze/snappy-chat",
    techList: ["React", "Node", "Express", "MongoDB", "Socket.io"],
    isLeft: true,
  },
  {
    id: 3,
    image: SpotifyProfile,
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    designLink: "https://spotify-profile-geo.vercel.app",
    githubLink: "https://github.com/gigaamiridze/spotify-profile",
    techList: ["React", "Styled Components", "Chart.js", "Docker", "Spotify API"],
    isLeft: false,
  },
]

export default featuredProjects;

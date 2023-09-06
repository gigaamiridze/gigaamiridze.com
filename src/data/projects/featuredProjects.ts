import { SnappyChat, SpotifyProfile, DonationApp } from "../../assets";

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
    image: DonationApp,
    title: "Donation App",
    description: "Through the donation application, the user can log in, register, view the donation items, view their detailed information and, if desired, enter their own card details for donation and confirm payment.",
    designLink: "https://clipchamp.com/watch/S6FgBBOxxLH/embed",
    githubLink: "https://github.com/gigaamiridze/donation-app",
    techList: ["React Native", "Redux Toolkit", "Firebase", "Stripe", "Express"],
    isLeft: false,
  },
]

export default featuredProjects;
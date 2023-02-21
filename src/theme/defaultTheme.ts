export interface Theme {
  colors: {
    darkNavy: string;
    navy: string;
    lightNavy: string;
    lightestNavy: string;
    navyShadow: string;
    darkSlate: string;
    slate: string;
    lightSlate: string;
    lightestSlate: string;
    white: string;
    green: string;
    greenTint: string;
    pink: string;
    blue: string;
  };
}

export const defaultTheme = {
  colors: {
    darkNavy: "#020c1b",
    navy: "#0a192f",
    lightNavy: "#112240",
    lightestNavy: "#233554",
    navyShadow: "rgba(2,12,27,0.7)",
    darkSlate: "#495670",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    white: "#e6f1ff",
    green: "#64ffda",
    greenTint: "rgba(100,255,218,0.1)",
    pink: "#f57dff",
    blue: "#57cbff",
  }
}

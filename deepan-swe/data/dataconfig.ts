import { LinkedInIcon, GithubIcon } from "./icons"; // adjust the path
import type { SocialMediaLink, AboutMeLink } from "@/types";

// Navigation configurations

// Your name
export const name = "Deepan Patel";

// Social links Nav Comp
export const socialComp: SocialMediaLink[] = [
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/deepan-patel188/",
        icon: LinkedInIcon,
        description: "Check out my Linkedin and let's connect!",
    },
    {
        name: "Github",
        href: "https://github.com/deepan-patel",
        icon: GithubIcon,
        description: "Check out my Github for more projects.",
    },
];

// About Me Nav Comp
export const aboutMe: AboutMeLink[] = [
    {
        title: "Work Experience",
        href: "/work-experience",
        description: "Learn more about my professional work experience.",
    },
    {
        title: "Projects",
        href: "/projects",
        description: "Learn more about my projects.",
    },
    {
        title: "Hobbies & Interests",
        href: "/hobbies-interests",
        description: "Learn more about my hobbies and interests.",
    },
];


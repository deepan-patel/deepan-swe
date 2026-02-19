import { LinkedInIcon, GithubIcon } from "./icons"; // adjust the path
import type { SocialMediaLink, AboutMeLink } from "@/types";

// Navigation configurations

// Your name
export const ContactInfo = {
    name: "Deepan Patel",
    email: "deepanpatel189@gmail.com",
    address: "Toronto, ON",
}

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

// Hero Section
export const HeroInfo = {
    badge: "Open to Work",
    title: "Turning Complex Problems Into Clean,",
    highlightedPhrase: "Scalable Software.",
    description: "Passionate developer committed to solving complex problems and continuously expanding my expertise in software development. Dedicated to lifelong learning and building scalable, high-quality solutions.",
}


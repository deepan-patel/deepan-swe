import { LinkedInIcon, GithubIcon } from "./icons"; // adjust the path
import type { SocialMediaLink, SocialItem, AboutMeLink, TimelineItemData } from "@/types";
import { CodeXml } from "lucide-react";

// Navigation configurations

// Your name
export const ContactInfo = {
    name: "Deepan Patel",
    jobTitle: "Software Engineer",
    email: "deepanpatel189@gmail.com",
    address: "Toronto, ON",
}

// Social links Nav Comp

export const socialComp: Record<string, SocialItem> = {
    Linkedin: {
        href: "https://www.linkedin.com/in/deepan-patel188/",
        icon: LinkedInIcon,
        description: "Check out my LinkedIn and let's connect!",
    },
    Github: {
        href: "https://github.com/deepan-patel",
        icon: GithubIcon,
        description: "Check out my GitHub for more projects.",
    },
};

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

// Hero Data
export const HeroInfo = {
    badge: "Open to Work",
    title: "Turning Complex Problems Into Clean,",
    highlightedPhrase: "Scalable Software.",
    description: "Passionate developer committed to solving complex problems and continuously expanding my expertise in software development. Dedicated to lifelong learning and building scalable, high-quality solutions.",
}

// Timeline Data
export const timelineData: TimelineItemData[] = [
    {
        id: "timeline-item-3",
        title: "Freelance Software Engineer",
        type: "Part-time",
        duration: "Dec 2025 - Present",
        icon: CodeXml,
        responsibilities: [
            "Developing full stack applications for clients.",
            "Collaborated with clients to understand their needs and requirements.",
            "Implementing different cloud providers for clients."
        ],
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Convex", "PostgreSQL", "AWS", "Azure"],
    },
    {
        id: "timeline-item-1",
        title: "IBM Software Engineer",
        type: "Full-time",
        duration: "May 2023 — Dec 2025",
        icon: CodeXml,
        responsibilities: [
            "Worked on the  IBM Sterling Ordermanagement Systems team.",
            "Monitored and supported customer production environments for IBM Sterling Order Management (OMS), ensuring high availability, system stability, and SLA compliance",
            "Collaborated with cross-functional teams to enhance product functionality through new releases and fix packs, ensuring stability and continuous improvement.",
            "Led and resolved P1 production incidents, performing root cause analysis and implementing preventive measures to minimize recurring issues.",
            "Developed internal tool to further improved internal processes and efficiency.",
        ],
        skills: ["Java", "MeteorJs", "JVM", "Kubernetes", "Docker", "RHEL", "Unix", "SQL", "Instana", "New Relic", "Kafka", "Services and MQ", "Payments", "Install and Deploy"]
    },
    {
        id: "timeline-item-2",
        title: "IBM Software Engineer",
        type: "Internship",
        duration: "May 2021 — May 2023",
        icon: CodeXml,
        responsibilities: [
            "Trained and mentored new hires and students, onboarding them to production support processes, incident management protocols, and development workflows.",
            "Created comprehensive internal documentation for alert triaging processes, improving response efficiency and reducing resolution time for support teams.",
            "Implemented and configured multiple payment integrations to support diverse client requirements within the system.",
            "Developed new features and tooling enhancements to streamline the L2 support experience and improve operational visibility."
        ],
        skills: ["Payment Gateways", "Java", "Documentation", "Training and Mentoring"],
    },
];

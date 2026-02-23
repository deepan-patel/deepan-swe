import { LinkedInIcon, GithubIcon } from "./icons"; // adjust the path
import type { SocialMediaLink, SocialItem, AboutMeLink, TimelineItemData, ProjectItemData, EducationItemData } from "@/types";
import { CodeXml } from "lucide-react";

// Navigation configurations

// Your name
export const ContactInfo = {
    name: "Deepan Patel",
    jobTitle: "Software Engineer",
    email: "deepanpatel188@gmail.com",
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
        title: "Education & Projects",
        href: "/education-and-projects",
        description: "Learn more about my projects and education.",
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

// Project Data
export const projectData: ProjectItemData[] = [
    {
        title: "Easy Eng",
        type: "Full Stack Elearning Platform",
        url: "https://www.easyeng.ca",
        description: [
            "Served as a Founding Engineer for Easy Eng, building the foundational full-stack architecture for a STEM eLearning platform that enabled non - technical founders to launch and scale a production - ready product used by 100 + students.",
            "Architected and delivered the platform using Next.js 14, React, Prisma and TypeScript, integrating Supabase for authentication and database management and Resend for automated React-based email notifications to improve student engagement and operational efficiency.",

        ],
        stack: ["TypeScript", "Next.js", "React", "Prisma", "Supabase", "Postgres", "Resend", "Vercel"],
    },
    {
        title: "IBM - Pepper the Robot",
        type: "Full stack",
        url: "https://www.youtube.com/watch?v=VkVgoXNhNo4",
        description: [
            "Led development of a robot-driven employee engagement platform to justify the ROI of Pepper by transforming it from a novelty lab asset into a data-generating workplace engagement solution aligned with return-to-office strategy.",
            "Deployed a full-stack solution using Remix (frontend), Go (backend), and IBM Watsonx for sentiment analysis, converting real-time employee interactions into actionable leadership insights."
        ],
        stack: ["Go", "Javascript", "Remix", "WatsonX", "RHEL"],
    },
    {
        title: "Protfolio Website",
        type: "Front-end",
        url: "deepan-swe.vercel.app",
        description: [
            "Developed a modern portfolio website to showcase my technical skills and projects while providing a reusable template for others to build their own professional presence.",
            "Built using Next.js 16, Tailwind CSS, shadcn/ui, and Framer Motion to deliver a responsive, animated, and scalable user experience."
        ],
        stack: ["Typescript", "NextJs", "Tailwindcss", "Shadcn/ui", "Framer Motion", "Vercel"],
    },

    {
        title: "Rendezvous - Event Finder",
        type: "Mobile App",
        url: "https://github.com/deepan-patel/Rendezvous",
        description: [
            "Rendezvous is a mobile event platform that allows users to create, discover, and join events through an interactive map and social event management features.",
            "Built using Flutter (Dart) with Firebase (Authentication, Firestore, Storage, and Cloud Functions) and Google Maps for real-time, location-based event browsing and notifications."
        ],
        stack: ["Flutter", "Dart", "Google Maps API", "Firebase"],
    },
];

// Education
export const educationData: EducationItemData[] = [
    {
        title: "Ontario Tech University",
        subtitle: "Bachelor of Computer Science",
        duration: "Sep 2021 — Apr 2026",
        url: "https://ontariotechu.ca/"
    },
    {
        title: "Technical Specialist - Experienced",
        subtitle: "IBM",
        duration: "November 2025",
        type: "Certification",
        url: "https://www.credly.com/badges/f32b591e-f8c9-4dd9-a7b7-2b0521811392/linked_in_profile"
    },
    {
        title: "Watsonx.ai Technical Essentials",
        subtitle: "IBM",
        duration: "June 2025",
        type: "Certification",
        url: "https://www.credly.com/badges/b659e1c5-bef7-43ca-827b-e0d9fcd85b49/linked_in_profile"
    }
];
// creating my custom types here
import { LucideIcon } from "lucide-react";

export type SocialMediaLink = {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;

}

export type SocialItem = {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
}

export type AboutMeLink = {
    title: string;
    href: string;
    description: string;
}

// Feel free to add more attributes like phone number here
export type ContactInfo = {
    name: string;
    email: string;
    address: string;
}


// Timeline 
export type TimelineItemData = {
    id: string;
    title: string;
    type: string;
    duration: string;
    icon: IconType;
    responsibilities: string[];
    skills: string[];
}

export type ExpandMode = "multi" | "single";

export type ProfessionalTimelineProps = {
    data: TimelineItemData[];
    defaultExpandedIds?: string[]; // defaults to all items expanded
    expandMode?: ExpandMode;       // "multi" | "single" (default: "multi")
}
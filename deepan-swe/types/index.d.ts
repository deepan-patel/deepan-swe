// creating my custom types here
import { LucideIcon } from "lucide-react";

export type SocialMediaLink = {
    name: string;
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
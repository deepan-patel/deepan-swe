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
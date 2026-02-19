"use client"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme/theme-toggle";
import { AboutMeLink, SocialMediaLink } from "@/types";
import { LinkedInIcon, GithubIcon } from "@/data/icons";



export default function Navbar() {

    const socialComp: SocialMediaLink[] = [
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

    ]

    const components: AboutMeLink[] = [
        {
            title: "Work Experience",
            href: "/work-experience",
            description:
                "Learn more about my professional work experience.",
        },
        {
            title: "Projects",
            href: "/projects",
            description:
                "Learn more about my projects.",
        },
        {
            title: "Hobbies & Interests",
            href: "/hobbies-interests",
            description:
                "Learn more about my hobbies and interests.",
        },

    ]

    return (
        <div className="flex flex-row justify-between m-5">
            <div className="flex text-xl font-bold"> Deepan Patel </div>
            {/* nav links and navigation bar */}

            <div className="flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Social Links</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-96">

                                    <div>
                                        {socialComp.map((component) => (

                                            <div className="flex flex-row" key={component.name}>
                                                <div>
                                                    <component.icon width={50} height={50} />
                                                </div>
                                                <ListItem

                                                    title={component.name}
                                                    href={component.href}
                                                    className="grow"

                                                >
                                                    {component.description}
                                                </ListItem>
                                            </div>
                                        ))}
                                    </div>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="hidden md:flex">
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/docs">Clone</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuViewport />
                </NavigationMenu>

            </div>

            {/* action button */}
            <div className="flex gap-2">
                <Button>Coffee Chat</Button>
                <ThemeToggle />
            </div>
        </div>
    );
}


// Other functions needed to render the navigation tab

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="text-muted-foreground line-clamp-2">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

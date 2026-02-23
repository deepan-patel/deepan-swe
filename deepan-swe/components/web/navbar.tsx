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
import { ButtonGroup } from "@/components/ui/button-group"
import { ThemeToggle } from "./theme/theme-toggle";
import { AboutMeLink, SocialMediaLink } from "@/types";
import { LinkedInIcon, GithubIcon } from "@/data/icons";
import HamberBurgerMenu from "./hamburgerMenu";

// importing data from dataconfig.ts
import { ContactInfo, socialComp, aboutMe } from "@/data/dataconfig";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils"

export default function Navbar() {

    return (
        <div className="top-0 sticky bg-background shadow-md p-5">
            <div className="flex flex-row justify-between p-5 ">
                <Link href="/">
                    <div className="flex text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight hover:scale-110 transition-all duration-300"> {ContactInfo.name} </div>
                </Link>

                {/* nav links and navigation bar */}

                <div className="hidden md:flex ">

                    <NavigationMenu>
                        <div className="rounded-xl border bg-muted p-1 shadow-sm">
                            <NavigationMenuList className="gap-0">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "rounded-l-lg rounded-r-none"
                                        )}
                                    >
                                        Social Links
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="w-96">

                                            <div>
                                                {Object.entries(socialComp).map(([key, comp]) => (

                                                    <div className="flex flex-row" key={key}>
                                                        <div>
                                                            <comp.icon width={50} height={50} />
                                                        </div>
                                                        <ListItem

                                                            title={key}
                                                            href={comp.href}
                                                            className="grow"


                                                        >
                                                            {comp.description}
                                                        </ListItem>
                                                    </div>
                                                ))}
                                            </div>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="hidden md:flex">
                                    <NavigationMenuTrigger
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "rounded-r-none rounded-l-none"
                                        )}>
                                        About Me
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {aboutMe.map((component) => (
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
                                    <NavigationMenuLink asChild
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "rounded-l-none"
                                        )}
                                    >
                                        <Link target="_blank" href="/resume/Deepan_Patel_Resume.pdf">Resume</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuViewport />
                        </div>
                    </NavigationMenu>

                </div>

                {/* action button */}
                <div className="hidden md:flex gap-2">
                    <ThemeToggle />

                    <Link target="_blank" href="https://calendly.com/deepanpatel/coffee-chat">
                        <Button>
                            <Coffee data-icon="inline-end" />
                            Coffee Chat
                        </Button>
                    </Link>
                </div>


                {/* Mobile Menu */}
                <div className="md:hidden">
                    <HamberBurgerMenu aboutMe={aboutMe} />
                </div>
            </div >
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

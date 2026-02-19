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
        <div className="flex flex-row justify-between p-10 ">
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
                                    <Link target="_blank" href="https://github.com/deepan-patel/deepan-swe">Clone Website</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <NavigationMenuViewport />
                    </div>
                </NavigationMenu>

            </div>

            {/* action button */}
            <div className="hidden md:flex gap-2">
                <Button>
                    <Coffee data-icon="inline-end" />
                    Coffee Chat
                </Button>
                <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <HamberBurgerMenu aboutMe={aboutMe} />
            </div>
        </div >
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

"use client"

import { Menu } from "lucide-react";
import * as React from "react"
import Link from "next/link"
import { Coffee } from "lucide-react";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme/theme-toggle";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { AboutMeLink } from "@/types";


export default function HamberBurgerMenu({ aboutMe }: { aboutMe: AboutMeLink[] }) {

    return (
        <Drawer>

            <div className="flex flex-row gap-2">

                <DrawerTrigger asChild>
                    <span className="flex">
                        <Menu size={35} />
                    </span>
                </DrawerTrigger>

            </div>

            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Navigate</DrawerTitle>
                        <DrawerDescription>Check out the following pages.</DrawerDescription>
                    </DrawerHeader>
                    <div>
                        {/* add main drawer content here */}
                        <ul className="text-center flex flex-col gap-2">
                            <ListItem href="/" title="Home"></ListItem>


                            {aboutMe.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                </ListItem>
                            ))}
                        </ul>
                    </div>
                    <DrawerFooter className="flex flex-row justify-center">
                        <Link target="_blank" href="https://calendly.com/deepanpatel/coffee-chat">
                            <Button>
                                <Coffee data-icon="inline-end" />
                                Coffee Chat
                            </Button>
                        </Link>
                        <DrawerClose asChild>
                            <Button variant="outline">Go Back</Button>
                        </DrawerClose>
                        <ThemeToggle />
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
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

            <DrawerClose asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="text-muted-foreground line-clamp-2">{children}</div>
                    </div>
                </Link>
            </DrawerClose>

        </li>
    )
}
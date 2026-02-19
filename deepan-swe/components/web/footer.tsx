"use client";
import React from "react";
import Link from "next/link";

import { socialComp, aboutMe, ContactInfo } from "@/data/dataconfig";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Button } from "@/components/ui/button"


export default function Footer() {
    return (
        <footer className="dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        {/* add logo here */}
                        <h3 className="text-3xl font-extrabold text-orange-400">
                            {ContactInfo.name}
                        </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Created a personal portfolio website to showcase my work and support others in their learning and professional growth.
                    </p>
                    <div className="flex space-x-5 pt-2">
                        {socialComp.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="hover:scale-110"
                            >
                                <social.icon width={30} height={30} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link
                                href="#"
                                className="text-gray-600  dark:text-gray-300 dark:hover:text-orange-400 hover:text-orange-400 transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        {aboutMe.map((about) => (
                            <li key={about.title}>
                                <Link
                                    href={about.href}
                                    className="text-gray-600 dark:text-gray-300 dark:hover:text-orange-400 hover:text-orange-400 transition-colors duration-300"
                                >
                                    {about.title}
                                </Link>
                            </li>
                        ))}


                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Resources
                    </h3>
                    <ul className="space-y-3">

                        <li>
                            <Link
                                href="/faqs"
                                className="text-gray-600 dark:text-gray-300 dark:hover:text-orange-400 hover:text-orange-600 transition-colors duration-300"
                            >
                                FAQs
                            </Link>
                        </li>


                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Contact Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        {ContactInfo.address}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        Email: {ContactInfo.email}
                    </p>

                </div>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
                <p>
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
                <p className="mt-1">
                    Designed with
                </p>
                <p className="mt-1">

                    <HoverCard openDelay={10} closeDelay={100}>
                        <HoverCardTrigger asChild>
                            <Button variant="link">
                                <span className="text-red-500">&hearts;</span>
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="flex flex-col gap-0.5">
                            <div className="font-semibold">@deepan-patel</div>
                            <Link className="text-sm hover:text-orange-400" target="_blank" href="https://www.linkedin.com/in/deepan-patel188/">
                                Follow me on Linkedin.
                            </Link>
                            <div className="text-muted-foreground mt-1 text-xs">
                                Love to connect with you!
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </p>
            </div>
        </footer>
    );
};


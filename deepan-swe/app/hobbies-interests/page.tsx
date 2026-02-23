"use client"

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

import { InteractiveLogsTable } from "@/components/uitripled/interactive-logs-table-shadcnui"

export default function HobbiesInterestsPage() {

    const images: string[] = [
        "/images/aboutme5.jpeg",
        "/images/aboutme2.jpeg",
        "/images/aboutme3.jpeg",

    ]

    return (
        <div className="flex min-h-screen items-center justify-center">
            <main className="pt-10 sm:pt-40 px-4 text-center mb-10">
                <div className="max-w-4xl mx-auto mt-10">

                    <h1 className="mt-6 text-2xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        About{" "}
                        <span className="text-orange-400">Me</span>
                    </h1>



                    <div className="mt-2 flex flex-row mx-auto align-center justify-center">
                        <Carousel className="w-full max-w-[12rem] sm:max-w-xs"
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}>
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index} className="basis-full p-0">
                                        <Card className="p-0 overflow-hidden rounded-lg">
                                            <CardContent className="relative aspect-square p-0">
                                                <Image
                                                    src={image}
                                                    alt="about me image"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Review my system logs to learn more.
                    </p>

                    <InteractiveLogsTable />

                </div>

            </main>
        </div>
    )
}
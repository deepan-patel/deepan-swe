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
        <div className="px-4 text-center mb-10">
            <div className="max-w-4xl mx-auto mt-10 relative z-10">

                <div className="mb-12 flex flex-col items-center">
                    <h1 className="mt-6 mb-8 text-3xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-foreground flex items-center justify-center">
                        <span className="text-orange-400 mr-3">{'>'}</span>
                        About_Me
                        <span className="w-3 h-8 sm:h-10 lg:h-12 bg-orange-400 animate-pulse inline-block ml-1" />
                    </h1>

                    <div className="mt-2 w-full max-w-md mx-auto border border-border rounded-xl shadow-sm bg-card overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-2 font-mono text-xs text-muted-foreground flex-1 text-center pr-10">profile_images.tar.gz</span>
                        </div>

                        <div className="p-4 sm:p-6 bg-background flex justify-center">
                            <Carousel className="w-full max-w-[280px] sm:max-w-xs"
                                plugins={[
                                    Autoplay({
                                        delay: 3000,
                                    }),
                                ]}>
                                <CarouselContent>
                                    {images.map((image, index) => (
                                        <CarouselItem key={index} className="basis-full p-0">
                                            <Card className="p-0 overflow-hidden rounded-lg border-2 border-border/50">
                                                <CardContent className="relative aspect-square p-0">
                                                    <Image
                                                        src={image}
                                                        alt="about me image"
                                                        fill
                                                        priority={index === 0}
                                                        className="object-cover"
                                                    />
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-3 text-sm sm:text-base font-mono bg-muted/30 py-3 px-6 rounded-lg border border-border/50">
                        <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Info</span>
                        <span className="text-foreground">Review my system logs to learn more.</span>
                    </div>
                </div>

                <InteractiveLogsTable />

            </div>

        </div>
    )
}
import { buttonVariants } from "../ui/button";
import { ContactInfo, HeroInfo } from "@/data/dataconfig";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative z-10 pt-32 sm:pt-40 px-4 text-center mb-10">

            {/* Circular Profile Image */}
            <div className="relative flex justify-center">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl mt-12 sm:-mt-16">
                    <Image
                        src="/images/landingImage.jpg"
                        alt="Profile"
                        fill
                        sizes="(max-width: 640px) 160px, 192px"
                        className="object-cover object-top-right"
                        priority
                    />
                </div>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mx-auto mt-10">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-green-600 dark:text-green-400 uppercase bg-green-100 dark:bg-green-900/30 rounded-full animate-pulse">
                    {HeroInfo.badge}
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                    {ContactInfo.jobTitle}
                </h1>

                <h1 className="mt-6 text-2xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                    {HeroInfo.title}{" "}
                    <span className="text-orange-400">{HeroInfo.highlightedPhrase}</span>
                </h1>

                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    {HeroInfo.description}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/about-me" className={buttonVariants({
                        variant: "outline",
                        className: "w-full sm:w-auto"
                    })}>
                        More About Me
                    </Link>

                    <Link href="/work-experience" className={buttonVariants({
                        variant: "default",
                        className: "w-full sm:w-auto"
                    })}>
                        My Experience
                    </Link>
                </div>
            </div>
        </div>
    );
}

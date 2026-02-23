import TimelineSection from "@/components/web/timeline";
import OrbitingSkills from "@/components/web/orbitingSkills";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { socialComp } from "@/data/dataconfig";
import { LinkedInIcon } from "@/data/icons";


export default function WorkExperiencePage() {
    return (
        <div className="relative z-10 pt-10 sm:pt-40 px-4 text-center mb-10">


            {/* main title */}
            <div className="max-w-4xl mx-auto mt-10 relative z-10">

                <h1 className="mt-6 text-2xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                    Work{" "}
                    <span className="text-orange-400">Experience</span>
                </h1>

                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Where I’ve applied my skills to solve real problems and build meaningful software.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                    <a href="#TimelineSection" className={buttonVariants({
                        variant: "outline",
                        className: "w-full sm:w-auto"
                    })}>
                        View Timeline
                    </a>

                    <Link target="_blank" href={socialComp.Linkedin.href} className={buttonVariants({
                        variant: "default",
                    })}>
                        <LinkedInIcon width={25} height={25} />
                        View Linkedin
                    </Link>
                </div>

            </div>
            <div className="relative z-0 mt-20">
                <OrbitingSkills />
            </div>
            <TimelineSection />
        </div>
    );
}
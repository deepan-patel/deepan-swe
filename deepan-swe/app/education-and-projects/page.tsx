
import { projectData } from "@/data/dataconfig";
import ProjectCard from "@/components/web/projectCard";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { educationData } from "@/data/dataconfig";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {


    return (
        <div className="flex min-h-screen items-center justify-center">
            <main className="pt-10 sm:pt-40 px-4 text-center mb-10">
                <div className="max-w-4xl mx-auto mt-10">

                    {/* education */}
                    <div>
                        <h1 className="mt-6 text-2xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                            My{" "}
                            <span className="text-orange-400">Education</span>
                        </h1>

                        <div className="space-y-5">
                            {educationData.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex flex-col">

                                        <div className="flex flex-row justify-between">
                                            <Link href={edu.url} className="font-semibold text-foreground hover:underline">
                                                {edu.title}
                                            </Link>
                                            <span className="text-xs text-muted-foreground">
                                                {edu.duration}
                                            </span>
                                        </div>
                                        <div className="flex flex-row justify-between">

                                            <p className="text-sm text-muted-foreground">
                                                {edu.subtitle}
                                            </p>
                                            {edu.type && (
                                                <Badge variant="outline" className="mt-2 text-xs">
                                                    {edu.type}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>





                                </div>
                            ))}
                        </div>
                    </div>

                    <h1 className="mt-6 text-2xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        My{" "}
                        <span className="text-orange-400">Projects</span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Check out some of the projects I’ve worked on.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* add buttons here */}


                    </div>


                </div>

                {/* projects */}
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    {projectData.map((project, index) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

            </main>
        </div>
    );
}
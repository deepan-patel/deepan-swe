import type { ProjectItemData } from "@/types";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { Separator } from "../ui/separator";

export default function ProjectCard(project: ProjectItemData) {
    return (
        <div

            className="p-5 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors cursor-pointer space-y-3"
        >
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-foreground">
                    {project.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Link href={project.url}>
                        <ExternalLinkIcon className="sm:w-3 sm:h-3 md:w-5 md:h-5 hover:text-orange-400" />
                    </Link>

                </div>
            </div>
            <p className="text-sm text-muted-foreground text-left">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
                {project.stack.map((stack) => (
                    <Badge key={stack} variant="outline" className="text-xs">
                        {stack}
                    </Badge>
                ))}
            </div>
        </div>

    )
}
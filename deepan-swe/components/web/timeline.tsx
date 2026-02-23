"use client";

import React, { memo, useCallback, useState } from "react";
import { CodeXml, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { TimelineItemData, ProfessionalTimelineProps } from "@/types";
import { timelineData } from "@/data/dataconfig";


// --- COMPONENTS ---
interface TimelineItemContentProps {
    item: TimelineItemData;
}

const TimelineItemContent = memo(function TimelineItemContent({ item }: TimelineItemContentProps) {
    return (
        <div className="mt-6 space-y-4">
            {/* Responsibilities */}
            <ul className="space-y-3">
                {item.responsibilities.map((responsibility, idx) => (
                    <li
                        key={`${item.id}-resp-${idx}`}
                        className="flex text-left gap-3 text-sm text-slate-600 dark:text-slate-400"
                    >
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed flex-grow">{responsibility}</span>
                    </li>
                ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((skill, skillIdx) => (
                    <Badge
                        key={`${item.id}-skill-${skillIdx}`}
                        className="bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors px-3 py-1"
                    >
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    );
});
TimelineItemContent.displayName = "TimelineItemContent";

interface TimelineItemProps {
    item: TimelineItemData;
    expanded: boolean;
    onToggle: (id: string) => void;
}

const TimelineItem = memo(function TimelineItem({
    item,
    expanded,
    onToggle,
}: TimelineItemProps) {
    const Icon = item.icon;
    const headerId = `timeline-header-${item.id}`;
    const contentId = `timeline-content-${item.id}`;

    return (
        <li className="relative">
            {/* Timeline marker with icon */}
            <div className="absolute left-1 top-5 w-6 h-6 bg-slate-400 dark:bg-slate-500 rounded-full border-2 border-white dark:border-black flex items-center justify-center">
                <Icon className="w-3.5 h-3.5 text-white dark:text-black" />
            </div>

            {/* Card */}
            <div className="ml-14 pb-8">
                <div className="bg-white/50 dark:bg-gray-700 rounded-lg p-4 border border-slate-200/80 dark:border-gray-800/50 transition-all duration-200">
                    <button
                        id={headerId}
                        className="w-full text-left group cursor-pointer"
                        onClick={() => onToggle(item.id)}
                        aria-expanded={expanded}
                        aria-controls={contentId}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                                    <span>{item.type}</span>
                                    <span aria-hidden>•</span>
                                    <span>{item.duration}</span>
                                </div>
                            </div>

                            <div className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                                {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </div>
                        </div>
                    </button>

                    {expanded && (
                        <div id={contentId} role="region" aria-labelledby={headerId}>
                            <TimelineItemContent item={item} />
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
});
TimelineItem.displayName = "TimelineItem";

// --- MAIN TIMELINE ---
export function ProfessionalTimeline({
    data,
    defaultExpandedIds,
    expandMode = "multi",
}: ProfessionalTimelineProps) {
    const initial = defaultExpandedIds ?? data.map((d) => d.id);
    const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

    const onToggle = useCallback(
        (id: string) => {
            setExpanded((prev) => {
                const next = new Set(prev);
                if (expandMode === "single") {
                    return prev.has(id) ? new Set() : new Set([id]);
                }
                if (next.has(id)) {
                    next.delete(id);
                } else {
                    next.add(id);
                }
                return next;
            });
        },
        [expandMode]
    );

    return (
        <ol className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300 dark:bg-gray-800" aria-hidden />

            {data.map((item) => (
                <TimelineItem
                    key={item.id}
                    item={item}
                    expanded={expanded.has(item.id)}
                    onToggle={onToggle}
                />
            ))}
        </ol>
    );
}

// --- APP ENTRY POINT ---
export default function TimelineSection() {
    return (
        <div id="TimelineSection" className="min-h-screen p-4 sm:p-8">
            <div className="max-w-3xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Professional Experience</h1>
                </header>


                {/* Set expandMode="single" for accordion behavior */}
                <ProfessionalTimeline data={timelineData} expandMode="multi" />
            </div>
        </div>
    );
}
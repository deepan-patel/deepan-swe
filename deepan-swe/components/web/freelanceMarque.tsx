"use client"
import { motion } from "framer-motion";
import { freelanceWorkIntrests } from "@/data/dataconfig";
export default function FreelanceMarque() {
    return (
        <section className="max-w-5xl mx-auto mt-10">
        <div className="relative overflow-hidden rounded-2xl border bg-muted/40 py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="flex gap-6 px-6">
                <motion.div
                    className="flex items-center gap-3 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 28,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    {[...freelanceWorkIntrests, ...freelanceWorkIntrests].map((item, idx) => (
                        <span
                            key={`${item}-${idx}`}
                            className="inline-flex items-center rounded-full border bg-background px-4 py-1 text-sm font-medium text-foreground/90 shadow-sm hover:text-orange-400"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
    );
}
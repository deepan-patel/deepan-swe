import FreelanceMarque from "@/components/web/freelanceMarque";

export default function FreelancePage() {
    return (
        <div className="px-4 mb-16">
            <div className="max-w-5xl mx-auto pt-16 pb-10 text-center relative z-10">
                <p className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 dark:border-orange-900/40 dark:bg-orange-950/40 dark:text-orange-300 animate-pulse">
                    Open for freelance projects
                </p>
                <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                    Let&apos;s build your next <span className="text-orange-400">project</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                    If you are interested in any of the following areas, let&apos;s talk and build something great together. Use the{" "}
                    <span className="font-semibold text-orange-500">Coffee Chat</span> button in the top-right of the navbar to contact me.
                </p>

                <FreelanceMarque />
            </div>

  
        </div>
    );
}
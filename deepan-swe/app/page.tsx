import Hero from "@/components/web/hero";
import Image from "next/image";
import TimelineSection from "@/components/web/timeline";
import InfiniteLogo from "@/components/web/infiniteLogo";

export default function Home() {
  return (

    <div className="flex min-h-screen items-center justify-center">
      <main>
        <Hero />
      </main>

    </div>
  );
}

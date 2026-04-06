import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyuseSection } from "@/components/sections/why-use";
import { WaitlistSection } from "@/components/sections/waitlist";
import { FooterSection } from "@/components/sections/footer";
import SpotlightBackground from "@/components/ui/spotlight-background";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <SpotlightBackground>
        <ProblemSection />
        <HowItWorksSection />
        <WhyuseSection />
      </SpotlightBackground>
      <WaitlistSection />
      <FooterSection />
    </main>
  );
}
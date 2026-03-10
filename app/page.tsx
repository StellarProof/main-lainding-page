import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { AnchorsSection } from "@/components/sections/anchors";
import { UsersSection } from "@/components/sections/users";
import { StellarSection } from "@/components/sections/stellar";
import { WaitlistSection } from "@/components/sections/waitlist";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A12]">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <AnchorsSection />
      <UsersSection />
      <StellarSection />
      <WaitlistSection />
      <FooterSection />
    </main>
  );
}
import { About } from "@/components/About";
import { AboutJourney } from "@/components/AboutJourney";
import { BeyondStage } from "@/components/BeyondStage";
import { Contact } from "@/components/Contact";
import { ExperienceCards } from "@/components/ExperienceCards";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { Hero } from "@/components/Hero";
import { LanguageChoiceOverlay } from "@/components/LanguageChoiceOverlay";
import { Navbar } from "@/components/Navbar";
import { OnStage } from "@/components/OnStage";
import { QuoteSection } from "@/components/QuoteSection";
import { SpeakingTopics } from "@/components/SpeakingTopics";
import { ScrollMotion } from "@/components/ScrollMotion";

export default function Home() {
  return (
    <>
      <ScrollMotion />
      <LanguageChoiceOverlay />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <AboutJourney />
        <SpeakingTopics />
        <BeyondStage />
        <OnStage />
        <ExperienceCards />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}

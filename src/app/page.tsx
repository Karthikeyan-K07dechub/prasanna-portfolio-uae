import { About } from "@/components/About";
import { BeyondStage } from "@/components/BeyondStage";
import { Contact } from "@/components/Contact";
import { ExperienceCards } from "@/components/ExperienceCards";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OnStage } from "@/components/OnStage";
import { PostEvent } from "@/components/PostEvent";
import { QuoteSection } from "@/components/QuoteSection";
import { SpeakingTopics } from "@/components/SpeakingTopics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <SpeakingTopics />
        <BeyondStage />
        <OnStage />
        <PostEvent />
        <ExperienceCards />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

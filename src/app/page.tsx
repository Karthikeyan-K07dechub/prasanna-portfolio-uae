import { About } from "@/components/About";
import { BeyondStage } from "@/components/BeyondStage";
import { Contact } from "@/components/Contact";
import { ExperienceCards } from "@/components/ExperienceCards";
import { FeaturedTestimonial } from "@/components/FeaturedTestimonial";
import { Footer } from "@/components/Footer";
import { GlobalReach } from "@/components/GlobalReach";
import { Hero } from "@/components/Hero";
import { IdealFit } from "@/components/IdealFit";
import { LogoTicker } from "@/components/LogoTicker";
import { MediaKit } from "@/components/MediaKit";
import { Navbar } from "@/components/Navbar";
import { OnStage } from "@/components/OnStage";
import { PostEvent } from "@/components/PostEvent";
import { QuoteSection } from "@/components/QuoteSection";
import { SpeakingTopics } from "@/components/SpeakingTopics";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <LogoTicker />
        <VideoSection />
        <OnStage />
        <SpeakingTopics />
        <About />
        <GlobalReach />
        <BeyondStage />
        <PostEvent />
        <MediaKit />
        <IdealFit />
        <FeaturedTestimonial />
        <TestimonialsMarquee />
        <QuoteSection />
        <ExperienceCards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

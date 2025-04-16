import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import VideoSection from "@/components/VideoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import InstructorsSection from "@/components/InstructorsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ProblemsFacedSection from "@/components/ProblemsFacedSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemsFacedSection />
      <FeaturesSection />
      <WhoIsItForSection />
      <VideoSection />
      <HowItWorksSection />
      <CurriculumSection />
      <TestimonialsSection />
      <BlogSection />
      <InstructorsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

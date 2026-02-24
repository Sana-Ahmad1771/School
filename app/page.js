import Image from "next/image";
import Hero from "./components/pages/home/Hero";
import Header from "./components/common/Header";
import AboutSection from "./components/pages/home/AboutSection";
import ProgramsSection from "./components/pages/home/ProgramSection";
import AreasOfStudy from "./components/pages/home/CampusEvents";
import FAQSection from "./components/pages/home/FAQSection";
import NewsSection from "./components/pages/home/NewsSection";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <AboutSection />
      <NewsSection />
      <AreasOfStudy />
      <ProgramsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

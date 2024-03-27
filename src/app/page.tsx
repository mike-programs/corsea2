import ArtistSection from "@/components/Artist-Section/ArtistSection";
import BlogSection from "@/components/Blog-Section/BlogSection";
import CategorySection from "@/components/Category-Section/CategorySection";
import ExploreSection from "@/components/Explore-Section/ExploreSection";
import Footer from "@/components/Footer/Footer";
import LandingPage from "@/components/Landing-Page/LandingPage";
import LogoSection from "@/components/Logo-Section/LogoSection";
import NewsLetter from "@/components/Newsletter-section/NewsLetter";
import SocialMedia from "@/components/Social-Media-Section/SocialMedia";

export default function Home() {
  return (
    <main className="max-width relative md:text-xs">
      <LandingPage />
      <ExploreSection />
      <CategorySection />
      <LogoSection />
      <BlogSection />
      <NewsLetter />
      <ArtistSection />
      <SocialMedia />
      <Footer />
    </main>
  );
}

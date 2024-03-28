import ArtistSection from "@/components/artist-section/ArtistSection";
import BlogSection from "@/components/blog-section/BlogSection";
import CategorySection from "@/components/category-section/CategorySection";
import ExploreSection from "@/components/explore-section/ExploreSection";
import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/landing-page/LandingPage";
import LogoSection from "@/components/logo-section/LogoSection";
import NewsLetter from "@/components/newsletter-section/NewsLetter";
import SocialMedia from "@/components/social-media-section/SocialMedia";

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

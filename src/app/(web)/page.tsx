import Gallery from "@/components/gallery/gallery";
import HeroSection from "@/components/hero-section/hero-section";
import PageSearch from "@/components/page-search/page-search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-balance">
      <HeroSection />
      <PageSearch />

      {/* featured room */}
      {/* gallery */}
      <Gallery />
      {/* news letter */}
    </main>
  );
}

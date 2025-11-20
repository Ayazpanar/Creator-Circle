import HeroSection from "@/components/hero-section";
import MouseEffect from "@/components/mouse-effect";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse" />
      <MouseEffect />
      <HeroSection />
    </div>
  );
}

import React from "react";
import MouseEffect from "./mouse-effect";
import HeroSection from "./hero-section";
import Features from "./features";
import PlatformTabs from "./platform-tabs";
import StatsCards from "./stats-cards";
import Testimonials from "./testimonials";
import CtaSection from "./cta-section";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div>
      {/* Other landing page components */}
      <MouseEffect />
      <HeroSection />
      <Features />
      <PlatformTabs />
      <StatsCards />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

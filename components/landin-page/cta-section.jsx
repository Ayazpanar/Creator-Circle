import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative z-10 py-16 sm:py-24 px-6 bg-linear-to-r from-gray-900/50 to-purple-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 ">
          <span className="gradient-text-primary">Ready to create?</span>
        </h2>
        <p className="text-lg max-w-2xl mb-8 sm:mb-12 sm:text-xl text-gray-400 mx-auto ">
          Join thousands of creators are already building their audiance and
          growing their business with our AI-powered platform
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link href="/dashboard">
          <Button
            variant="primary"
            className="rounded-full text-white w-full"
            size="xl"
          >
            Start Creating for Free
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/feed">
          <Button variant="outline" className="rounded-full w-full" size="xl">
            Explore Content Feed
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;

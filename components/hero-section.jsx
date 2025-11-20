import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Playwrite_US_Trad } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playwrite = Playwrite_US_Trad({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const HeroSection = () => {
  return (
    <section className="relative z-10 mt-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
              <span
                className={`block font-black text-white ${playwrite.className}`}
              >
                Create.
              </span>
              <span className="block font-light italic text-purple-300">
                Publish.
              </span>
              <span className="block font-black bg-linear-to-br from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl md:max-w-none">
              The AI-powered platform that turnes your ideas into
              <span
                className={`text-purple-300 font-bold sm:text-3xl ${playwrite.className}`}
              >
                {" "}
                engaging content
              </span>{" "}
              and helps you build a thriving creator business.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <Link href="/dashboard">
              <Button
                size="xl"
                variant="primary"
                className="rounded-full w-full sm:w-auto text-white"
              >
                Start Creating for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/feed">
              <Button
                size="xl"
                variant="outline"
                className="rounded-full w-full sm:w-auto"
              >
                Explore Content
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/banner.png"
            alt="Platform banner"
            height={500}
            width={700}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

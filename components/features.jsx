import { features } from "@/lib/data";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const Features = () => {
  return (
    <section
      id="features"
      className="relative mt-14 z-10 py-15 sm:py-15 px-4 sm:px-6 bg-linear-to-r from-gray-900/50 to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 ">
            <span className="gradient-text-primary">Everything you need</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            From AI-powered writing assistantce to advance analiytics,
            we&apos;ve build the complete toolset to help you create, manage,
            and grow your online presence with ease.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:scale-105 card-glass"
            >
              <CardContent>
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

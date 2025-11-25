import { socialProofStats } from "@/lib/data";
import React from "react";

const StatsCards = () => {
  return (
    <section className="relative z-10 py-16 sm:py-24 px-6 bg-linear-to-r from-gray-900/50 to-purple-900/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-12 sm:mb-16 ">
          <span className="gradient-text-primary">
            Loved by creators globally
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {socialProofStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon className="text-white h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 gradient-text-accent">
                {stat.metric}
              </div>
              <div className="text-gray-400 text-base sm:text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCards;

import { testimonials } from "@/lib/data";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-12 sm:mb-16 ">
          <span className="gradient-text-primary">What creators say</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:scale-105 card-glass"
            >
              <CardContent>
                <div className="flex flex-col gap-3 sm:gap-4 text-start items-start">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-200 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 font-semibold mb-4 sm:mb-6 italic">
                    {`"${testimonial.content}"`}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12">
                      <Image
                        src={`https://images.unsplash.com/photo-${testimonial.imageId}?w=100&h=100&fit=crop&crop=face`}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full border-2 border-gray-700"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>

                      <div className="text-gray-400 text-sm">
                        {testimonial.role}
                      </div>

                      <Badge variant={"secondary"} className="mt-1">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

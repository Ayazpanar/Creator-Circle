import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative border-t z-10 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
        <p className="text-muted-foreground">
          Made with
          <Heart className="inline-block w-5 h-5 m-1 text-pink-600 animate-pulse fill-pink-600" />
          by{" "}
          <span className="font-bold bg-linear-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
            Ayazpanar.
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

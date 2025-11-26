import { Heart } from "lucide-react";
import React from "react";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { LuExternalLink } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t z-10 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
        <p className="text-muted-foreground">
          Made with
          <Heart className="inline-block w-5 h-5 m-1 text-pink-600 animate-pulse fill-pink-600" />
          by
          <span className="font-bold bg-linear-to-r ml-1 from-purple-700 to-blue-700 bg-clip-text text-transparent">
            Ayazpanar.
          </span>
        </p>
        <div className="mt-2 flex gap-2 sm:gap-3 items-center justify-center">
          <Link
            href="https://linkedin.com/in/ayazpanar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandLinkedin className="inline-block h-6 w-6 hover:text-white cursor-pointer" />
          </Link>
          <Link
            href="https://github.com/ayazpanar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithub className="inline-block h-6 w-6 border-2 border-amber-50/40 hover:border-white rounded-full p-1 hover:text-white cursor-pointer" />
          </Link>
          <Link
            href="https://wa.me/+919909130787"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandWhatsapp className="inline-block h-6 w-6 hover:border-white hover:text-white cursor-pointer" />
          </Link>
          <Link href="mailto:ayazpanar0786@gmail.com">
            <SiGmail className="inline-block h-6 w-6 text-xs text hover:text-white cursor-pointer" />
          </Link>
          <Link
            href="https://ayazpanar-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuExternalLink className="inline-block h-6 w-6 hover:text-white cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

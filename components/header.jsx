"use client";
import { useStoreUser } from "@/hooks/useStoreUserEffect";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import React from "react";
import { BarLoader } from "react-spinners";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  const { isLoading, isAuthenticated } = useStoreUser();
  const path = usePathname();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="backdrop-blur-md bg-white/10 border-3 border-white/20 rounded-4xl h-12 sm:h-14 px-4 sm:px-5 flex items-center justify-between gap-2 space-x-3 sm:space-x-4">
        <Link href={isAuthenticated ? "/feed" : "/"} className="flex shrink">
          <Image
            src="/logo.png"
            alt="CC Logo"
            width={96}
            height={32}
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        {path === "/" && (
          <div className="hidden lg:flex space-x-6 flex-1 justify-center">
            <Link
              href={"#features"}
              className="text-white font-medium transition-all duration-300 hover:text-purple-300 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href={"#testimonials"}
              className="text-white font-medium transition-all duration-300 hover:text-purple-300 cursor-pointer"
            >
              Testimonials
            </Link>
          </div>
        )}
        <div className="flex items-center gap-2 sm:gap-3 shrink-2">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:inline ml-2">Dashboard</span>
              </Button>
            </Link>
            <UserButton />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant={"ghost"} size={"sm"}>
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button
                variant={"primary"}
                size={"sm"}
                className={"whitespace-nowrap"}
              >
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0.5 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"90%"} height={1} color="#D8B4FE" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

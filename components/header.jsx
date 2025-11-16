"use client";
import { useStoreUser } from "@/hooks/useStoreUserEffect";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import React from "react";
import { BarLoader } from "react-spinners";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { isLoading, isAuthenticated } = useStoreUser();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="backdrop-blur-md bg-white/10 border-3 border-white/20 rounded-4xl h-12 sm:h-14 px-4 sm:px-5 flex items-center justify-between gap-2 space-x-3 sm:space-x-4">
        
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CC Logo"
            width={96}
            height={32}
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>
        
        <Unauthenticated>
          <SignInButton />
          <SignUpButton>
            <Button variant={"primary"} size={"sm"}>
              Sign Up
            </Button>
          </SignUpButton>
        </Unauthenticated>
        <Authenticated>
          <UserButton />
        </Authenticated>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#D8B4FE" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

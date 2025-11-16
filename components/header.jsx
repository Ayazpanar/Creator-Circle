"use client";
import { useStoreUser } from "@/hooks/useStoreUserEffect";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import React from "react";
import {BarLoader} from "react-spinners";

const Header = () => {
  const { isLoading, isAuthenticated } = useStoreUser();

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="backdrop-blur-md bg-white/20 border-3 border-white/10 rounded-4xl h-12 sm:h-14 px-4 sm:px-5 flex items-center justify-end space-x-3 sm:space-x-4">
        <Unauthenticated>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
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

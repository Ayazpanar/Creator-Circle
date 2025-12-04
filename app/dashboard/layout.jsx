"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import {
  FileText,
  LayoutDashboard,
  Menu,
  PenTool,
  Settings,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const sideBarItems = [
  { title: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
  { title: "Create Post", icon: PenTool, link: "/dashboard/create" },
  { title: "My Posts", icon: FileText, link: "/dashboard/posts" },
  { title: "Followers", icon: Users, link: "/dashboard/followers" },
];
const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();
  const { data: draftPost } = useConvexQuery(api.posts.getUserDraft);
  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 z-50 transition-transform duration-300 lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="CC Logo"
              width={100}
              height={42}
              className="h-12 w-auto object-contain"
            />
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSideBar}
            className="lg:hidden"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        {/* Navigation Section */}
        <nav className="p-4 space-y-2">
          {sideBarItems.map((item, index) => {
            const isActive =
              pathName === item.link ||
              (item.link !== "/dashboard" && pathName.startsWith(item.link));

            return (
              <Link
                key={index}
                href={item.link}
                onClick={() => setIsSidebarOpen(false)}
              >
                <div
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group mb-2",
                    isActive
                      ? "bg-linear-to-r from-purple-600/20 to-blue-500/20 text-white border border-purple-500"
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5 transition-colors",
                      isActive
                        ? "text-purple-500"
                        : "text-slate-300 group-hover:text-white"
                    )}
                  />
                  <span className="font-medium">{item.title}</span>
                  {item.title === "Create Post" && draftPost && (
                    <Badge className="ml-auto text-xs bg-orange-500/20 text-orange-300 border-orange-500/30">
                      Draft
                    </Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
          <Link
            href="/dashboard/settings"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Button
              variant="outline"
              className="w-full justify-start rounded-xl p-4 text-slate-300 hover:text-white"
              size="sm"
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </Link>
        </div>
      </aside>
      <div className="ml-0 lg:ml-64">
        <header className="fixed w-full z-30 bg-slate-800/80 border-b backdrop-blur-md border-slate-700 top-0 right-0 ">
          <div className="flex items-center justify-between px-4 py-3 lg:px-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={toggleSideBar}
              >
                <Menu className="h-5 w-5 lg:hidden text-white" />
              </Button>
            </div>
            <div className="flex items-center space-x-4 lg:h-16">
              <UserButton />
            </div>
          </div>
        </header>
        <main className="mt-[60px] lg:mt-[88px]">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

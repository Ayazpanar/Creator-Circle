"use client";
import PostEditor from "@/components/post-editor";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BarLoader } from "react-spinners";

const CreatePost = () => {
  const { data: existingDraft, loading: isDraftLoading } = useConvexQuery(
    api.posts.getUserDraft
  );

  const { data: currentUser, loading: userLoading } = useConvexQuery(
    api.users.getCurrentUser
  );

  if (isDraftLoading || userLoading) {
    return <BarLoader width={"100%"} color="#D8B4FE" />;
  }

  if (!currentUser.username) {
    return (
      <div className="flex items-center justify-center p-8 h-80">
        <div className="max-w-2xl w-full space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white">Username Required</h1>
          <p className="text-slate-400 text-lg">
            Set up a username to create and share your posts
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard/settings">
              <Button variant="primary">
                Set Up Username
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <PostEditor initialData={existingDraft} mode="create" />;
};

export default CreatePost;

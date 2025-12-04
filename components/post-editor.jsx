"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useConvexMutation } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const postSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  content: z.string().min(1, "Content is required"),
  catagory: z.string().optional(),
  tags: z.array(z.string().max(10, "Maximum 10 tags allowed")).optional(),
  featuredImageUrl: z.string().optional(),
  scheduledFor: z.string().optional(),
});

const PostEditor = ({ initialData = null, mode = "create" }) => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isImageModelOpen, setIsImageModelOpen] = useState(false);
  const [imageModelType, setImageModelType] = useState("featured");
  const router = useRouter();

  const { executeMutation: createPost, loading: isCreateLoading } =
    useConvexMutation(api.posts.create);
  const { executeMutation: updatePost, loading: isUpdateLoading } =
    useConvexMutation(api.posts.update);

  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialData?.title || "",
      content: initialData?.content || "",
      catagory: initialData?.catagory || "",
      tags: initialData?.tags || [],
      featuredImageUrl: initialData?.featuredImageUrl || "",
      scheduledFor: initialData?.scheduledFor
        ? new Date(initialData.scheduledFor).toISOString().slice(0, 16)
        : "",
    },
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* header */}

      {/* editor */}
      {/* settings dialog */}
      {/* image upload dialog */}
    </div>
  );
};

export default PostEditor;

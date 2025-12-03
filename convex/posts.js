import { internal } from "./_generated/api";
import { mutation, query } from "./_generated/server";

// Get user drafts (one draft per user)
export const getUserDraft = query({
  handler: async (ctx) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);

    const draft = await ctx.db
      .query("posts")
      .filter((q) =>
        q.and(
          q.eq(q.field("authorId"), user._id),
          q.eq(q.field("status"), "draft")
        )
      )
      .unique();
    return draft;
  },
});

//Create a new post
export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    status: v.union(v.literal("draft"), v.literal("published")),
    tags: v.array(v.string()),
    catagory: v.optional(v.string()),
    featuredImageUrl: v.optional(v.string()),
    scheduledFor: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);
    const existingDraft = await ctx.db
      .query("posts")
      .filter((q) =>
        q.and(
          q.eq(q.field("authorId"), user._id),
          q.eq(q.field("status"), "draft")
        )
      )
      .unique();

    const now = Date.now();
    //If publishing and we have an existing draft, update it instead of creating a new one
    if (args.status === "published" && existingDraft) {
      await ctx.db.patch(existingDraft._id, {
        title: args.title,
        content: args.content,
        status: "published",
        tags: args.tags || [],
        catagory: args.catagory,
        featuredImageUrl: args.featuredImageUrl,
        publishedAt: now,
        updatedAt: now,
        scheduledFor: args.scheduledFor,
      });
      return existingDraft._id;
    }
    //If creating a draft and one already exists, update it
    if (args.status === "draft" && existingDraft) {
      await ctx.db.patch(existingDraft._id, {
        title: args.title,
        content: args.content,
        tags: args.tags || [],
        catagory: args.catagory,
        featuredImageUrl: args.featuredImageUrl,
        scheduledFor: args.scheduledFor,
      });
      return existingDraft._id;
    }

    // create a new post (either draft or published)
    const newPostId = await ctx.db.insert("posts", {
      title: args.title,
      content: args.content,
      status: args.status,
      authorId: user._id,
      tags: args.tags || [],
      catagory: args.catagory,
      featuredImageUrl: args.featuredImageUrl,
      createdAt: now,
      updatedAt: now,
      publishedAt: args.status === "published" ? now : undefined,
      scheduledFor: args.scheduledFor,
      views: 0,
      likes: 0,
    });
    return newPostId;
  },
});

//Update the post
export const update = mutation({
  args: {
    id: v.id("posts"),
    title: v.string(),
    content: v.string(),
    status: v.union(v.literal("draft"), v.literal("published")),
    tags: v.array(v.string()),
    catagory: v.optional(v.string()),
    featuredImageUrl: v.optional(v.string()),
    scheduledFor: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);

    const post = await ctx.db.get(args.id);
    if (!post) throw Error("Post not found");

    if (post.authorId === user._id)
      throw Error("You don't have permission to update this post");

    const now = Date.now();
    const updateData = {
      updatedAt: now,
    };
    //Provided fields for update
    if (args.title !== undefined) updateData.title = args.title;
    if (args.content !== undefined) updateData.content = args.content;
    if (args.tags !== undefined) updateData.tags = args.tags;
    if (args.catagory !== undefined) updateData.catagory = args.catagory;
    if (args.featuredImageUrl !== undefined)
      updateData.featuredImageUrl = args.featuredImageUrl;
    if (args.scheduledFor !== undefined)
      updateData.scheduledFor = args.scheduledFor;
    //handle status change
    if (args.status !== undefined) {
      updateData.status = args.status;

      if (args.status === "published" && post.status === "draft") {
        updateData.publishedAt = now;
      }
    }
    await ctx.db.patch(args.id, updateData);
    return args.id;
  },
});

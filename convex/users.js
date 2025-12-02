import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    // Check if we've already stored this identity before.
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (user !== null) {
      // If we've seen this identity before but the name has changed, patch the value.
      if (user.name !== identity.name) {
        await ctx.db.patch(user._id, { name: identity.name });
      }
      return user._id;
    }
    // If it's a new identity, create a new `User`.
    return await ctx.db.insert("users", {
      name: identity.name ?? "Anonymous",
      email: identity.email,
      tokenIdentifier: identity.tokenIdentifier,
      username: identity.username ?? "",
      imageUrl: identity.pictureUrl,
      createdAt: Date.now(),
      lastActiveAt: Date.now(),
    });
  },
});

export const getCurrentUser = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User Not Authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (!user) throw new Error("User Not Found");

    return user;
  },
});

export const updateUserName = mutation({
  args: {
    username: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.runQuery(internal.users.getCurrentUser);

    const userNameValidation = /^[a-zA-Z0-9_-]+$/;
    if (!userNameValidation.test(args.username)) {
      throw new Error(
        "Invalid username. It should be only contain letters, numbers, and underscores."
      );
    }
    const userNameLenghtRegex = /^.{3,20}$/;
    if (!userNameLenghtRegex.test(args.username)) {
      throw new Error("Username must be between 3 and 20 characters long.");
    }

    if (args.username === user.username) {
      const existingUser = await ctx.db
        .query("users")
        .withIndex("by_username", (q) => q.eq("username", args.username))
        .unique();
      if (existingUser) {
        throw new Error("Username is already taken.");
      }
    }
    await ctx.db.patch(user._id, {
      username: args.username,
      lastActiveAt: Date.now(),
    });
    return user._id;
  },
});

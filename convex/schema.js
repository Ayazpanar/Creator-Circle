import { defineTable, defineSchema } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    imageUrl: v.string(),
    username: v.string(),

    //Activity Timestamps
    createdAt: v.number(),
    lastActiveAt: v.number(),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"]) //Lookup email
    .index("by_username", ["username"]) //Loookup username for public
    .searchIndex("search_name", { searchField: "name" })
    .searchIndex("search_email", { searchField: "email" }),
});

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/convex/_generated/api";
import { useConvexMutation, useConvexQuery } from "@/hooks/use-convex-query";
import { Loader2, User } from "lucide-react";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "sonner";

const SettingsPage = () => {
  const [userName, setUsername] = useState("");
  const { data: currentUser, loading } = useConvexQuery(
    api.users.getCurrentUser
  );
  const { executeMutation: updateUserName, loading: isSubmitting } =
    useConvexMutation(api.users.updateUserName);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      toast.error("Username cannot be empty!");
      return;
    }
    updateUserName({ username: userName.trim() });
  };

  if (loading) {
    return <BarLoader width={"100%"} color="#D8B4FE" />;
  }
  return (
    <div className="space-y-8 p-4 lg:p-8">
      <div>
        <h1 className="text-3xl font-bold gradient-text-primary">Settings</h1>
        <p className="text-slate-300 mt-2">
          Manage your profile and account preferences!
        </p>
      </div>
      <Card className="card-glass max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <User className="mr-2 h-5 w-5" /> Username Settings
          </CardTitle>
          <CardDescription>
            Set your unique username for yout public profile!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" className="text-white mb-2 block">
                Username
              </Label>
              <Input
                id="username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="bg-slate-800 border-slate-600 text-white"
              />
              {currentUser?.username && (
                <div className="text-sm text-slate-400 mt-1 ml-1">
                  Current Username:{" "}
                  <span className="text-white">@{currentUser.username}</span>
                </div>
              )}

              <div className="text-xs text-slate-500 ml-1 mt-1">
                3-20 characters, latters, numbers and underscors no special
                characters.
              </div>

              <div className="flex justify-end mt-2">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Updating...
                    </>
                  ) : (
                    "Update Username"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;

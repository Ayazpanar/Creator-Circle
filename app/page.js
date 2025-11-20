import MouseEffect from "@/components/mouseEffect";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse" />
      <MouseEffect />
    </div>
  );
}

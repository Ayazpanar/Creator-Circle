import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "./ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creator Circle",
  description: "A community for creators to connect, collaborate, and grow together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"dark"}
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
          {/* Header */}
          <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
            {children}
          </main>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

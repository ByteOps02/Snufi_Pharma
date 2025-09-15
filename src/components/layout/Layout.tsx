import React from "react";
import Navigation from "@/components/ui/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <SpeedInsights />
    </div>
  );
};

export default Layout;

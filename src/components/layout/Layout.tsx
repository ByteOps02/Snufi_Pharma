import React from "react";
import Navigation from "@/components/ui/navigation";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-16 flex-grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <SpeedInsights />
    </div>
  );
};

export default Layout;

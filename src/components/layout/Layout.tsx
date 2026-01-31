import React from "react";
import Navigation from "@/components/ui/navigation";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import ScrollToTop from "./ScrollToTop";
import { ChatWidget } from "@/components/ui/chat-widget";



interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <ScrollToTop />
      <main className="pt-16 flex-grow">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <ChatWidget />

      <SpeedInsights />
    </div>
  );
};

export default Layout;

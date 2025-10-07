import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ClinicalTrials from "./pages/ClinicalTrials";
import HealthcareProfessionals from "./pages/HealthcareProfessionals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/products",
    element: <Layout><Products /></Layout>,
  },
  {
    path: "/services",
    element: <Layout><Services /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/careers",
    element: <Layout><Careers /></Layout>,
  },
  {
    path: "/blog",
    element: <Layout><Blog /></Layout>,
  },
  {
    path: "/blog/:id",
    element: <Layout><BlogPost /></Layout>,
  },
  {
    path: "/clinical-trials",
    element: <Layout><ClinicalTrials /></Layout>,
  },
  {
    path: "/healthcare-professionals",
    element: <Layout><HealthcareProfessionals /></Layout>,
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>,
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider storageKey="snufi-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

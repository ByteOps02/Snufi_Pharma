import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";

// Lazy load all pages with Vite dynamic imports
const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const About = lazy(() => import(/* webpackChunkName: "about" */ "./pages/About"));
const Products = lazy(() => import(/* webpackChunkName: "products" */ "./pages/Products"));
const Services = lazy(() => import(/* webpackChunkName: "services" */ "./pages/Services"));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "./pages/Contact"));
const Careers = lazy(() => import(/* webpackChunkName: "careers" */ "./pages/Careers"));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ "./pages/Blog"));
const BlogPost = lazy(() => import(/* webpackChunkName: "blog-post" */ "./pages/BlogPost"));
const ClinicalTrials = lazy(() => import(/* webpackChunkName: "clinical-trials" */ "./pages/ClinicalTrials"));
const HealthcareProfessionals = lazy(() => import(/* webpackChunkName: "healthcare-professionals" */ "./pages/HealthcareProfessionals"));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ "./pages/NotFound"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Configure React Query with optimized defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

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
    <ThemeProvider storageKey="snufi-pharma-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<LoadingFallback />}>
          <RouterProvider router={router} />
        </Suspense>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

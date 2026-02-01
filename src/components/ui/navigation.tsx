import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { SearchCommand } from "@/components/common/SearchCommand";
import { Search } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Clinical Trials", path: "/clinical-trials" },
    { name: "Healthcare Pros", path: "/healthcare-professionals" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const mobileMenuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  } as const;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent",
      )}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 min-w-0"
            onClick={handleNavClick}
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                S
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="text-sm sm:text-lg font-bold text-primary dark:text-white leading-none sm:leading-tight">
                Snufi Pharmaceutical®
              </div>
              <div className="text-[10px] sm:text-xs text-primary/80 dark:text-white/80 font-medium">
                Known for cure
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={cn(
                  "relative py-2 px-1 text-sm font-medium transition-colors duration-200",
                  item.name === "Contact"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2"
                    : isActive(item.path)
                      ? "text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary"
                )}
              >
                {item.name}
                {isActive(item.path) && item.name !== "Contact" && (
                  <motion.div
                    layoutId="active-link-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="w-9 px-0 md:w-auto md:px-4 text-muted-foreground bg-muted/50 hover:bg-muted/80 border-0"
              onClick={() => setOpenSearch(true)}
            >
              <Search className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline-flex">Search...</span>
              <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-2">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpenSearch(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground ml-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-2"
            >
              <div className="px-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-accent",
                    )}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 origin-left"
        style={{ scaleX }}
      />

      <SearchCommand open={openSearch} setOpen={setOpenSearch} />
    </nav>
  );
};

export default Navigation;
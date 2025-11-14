// Performance monitoring utility
export const initPerformanceMonitoring = () => {
  if (typeof window === "undefined") return;

  // Log Core Web Vitals
  if ("web-vital" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}:`, entry);
        }
      });

      observer.observe({
        entryTypes: [
          "largest-contentful-paint",
          "first-input",
          "layout-shift",
        ],
      });
    } catch (e) {
      console.error("Performance observer error:", e);
    }
  }

  // Track page navigation timing
  window.addEventListener("load", () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log("Page load time:", pageLoadTime, "ms");
  });

  // Warn about long tasks
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ("duration" in entry && entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration}ms`, entry);
          }
        }
      });

      observer.observe({ entryTypes: ["measure"] });
    } catch (e) {
      // Long Task API not supported
    }
  }
};

export const reportWebVitals = async (metric: Record<string, unknown>) => {
  if (process.env.NODE_ENV === "production") {
    const body = JSON.stringify(metric);
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/web-vitals", body);
    } else {
      fetch("/api/web-vitals", { body, method: "POST", keepalive: true });
    }
  }
};

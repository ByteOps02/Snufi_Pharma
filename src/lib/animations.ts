/**
 * Centralized animation definitions for consistent, medium-level effects across the site
 */

// Card entrance animation - medium intensity
export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Card hover effect - subtle lift with shadow
export const cardHoverVariants = {
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Button hover effect - medium ripple
export const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Section reveal animation - medium
export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Staggered children animation
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Page transition - fade in
export const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Badge/pill animation
export const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// List item animation
export const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Icon rotation animation
export const iconRotateVariants = {
  hidden: { rotate: -10 },
  visible: {
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Subtle pulse effect for important elements
export const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Standard transition timing (medium)
export const transitionTiming = {
  fast: 0.2,
  medium: 0.3,
  slow: 0.5,
};

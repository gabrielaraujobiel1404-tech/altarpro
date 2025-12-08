import { cn } from "@/lib/utils";

interface CloudProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Cloud = ({ className, size = "md" }: CloudProps) => {
  const sizeClasses = {
    sm: "w-20 h-12",
    md: "w-32 h-20",
    lg: "w-48 h-28",
  };

  return (
    <div
      className={cn(
        "bg-card/80 cloud-shape blur-sm",
        sizeClasses[size],
        className
      )}
    />
  );
};

interface PaperPlaneProps {
  className?: string;
  color?: "orange" | "yellow" | "blue";
}

export const PaperPlane = ({ className, color = "orange" }: PaperPlaneProps) => {
  const colorClasses = {
    orange: "text-coral",
    yellow: "text-secondary",
    blue: "text-primary",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-12 h-12", colorClasses[color], className)}
    >
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: "float" | "float-delayed" | "float-slow" | "bounce-gentle" | "sparkle" | "rotate-slow";
}

export const FloatingElement = ({
  children,
  className,
  animation = "float",
}: FloatingElementProps) => {
  const animationClasses = {
    float: "animate-float",
    "float-delayed": "animate-float-delayed",
    "float-slow": "animate-float-slow",
    "bounce-gentle": "animate-bounce-gentle",
    "sparkle": "animate-sparkle",
    "rotate-slow": "animate-rotate-slow",
  };

  return (
    <div className={cn(animationClasses[animation], className)}>{children}</div>
  );
};

export const StarIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6 text-secondary", className)}
  >
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

export const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6 text-coral", className)}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const CrossIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-8 h-8 text-secondary", className)}
  >
    <path d="M11 2v7H4v4h7v9h2v-9h7V9h-7V2h-2z" />
  </svg>
);

// Decorative Divider
export const WaveDivider = ({ className, flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 1440 100"
    fill="currentColor"
    className={cn("w-full h-auto", flip && "rotate-180", className)}
    preserveAspectRatio="none"
  >
    <path d="M0,40 C360,100 720,0 1080,50 C1260,75 1380,60 1440,40 L1440,100 L0,100 Z" />
  </svg>
);

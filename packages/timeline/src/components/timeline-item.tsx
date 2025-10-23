import { cn } from "@/lib/utils.js";
import { ReactNode } from "react";

export interface TimelineItemProps {
  date: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  variant?: "vertical" | "horizontal";
  isFirst?: boolean;
  isLast?: boolean;
  style?: "simple" | "detailed" | "card";
  layout?: "default" | "centered";
  index?: number;
}

export const TimelineItem = ({
  date,
  title,
  description,
  icon,
  variant = "vertical",
  isFirst,
  isLast,
  style = "simple",
  layout = "default",
  index,
}: TimelineItemProps) => {
  // Centered layout for vertical variant
  if (variant === "vertical" && layout === "centered") {
    if (style === "card") {
      return (
        <div className="hidden md:grid md:grid-cols-[200px_auto_1fr] md:gap-6 md:items-start animate-fade-in">
          <div className="text-right">
            <time className="text-sm font-medium text-primary">{date}</time>
          </div>
          <div className="relative flex justify-center">
            {!isLast && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-timeline-line to-transparent" />
            )}
            <div className="w-6 h-6 rounded-full bg-gradient-primary ring-4 ring-timeline-bg shadow-timeline-sm" />
          </div>
          <div className="bg-card rounded-lg p-6 shadow-timeline-md hover:shadow-timeline-lg transition-all duration-300 border border-border">
            <div className="flex items-start gap-3">
              {icon && (
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  {icon}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
                {description && (
                  <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (style === "detailed") {
      return (
        <div className="hidden md:grid md:grid-cols-[200px_auto_1fr] md:gap-6 md:items-start animate-fade-in">
          <div className="text-right">
            <time className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {date}
            </time>
          </div>
          <div className="relative flex justify-center">
            {!isLast && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-full bg-timeline-line" />
            )}
            <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center ring-4 ring-timeline-bg shadow-timeline-sm">
              {icon || <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
              {title}
            </h3>
            {description && (
              <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      );
    }

    // Simple style
    return (
      <div className="hidden md:grid md:grid-cols-[200px_auto_1fr] md:gap-6 md:items-start animate-fade-in">
        <div className="text-right">
          <time className="text-sm font-medium text-primary">{date}</time>
        </div>
        <div className="relative flex justify-center">
          {!isLast && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-full bg-timeline-line" />
          )}
          <div className="w-4 h-4 rounded-full bg-timeline-marker ring-4 ring-timeline-bg" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className="flex-shrink-0 w-64 animate-fade-in">
        <div className="relative">
          {/* Connector line */}
          {!isLast && (
            <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gradient-primary" />
          )}

          {/* Marker */}
          <div className="relative flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-timeline-md z-10">
              {icon || <div className="w-3 h-3 rounded-full bg-primary-foreground" />}
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <time className="text-sm font-medium text-primary">{date}</time>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
            {description && (
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (style === "card") {
    return (
      <div className="relative pl-8 animate-slide-in-left group">
        {/* Connector line */}
        {!isLast && (
          <div className="absolute left-[11px] top-12 w-0.5 h-full bg-gradient-to-b from-timeline-line to-transparent" />
        )}

        {/* Marker */}
        <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-gradient-primary ring-4 ring-timeline-bg shadow-timeline-sm transition-transform group-hover:scale-110" />

        {/* Card */}
        <div className="bg-card rounded-lg p-6 shadow-timeline-md hover:shadow-timeline-lg transition-all duration-300 border border-border">
          <time className="text-sm font-medium text-primary">{date}</time>
          <div className="flex items-start gap-3 mt-3">
            {icon && (
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                {icon}
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
              {description && (
                <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (style === "detailed") {
    return (
      <div className="relative pl-8 animate-slide-in-left group">
        {/* Connector line */}
        {!isLast && (
          <div className="absolute left-[11px] top-10 w-0.5 h-full bg-timeline-line" />
        )}

        {/* Marker with icon */}
        <div className="absolute left-0 top-4">
          <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center ring-4 ring-timeline-bg shadow-timeline-sm transition-transform group-hover:scale-110">
            {icon || <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
          </div>
        </div>

        {/* Content */}
        <div className="pb-8">
          <time className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
            {date}
          </time>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    );
  }

  // Simple style (default)
  return (
    <div className="relative pl-8 animate-slide-in-left group">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 w-px h-full bg-timeline-line" />
      )}

      {/* Marker */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-timeline-marker ring-4 ring-timeline-bg transition-transform group-hover:scale-125" />

      {/* Content */}
      <div className="pb-6">
        <time className="text-sm font-medium text-primary">{date}</time>
        <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils.js";
import { TimelineItem, TimelineItemProps } from "./timeline-item.js";

export interface TimelineProps {
  items: TimelineItemProps[];
  variant?: "vertical" | "horizontal";
  layout?: "default" | "centered";
  className?: string;
}

export const Timeline = ({ items, variant = "vertical", layout = "default", className }: TimelineProps) => {
  return (
    <div
      className={cn(
        "relative",
        variant === "vertical" && layout === "centered" ? "flex justify-center" : "",
        variant === "vertical" && layout === "default" ? "space-y-8" : "",
        variant === "horizontal" ? "flex gap-8 overflow-x-auto pb-4" : "",
        className
      )}
    >
      <div className={cn(
        layout === "centered" ? "w-full max-w-4xl space-y-8" : "w-full"
      )}>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            variant={variant}
            layout={layout}
            index={index}
            isFirst={index === 0}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

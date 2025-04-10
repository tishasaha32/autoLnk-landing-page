import React from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

const ratingVariants = {
    default: {
        star: "text-primary",
        emptyStar: "text-muted-foreground",
    },
    destructive: {
        star: "text-red-500",
        emptyStar: "text-red-200",
    },
    yellow: {
        star: "text-yellow-500",
        emptyStar: "text-yellow-200",
    },
};

interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
    rating: number;
    totalStars?: number;
    size?: number;
    fill?: boolean;
    Icon?: React.ComponentType<{ size?: number; className?: string }>; // ✅ Fix: Use ComponentType
    variant?: keyof typeof ratingVariants;
}

const Ratings = ({ ...props }: RatingsProps) => {
    const {
        rating,
        totalStars = 5,
        size = 20,
        fill = true,
        Icon = Star, // ✅ Fix: Pass as a component, not JSX
        variant = "default",
    } = props;

    const fullStars = Math.floor(rating);
    const partialStar =
        rating % 1 > 0 ? (
            <PartialStar
                fillPercentage={rating % 1}
                size={size}
                className={cn(ratingVariants[variant].star)}
                Icon={Icon}
            />
        ) : null;

    return (
        <div className={cn("flex items-center gap-2")} {...props}>
            {/* Full Stars */}
            {[...Array(fullStars)].map((_, i) => (
                <Icon
                    key={i}
                    size={size}
                    className={cn(
                        fill ? "fill-current" : "fill-transparent",
                        ratingVariants[variant].star
                    )}
                />
            ))}
            {/* Partial Star */}
            {partialStar}
            {/* Empty Stars */}
            {[...Array(totalStars - fullStars - (partialStar ? 1 : 0))].map((_, i) => (
                <Icon
                    key={i + fullStars + 1}
                    size={size}
                    className={cn(ratingVariants[variant].emptyStar)}
                />
            ))}
        </div>
    );
};

interface PartialStarProps {
    fillPercentage: number;
    size: number;
    className?: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>; // ✅ Fix: Use ComponentType
}

const PartialStar = ({ ...props }: PartialStarProps) => {
    const { fillPercentage, size, className, Icon } = props;

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <Icon size={size} className={cn("fill-transparent", className)} />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    overflow: "hidden",
                    width: `${fillPercentage * 100}%`,
                }}
            >
                <Icon size={size} className={cn("fill-current", className)} />
            </div>
        </div>
    );
};

export { Ratings };

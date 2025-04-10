"use client";

import Image from "next/image";
import { Ratings } from "./ui/ratings";
import React, { useState } from "react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Car Enthusiast",
        image: "/AlexJohnson.jpeg",
        quote:
            "The SuperCar Showcase was incredible! I got to see my dream cars up close and even sit in a few. The organization was flawless and the staff was extremely knowledgeable.",
        rating: 3.7,
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Racing Fan",
        image: "/SarahWilliams.jpg",
        quote:
            "Meeting my racing heroes at the Formula Legends event was a dream come true. The intimate setting allowed for real conversations and amazing photo opportunities.",
        rating: 5,
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Car Collector",
        image: "/MichaelChen.jpeg",
        quote:
            "The Mountain Drive Experience was breathtaking. Driving through those scenic routes with other enthusiasts created memories that will last a lifetime.",
        rating: 4,
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        role: "Track Day Participant",
        image: "/EmilyRodriguez.jpg",
        quote:
            "The Track Day Championship pushed my skills to the next level. The professional coaching was invaluable, and the track facilities were world-class.",
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full py-10">
            <h2 className="text-2xl font-bold mb-4">What Our Visitors Say</h2>
            <p className="text-gray-600 mb-6">
                Real experiences from car event enthusiasts.
            </p>

            <div
                className="overflow-hidden w-full py-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className={`flex w-max animate-scroll whitespace-nowrap gap-8 px-4 ${isPaused ? "paused" : ""
                        }`}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="cursor-pointer min-w-[350px] max-w-[350px] flex-shrink-0 bg-zinc-800/50 text-white shadow-lg rounded-xl p-4 flex flex-col justify-between gap-3"
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full w-10 h-10 border object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="italic text-gray-300 text-sm line-clamp-6 whitespace-normal break-words">
                                {testimonial.quote}
                            </p>

                            <div className="flex items-center">
                                <Ratings rating={testimonial.rating} variant="yellow" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll animation styles */}
                <style jsx>{`
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .paused {
            animation-play-state: paused;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
            </div>
        </div>
    );
};

export default Testimonials;

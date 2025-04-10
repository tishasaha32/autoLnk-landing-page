"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
} from "lucide-react";

const FeaturedEvents = () => {
    const events = [
        {
            id: "event-1",
            title: "SuperCar Showcase 2025",
            description:
                "Experience the world's most exclusive supercars in one location",
            image: "/meetAndGreet.jpg",
            date: "May 15-17, 2025",
            location: "Miami, FL",
            time: "10:00 AM - 6:00 PM",
            price: "$75",
            category: "Car Shows",
            spots: "Limited spots",
        },
        {
            id: "event-2",
            title: "Formula Legends Meet & Greet",
            description:
                "Meet your favorite Formula 1 legends and get exclusive merchandise signed",
            image: "/drives.jpg",
            date: "June 5, 2025",
            location: "Austin, TX",
            time: "1:00 PM - 5:00 PM",
            price: "$120",
            category: "Meet & Greet",
            spots: "VIP access available",
        },
        {
            id: "event-3",
            title: "Mountain Drive Experience",
            description:
                "Join our exclusive mountain drive through scenic routes with luxury vehicles",
            image: "/motorsports.jpg",
            date: "July 12, 2025",
            location: "Denver, CO",
            time: "8:00 AM - 4:00 PM",
            price: "$250",
            category: "Drives",
            spots: "20 spots left",
        },
        {
            id: "event-4",
            title: "Track Day Championship",
            description:
                "Test your skills on a professional racing track with expert coaching",
            image: "/carShows.jpg",
            date: "August 8-9, 2025",
            location: "Laguna Seca, CA",
            time: "9:00 AM - 5:00 PM",
            price: "$350",
            category: "Motorsports",
            spots: "Booking fast",
        },
        {
            id: "event-5",
            title: "Classic Car Exhibition",
            description:
                "A showcase of the most beautiful classic and vintage automobiles",
            image: "/motorsports.jpg",
            date: "September 20-21, 2025",
            location: "Chicago, IL",
            time: "10:00 AM - 7:00 PM",
            price: "$45",
            category: "Car Shows",
            spots: "Early bird tickets available",
        },
    ];
    const [startIndex, setStartIndex] = useState(0);
    const visibleEvents = events.slice(startIndex, startIndex + 3);
    const isAtStart = startIndex === 0;
    const isAtEnd = startIndex === events.length - 3;

    const nextSlide = () => {
        if (!isAtEnd) {
            setStartIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (!isAtStart) {
            setStartIndex((prev) => prev - 1);
        }
    };

    return (
        <section
            id="events"
            className="py-24 px-4 sm:px-10 bg-gradient-to-b from-zinc-900 to-zinc-950"
        >
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <span className="absolute -left-3 top-0 h-full w-1 bg-red-600 rounded-full"></span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Featured Events
                        </h2>
                        <p className="text-zinc-400 max-w-2xl text-lg">
                            Discover and book tickets for our most popular automotive events
                            and experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex gap-3 mt-6 md:mt-0"
                    >
                        <Button
                            size="icon"
                            onClick={prevSlide}
                            variant="outline"
                            disabled={isAtStart}
                            className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 h-10 w-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={18} />
                        </Button>
                        <Button
                            size="icon"
                            onClick={nextSlide}
                            variant="outline"
                            disabled={isAtEnd}
                            className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 h-10 w-10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={18} />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {visibleEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="cursor-pointer bg-zinc-900/50 pt-0 backdrop-blur-sm border-zinc-800 overflow-hidden h-full rounded-xl shadow-lg hover:shadow-red-900/10 transition-all duration-300 hover:border-zinc-700">
                                    <div className="relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                        <Image
                                            src={event.image || "/placeholder.svg"}
                                            alt={event.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <Badge className="absolute top-4 left-4 z-20 bg-red-600/90 hover:bg-red-700 text-xs uppercase tracking-wider py-1 font-medium">
                                            {event.category}
                                        </Badge>
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="text-white/90 font-bold text-xl bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                                                {event.price}
                                            </span>
                                        </div>
                                    </div>
                                    <CardContent className="p-6 pt-0">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-zinc-400 mb-6 text-sm">
                                            {event.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center text-zinc-400 text-sm">
                                                <Calendar size={16} className="mr-2 text-zinc-500" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center text-zinc-400 text-sm">
                                                <MapPin size={16} className="mr-2 text-zinc-500" />
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="flex items-center text-zinc-400 text-sm">
                                                <Clock size={16} className="mr-2 text-zinc-500" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center text-zinc-400 text-sm">
                                                <Users size={16} className="mr-2 text-zinc-500" />
                                                <span>{event.spots}</span>
                                            </div>
                                        </div>

                                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:shadow-lg group-hover:shadow-red-900/20 transition-all">
                                            Book Now
                                            <ArrowRight size={16} className="ml-2 opacity-70" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <Button
                        size="lg"
                        variant="outline"
                        className="cursor-pointer text-black bg-white/80 hover:bg-white/50 border-white/50 hover:border-white/20"
                    >
                        <span>View All Events</span>
                        <ArrowRight
                            size={18}
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedEvents;

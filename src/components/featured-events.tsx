"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react"

const FeaturedEvents = () => {
    const events = [
        {
            id: "event-1",
            title: "SuperCar Showcase 2025",
            description: "Experience the world's most exclusive supercars in one location",
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
            description: "Meet your favorite Formula 1 legends and get exclusive merchandise signed",
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
            description: "Join our exclusive mountain drive through scenic routes with luxury vehicles",
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
            description: "Test your skills on a professional racing track with expert coaching",
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
            description: "A showcase of the most beautiful classic and vintage automobiles",
            image: "/motorsports.jpg",
            date: "September 20-21, 2025",
            location: "Chicago, IL",
            time: "10:00 AM - 7:00 PM",
            price: "$45",
            category: "Car Shows",
            spots: "Early bird tickets available",
        },
    ]
    const [startIndex, setStartIndex] = useState(0)
    const visibleEvents = events.slice(startIndex, startIndex + 3)

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % (events.length - 2))
    }

    const prevSlide = () => {
        setStartIndex((prev) => (prev === 0 ? events.length - 3 : prev - 1))
    }

    return (
        <section id="events" className="py-20 px-10 bg-zinc-900">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Events</h2>
                        <p className="text-white/70 max-w-2xl">
                            Discover and book tickets for our most popular automotive events and experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex gap-2 mt-4 md:mt-0"
                    >
                        <Button
                            size="icon"
                            onClick={prevSlide}
                            className="bg-zinc-800 hover:bg-zinc-700"
                        >
                            <ChevronLeft size={18} />
                        </Button>
                        <Button
                            size="icon"
                            onClick={nextSlide}
                            className="bg-zinc-800 hover:bg-zinc-700"
                        >
                            <ChevronRight size={18} />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden h-full">
                                <div className="relative">
                                    <Image
                                        src={event.image || "/placeholder.svg"}
                                        alt={event.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">{event.category}</Badge>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                    <p className="text-white/70 mb-4">{event.description}</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-white/70">
                                            <Calendar size={16} className="mr-2" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-white/70">
                                            <MapPin size={16} className="mr-2" />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center text-white/70">
                                            <Clock size={16} className="mr-2" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center text-white/70">
                                            <Users size={16} className="mr-2" />
                                            <span>{event.spots}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-bold text-lg">{event.price}</span>
                                        <Button>Book Now</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Button size="lg" variant="outline" className="cursor-pointer text-black bg-white/80 hover:bg-white/50 border-white/50 hover:border-white/20">
                        View All Events
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}


export default FeaturedEvents
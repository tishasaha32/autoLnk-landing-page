"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar } from "lucide-react"

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            title: "Experience the Thrill",
            subtitle: "Join our exclusive racing events",
            image: "/placeholder.png",
            color: "from-red-500/20 to-orange-500/20",
        },
        {
            title: "Meet Your Heroes",
            subtitle: "Exclusive meet & greet events",
            image: "/placeholder2.jpg",
            color: "from-blue-500/20 to-purple-500/20",
        },
        {
            title: "Showcase Your Ride",
            subtitle: "Premium car shows nationwide",
            image: "/placeholder3.jpg",
            color: "from-green-500/20 to-teal-500/20",
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <section id="gallery" className="relative h-screen overflow-hidden p-4 md:p-8 lg:p-16 flex items-center justify-center bg-black">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <motion.div
                    key={index}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: currentSlide === index ? 1 : 0,
                    }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-overlay z-20`} />
                    <Image
                        src={slide.image || "/placeholder.png"}
                        alt={slide.title}
                        fill
                        className="object-cover w-full h-full"
                        priority={index === 0}
                    />
                </motion.div>
            ))}

            {/* Content */}
            <div className="container relative z-30 h-full flex flex-col justify-center">
                <div className="max-w-3xl">
                    <motion.div
                        className="inline-block px-4 py-1 mb-4 bg-red-600 text-white rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="flex items-center gap-2">
                            <Calendar size={16} />
                            Upcoming Events
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {slides[currentSlide].title}
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-white/80 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {slides[currentSlide].subtitle}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                            Book Tickets
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="cursor-pointer text-black bg-white/80 hover:bg-white/50 border-white/50 hover:border-white/20">
                            Explore Events
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    )
}


export default Hero
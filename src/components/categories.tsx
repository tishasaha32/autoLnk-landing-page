"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Categories = () => {

    const categories = [
        {
            id: "meet-greet",
            title: "Meet & Greet",
            description: "Meet your favorite drivers and automotive celebrities",
            image: "/meetAndGreet.jpg",
        },
        {
            id: "car-shows",
            title: "Car Shows",
            description: "Showcase your ride or admire the best in automotive excellence",
            image: "/carShows.jpg",
        },
        {
            id: "drives",
            title: "Drives",
            description: "Join exclusive driving experiences on scenic routes",
            image: "/drives.jpg",
        },
        {
            id: "motorsports",
            title: "Motorsports",
            description: "Experience the thrill of racing events and competitions",
            image: "/motorsports.jpg",
        },
    ]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section id="categories" className="py-20 px-10 bg-black">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Categories</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        From exclusive meet and greets with racing legends to adrenaline-pumping motorsport events, find your
                        perfect automotive experience.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((category) => (
                        <motion.div key={category.id} variants={itemVariants} className="cursor-pointer group relative overflow-hidden rounded-xl">
                            <div className="absolute inset-0 bg-black/50 z-10" />
                            <div
                                className="absolute inset-0 opacity-10 z-20 group-hover:bg-black group-hover:opacity-60 transition-opacity"
                            />
                            <Image
                                src={category.image || "/placeholder.svg"}
                                alt={category.title}
                                width={600}
                                height={400}
                                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 z-30 p-6 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                                <p className="text-white/90 mb-4">{category.description}</p>

                                <Link href={`/categories/${category.id}`} className="inline-flex items-center text-white font-medium">
                                    <span className="mr-2">Explore</span>
                                    <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }}>
                                        <ArrowRight size={16} />
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}


export default Categories
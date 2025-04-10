"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AnimatePresence } from "framer-motion"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    // Close mobile menu when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 h-20 bg-black/80 backdrop-blur-md p-4 shadow-md transition-all duration-300"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <motion.div
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={180}
                            height={40}
                            className="rounded-full"
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {["Events", "Categories", "Gallery", "About"].map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (i + 1) }}
                        >
                            <Link href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors">
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button className="bg-red-600 hover:bg-red-700">Sign In</Button>
                    </motion.div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50 relative">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black z-40 pt-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <nav className="flex flex-col items-center gap-6 p-4">
                            {["Events", "Categories", "Gallery", "About"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/80 hover:text-white transition-colors text-xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                                <Button className="bg-red-600 hover:bg-red-700 mt-4 w-full">Sign In</Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header
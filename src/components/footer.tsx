"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {

    const socialLinks = [
        { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
        { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
        { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    ]

    const footerLinks = [
        {
            title: "Events",
            links: [
                { label: "Upcoming Events", href: "#" },
                { label: "Past Events", href: "#" },
                { label: "Featured Events", href: "#" },
                { label: "Calendar", href: "#" },
            ],
        },
        {
            title: "Categories",
            links: [
                { label: "Meet & Greet", href: "#" },
                { label: "Car Shows", href: "#" },
                { label: "Drives", href: "#" },
                { label: "Motorsports", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#" },
                { label: "Our Team", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
            ],
        },
    ]

    return (
        <footer className="bg-black text-white p-10 pt-0 border-t border-white/10">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/" className="inline-block mb-6">
                                <div className="text-3xl font-bold">
                                    Auto<span className="text-red-500">Lnk</span>
                                </div>
                            </Link>

                            <p className="text-white/70 mb-6 max-w-md">
                                Connecting automotive enthusiasts with exclusive events, shows, and experiences. Your premier
                                destination for all things automotive.
                            </p>

                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white/70 hover:bg-red-600 hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {footerLinks.map((column, columnIndex) => (
                        <motion.div
                            key={column.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
                        >
                            <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="border-t border-white/10 mt-12 pt-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-red-500" />
                                <span className="text-white/70">info@autolnk.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-red-500" />
                                <span className="text-white/70">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} className="text-red-500" />
                                <span className="text-white/70">123 Racing Street, Speedway, CA 90210</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-white/50 text-sm">&copy; 2023 AutoLnk. All rights reserved.</p>
                            <div className="flex gap-6">
                                <Link href="#" className="text-white/50 text-sm hover:text-white">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="text-white/50 text-sm hover:text-white">
                                    Terms of Service
                                </Link>
                                <Link href="#" className="text-white/50 text-sm hover:text-white">
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}


export default Footer
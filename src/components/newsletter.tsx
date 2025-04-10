"use client"
import React from 'react'
import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { Bell, CheckCircle2 } from 'lucide-react'

const Newsletter = () => {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setSubmitted(true)
            setEmail("")
            setTimeout(() => setSubmitted(false), 3000)
        }
    }

    return (
        <section id="newsletter" className="py-20 px-10 bg-gradient-to-b from-zinc-900 to-black">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="inline-flex items-center justify-center p-2 rounded-full bg-red-600/20 text-red-500 mb-6">
                        <Bell size={24} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated on Upcoming Events</h2>

                    <p className="text-white/70 mb-8">
                        Subscribe to our newsletter and be the first to know about new events, exclusive offers, and automotive
                        news.
                    </p>

                    <form onSubmit={handleSubmit} className="relative">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-center gap-2 text-green-500 p-4"
                            >
                                <CheckCircle2 size={20} />
                                <span>Thank you for subscribing!</span>
                            </motion.div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                                    Subscribe
                                </Button>
                            </div>
                        )}
                    </form>

                    <p className="text-white/50 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
                </motion.div>
            </div>
        </section>
    )
}


export default Newsletter
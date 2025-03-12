"use client";

import { motion } from "framer-motion";
import { Button } from "../button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const Footer = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            className="px-16 py-36 bg-[#141416] z-20 relative w-full"
        >
            <div className="max-w-full flex justify-between">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={textVariants}
                    className="flex flex-col gap-2 text-[#8a8a8a] font-extralight text-[18px]"
                >
                    <h1 className="mb-4 text-white">Digital Lavlakh</h1>
                    <h1>123-456-7890</h1>
                    <h1>Info@mysite.com</h1>
                    <h1>500 Terry Francine St</h1>
                    <h1>San Francisco, CA 94158</h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={textVariants}
                    className="flex flex-col gap-6 text-[#8a8a8a] font-extralight text-[18px]"
                >
                    <Link href="/solutions">Solutions</Link>
                    <Link href="/vision">Vision</Link>
                    <Link href="/programs">Programs</Link>
                    <Link href="/blog">Blog</Link>
                    <Button variant="primary" size="lg">
                        Get Started
                    </Button>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={textVariants}
                    className="flex flex-col gap-4 text-[#8a8a8a] font-extralight text-[18px]"
                >
                    <label htmlFor="subscribe" className="text-[#8a8a8a]">
                        Subscribe to Our Newsletter *
                    </label>
                    <label htmlFor="email" className="text-[#8a8a8a]">
                        Email *
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-[#141416] border-[#3F4349] text-[#8a8a8a]"
                    />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="subscribe"
                                className="border-[#3F4349] text-[#8a8a8a]"
                            />
                            <label htmlFor="subscribe" className="text-[#8a8a8a] text-[14px]">
                                Yes, subscribe me to your newsletter. *
                            </label>
                        </div>
                        <Button variant="outline" size="lg">
                            Submit
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={textVariants}
                    className="flex flex-col justify-between text-[#8a8a8a] font-extralight text-[18px]"
                >
                    <div>
                        <h1>Follow Us On:</h1>
                        <div className="flex gap-4 mt-4">
                            <Link href="https://www.instagram.com" target="_blank">
                                <Icon
                                    icon="mdi:instagram"
                                    width="24"
                                    height="24"
                                    className="text-[#8a8a8a] hover:text-white transition-colors"
                                />
                            </Link>
                            <Link href="https://www.facebook.com" target="_blank">
                                <Icon
                                    icon="mdi:facebook"
                                    width="24"
                                    height="24"
                                    className="text-[#8a8a8a] hover:text-white transition-colors"
                                />
                            </Link>
                            <Link href="https://www.twitter.com" target="_blank">
                                <Icon
                                    icon="mdi:twitter"
                                    width="24"
                                    height="24"
                                    className="text-[#8a8a8a] hover:text-white transition-colors"
                                />
                            </Link>
                        </div>
                    </div>
                    <span className="w-48 mt-24">
                        © 2035 by Vista.io. Powered and secured by Wix
                    </span>
                </motion.div>
            </div>
        </section>
    );
};
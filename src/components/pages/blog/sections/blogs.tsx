"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Blogs = () => {
    const blogsData = [
        {
            date: "May 31, 2023",
            readTime: "1 min read",
            title: "8 Technology Trends That Will Dominate This Year",
            subtitle:
                "Discover the top tech trends shaping industries worldwide. From AI to blockchain, stay ahead of the curve.",
        },
        {
            date: "June 5, 2023",
            readTime: "2 min read",
            title: "The Future of Cloud Computing in 2023",
            subtitle:
                "Cloud computing is evolving rapidly. Learn how businesses are leveraging the cloud for innovation.",
        },
        {
            date: "June 10, 2023",
            readTime: "3 min read",
            title: "How Data Science is Revolutionizing Industries",
            subtitle:
                "Data science is transforming decision-making. Explore its impact across sectors like healthcare and finance.",
        },
        {
            date: "June 15, 2023",
            readTime: "2 min read",
            title: "The Rise of Artificial Intelligence in Everyday Life",
            subtitle:
                "AI is no longer just for tech giants. See how it's becoming part of our daily routines.",
        },
        {
            date: "June 20, 2023",
            readTime: "1 min read",
            title: "Why Cybersecurity is More Important Than Ever",
            subtitle:
                "With cyber threats on the rise, protecting your data has never been more critical.",
        },
        {
            date: "June 25, 2023",
            readTime: "2 min read",
            title: "Blockchain Beyond Cryptocurrency",
            subtitle:
                "Blockchain is finding applications beyond crypto. Learn about its potential in supply chain and more.",
        },
        {
            date: "July 1, 2023",
            readTime: "3 min read",
            title: "The Role of IoT in Smart Cities",
            subtitle:
                "IoT is powering the next generation of smart cities. Discover how it's improving urban living.",
        },
        {
            date: "July 5, 2023",
            readTime: "2 min read",
            title: "The Evolution of Remote Work Technologies",
            subtitle:
                "Remote work tools are evolving. Find out what's next for hybrid and remote teams.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
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
        <section className="w-full relative flex h-max bg-[#141416] justify-center px-16 py-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full grid mt-[-8rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {blogsData.map((blog, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col bg-[#141416] p-6 border border-[#3F4349]"
                    >
                        <div className="flex items-center text-[#8a8a8a] text-sm mb-4">
                            <span>{blog.date}</span>
                            <span className="mx-2">•</span>
                            <span>{blog.readTime}</span>
                        </div>

                        <div className="flex flex-col h-[200px]">
                            <h3 className="text-[#FFFFFF] text-[21px] font-light mb-2 line-clamp-2 cursor-pointer hover:text-[#e84a43]">
                                {blog.title}
                            </h3>

                            <p className="text-[#8A8A8A] font-extralight text-[16px] mb-6 line-clamp-3">
                                {blog.subtitle}
                            </p>
                        </div>

                        <div className="h-[1px] bg-[#3F4349] w-full mb-6" />

                        <div className="flex items-center justify-between text-[#8a8a8a] text-sm">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    <Icon icon="mdi:eye-outline" className="text-lg" />
                                    <span>1.2k</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Icon icon="mdi:comment-outline" className="text-lg" />
                                    <span>12</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-1">
                                <Icon icon="mdi:heart-outline" color="#e84a43" className="text-lg" />
                                <span>45</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section >
    );
};
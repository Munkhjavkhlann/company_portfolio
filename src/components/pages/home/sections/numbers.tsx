"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const Numbers = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const stats = [
        { number: "15", label: "Years of Experience" },
        { number: "10K", label: "Business Partners" },
        { number: "25M", label: "Products Installed" },
        { number: "22", label: "Countries World Wide" },
        { number: "5", label: "Industry Awards" },
    ];

    const imageRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (imageRef.current && sectionRef.current) {
            gsap.to(imageRef.current, {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full relative flex flex-col h-[895px] bg-[#141416] items-center overflow-hidden"
        >
            <div
                ref={imageRef}
                className="absolute inset-0 w-[150%] h-full z-0"
                style={{
                    backgroundImage:
                        "url('https://static.wixstatic.com/media/c837a6_d11c6c437c0f4feb9de8591b42ead168~mv2.jpg/v1/fill/w_2304,h_895,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d11c6c437c0f4feb9de8591b42ead168~mv2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                }}
            ></div>

            <div
                className="absolute inset-0 bg-[#141416] opacity-40 z-10"
            ></div>

            <div className="relative z-20 pt-24 w-full flex flex-col justify-center items-center text-center">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="text-white text-4xl font-light mb-16"
                >
                    We Take Pride in Our Numbers
                </motion.h1>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                    className="flex justify-between items-center w-full max-w-6xl"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center space-y-4"
                        >
                            <span className="text-[#be4a4a] text-5xl font-light">{stat.number}</span>
                            <p className="text-[#8a8a8a] text-sm font-extralight">{stat.label}</p>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-1 bg-[#3F4349] rounded-full mt-4 shadow-[0_1px_0_rgba(255,255,255,0.1),inset_0_1px_0_rgba(0,0,0,0.25)] w-24"
                            ></motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { ServiceIcon1, ServiceIcon2, ServiceIcon3, ServiceIcon4 } from "@/assets/icons/index";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
    const leftSectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (leftSectionRef.current && imageRef.current) {
            gsap.to(imageRef.current, {
                xPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: leftSectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, x: -25, y: 25 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.01,
            },
        },
    };

    const textVariants1 = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.01,
            },
        },
    };

    const characterVariants = {
        hidden: { opacity: 0, x: -5 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    const cards = [
        {
            title: "Cloud Analytics Modernization",
            content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
            icon: <ServiceIcon1 height={48} width={48} />,
        },
        {
            title: "Versatility in Application",
            content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
            icon: <ServiceIcon3 height={48} width={48} />,
        },
        {
            title: "Data Science Acceleration",
            content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
            icon: <ServiceIcon2 height={48} width={48} />,
        },
        {
            title: "Full Customer Experience Service",
            content: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
            icon: <ServiceIcon4 height={48} width={48} />,
        },
    ];

    return (
        <section className="w-full relative flex flex-col md:flex-row h-auto md:h-[80vh] bg-[#141416] justify-center px-4 md:px-8 lg:px-16 items-center">
            <div className="w-full mt-[-10%] max-w-full h-full border-[1px] border-[#3F4349] flex flex-col md:flex-row">
                <div
                    ref={leftSectionRef}
                    className="w-full md:w-[40%] bg-[#141416] border-b-[1px] md:border-b-0 md:border-r-[1px] border-[#3F4349] relative flex flex-col items-center justify-center overflow-hidden"
                >
                    <div
                        ref={imageRef}
                        className="absolute inset-0 w-[150%] h-full z-0"
                        style={{
                            backgroundImage:
                                "url('https://static.wixstatic.com/media/c837a6_eb322a4179e54d788eef6896e67f05d0~mv2.jpg/v1/fill/w_853,h_704,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_eb322a4179e54d788eef6896e67f05d0~mv2.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-[#141416] opacity-30 z-10"></div>
                    <div className="relative z-20 max-w-[45%] py-6 md:py-0">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants1}
                            className="text-white text-[20px] md:text-[24px] lg:text-[30px] font-light mb-4"
                        >
                            Let Your Data Take Your Business to Higher Grounds
                        </motion.h1>

                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants1}
                            className="text-[#8A8A8A] font-light text-[14px] md:text-[16px] lg:text-base mt-4"
                        >
                            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </motion.p>
                    </div>
                </div>

                <div className="w-full md:w-[60%] bg-[#141416] relative flex items-center justify-center">
                    <div className="w-full md:w-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
                        <div className="flex flex-col gap-4 lg:transform lg:-translate-y-24">
                            {cards.slice(0, 2).map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    className="w-full md:w-54 bg-[#1B1C1E] rounded-lg flex flex-col justify-center py-6 px-4"
                                >
                                    <div className="mb-16">
                                        {card.icon}
                                    </div>
                                    <motion.h3 variants={textVariants} className="text-[#889ce7] text-base md:text-lg font-light">
                                        {Array.from(card.title).map((char, index) => (
                                            <motion.span key={index} variants={characterVariants}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.h3>
                                    <motion.p variants={textVariants} className="text-[#8a8a8a] text-xs md:text-sm mt-4">
                                        {Array.from(card.content).map((char, index) => (
                                            <motion.span key={index} variants={characterVariants}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.p>
                                    <motion.div
                                        variants={lineVariants}
                                        className="h-1 bg-[#3F4349] rounded-full mt-6 shadow-[0_1px_0_rgba(255,255,255,0.1),inset_0_1px_0_rgba(0,0,0,0.25)]"
                                    ></motion.div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 lg:transform lg:translate-y-24">
                            {cards.slice(2, 4).map((card, index) => (
                                <motion.div
                                    key={index + 2}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    className="w-full md:w-54 bg-[#1B1C1E] rounded-lg flex flex-col justify-center py-6 px-4"
                                >
                                    <div className="mb-16">
                                        {card.icon}
                                    </div>
                                    <motion.h3 variants={textVariants} className="text-[#889ce7] text-base md:text-lg font-light">
                                        {Array.from(card.title).map((char, index) => (
                                            <motion.span key={index} variants={characterVariants}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.h3>
                                    <motion.p variants={textVariants} className="text-[#8a8a8a] text-xs md:text-sm mt-4">
                                        {Array.from(card.content).map((char, index) => (
                                            <motion.span key={index} variants={characterVariants}>
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.p>
                                    <motion.div
                                        variants={lineVariants}
                                        className="h-1 bg-[#3F4349] rounded-full mt-6 shadow-[0_1px_0_rgba(255,255,255,0.1),inset_0_1px_0_rgba(0,0,0,0.25)]"
                                    ></motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GetStarted = () => {
    const leftSectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        if (leftSectionRef.current && imageRef.current) {
            gsap.to(imageRef.current, {
                rotation: 10,
                scale: 1.2,
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

    const textVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const partners = [
        "Our Partners",
        "Logo",
        "Logo",
        "Logo",
        "Logo",
    ];

    return (
        <section className="w-full relative flex flex-col h-auto bg-[#141416] justify-center px-16 items-center">
            <div className="w-full max-w-full border-[1px] border-[#3F4349]">
                <div className="grid grid-cols-5 w-full gap-0">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`
                                flex items-center justify-center h-[198px] bg-[#141416]
                                ${index < 4 ? 'border-r-[1px] border-[#3F4349]' : ''}
                            `}
                        >
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={textVariants}
                                className="text-[#8A8A8A] font-light text-[30px]"
                            >
                                {partner}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-full h-[700px] border-t-0 border-[1px] border-[#3F4349] flex">
                <div
                    ref={leftSectionRef}
                    className="w-[60%] bg-[#1B1C1E] border-r-[1px] border-[#3F4349] relative flex flex-col items-center justify-center overflow-hidden"
                >
                    <div
                        ref={imageRef}
                        className="absolute inset-0 w-[110%] h-[110%] z-0"
                        style={{
                            backgroundImage: "url(/images/background-2.avif)",
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                            transformOrigin: "center",
                        }}
                    ></div>

                    <div className="absolute inset-0 bg-[#141416] opacity-30 z-10"></div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                        className="relative z-20 max-w-[45%] text-center space-y-8"
                    >
                        <h1 className="text-white text-[30px] font-extralight">
                            Are You Ready to Accelerate Your Business?
                        </h1>
                    </motion.div>
                </div>

                <div className="w-[40%] bg-[#141416] flex flex-col items-center justify-center">
                    <div className="w-[45%] space-y-8">
                        <motion.p
                            className="text-[#8A8A8A] font-light"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            I&quot;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            <Button variant="primary" size="lg">
                                Get Started
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
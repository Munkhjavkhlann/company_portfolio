"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export const Reliability = () => {
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

    return (
        <section className="w-full relative flex flex-col md:flex-row h-auto md:h-[80vh] bg-[#141416] justify-center px-4 md:px-8 lg:px-16 items-center pt-20">
            <div className="w-full max-w-full h-full border border-[1px] border-[#3F4349] flex flex-col md:flex-row">
                <div
                    ref={leftSectionRef}
                    className="w-full md:w-[50%] bg-[#1B1C1E] border-b-[1px] md:border-b-0 md:border-r-[1px] border-[#3F4349] relative flex flex-col items-center justify-center overflow-hidden min-h-[40vh] md:min-h-0"
                >
                    <div
                        ref={imageRef}
                        className="absolute inset-0 w-[110%] h-[110%] z-0"
                        style={{
                            backgroundImage: "url(/images/background-1.avif)",
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
                        className="relative z-20 w-full md:max-w-[45%] px-4 md:px-0 text-center"
                    >
                        <h1 className="text-white text-[20px] md:text-[24px] lg:text-[30px] font-extralight">
                            Unprecedented Velocity. Impeccable Reliability.
                        </h1>
                    </motion.div>
                </div>

                <div className="w-full md:w-[50%] bg-[#141416] flex flex-col items-center justify-center py-6 md:py-0">
                    <div className="w-full md:w-[80%] lg:w-[60%] space-y-6 md:space-y-8 px-4 md:px-0">
                        <motion.p
                            className="text-[#8A8A8A] font-light text-[14px] md:text-[16px] lg:text-base"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            I&quot;m a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own
                            content and make changes to the font. Feel free to drag and drop me
                            anywhere you like on your page. I’m a great place for you to tell a
                            story and let your users know a little more about you.
                        </motion.p>

                        <motion.p
                            className="text-[#8A8A8A] font-light text-[14px] md:text-[16px] lg:text-base"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            This is a great space to write a long text about your company and
                            your services. You can use this space to go into a little more detail
                            about your company. Talk about your team and what services you
                            provide. Tell your visitors the story of how you came up with the idea
                            for your business and what makes you different from your competitors.
                            Make your company stand out and show your visitors who you are.
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                        >
                            <Button variant="primary" size="lg">
                                Learn more
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
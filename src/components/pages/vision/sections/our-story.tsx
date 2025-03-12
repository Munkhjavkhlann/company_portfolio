"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const OurStory = () => {
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

    return (
        <section
            className="w-full relative flex h-[65vh] bg-[#141416] justify-center px-16 items-center"
        >
            <div className="w-full mt-[-10%] max-w-full h-full border-[1px] border-[#3F4349] flex">
                <div
                    ref={leftSectionRef}
                    className="w-[40%] bg-[#141416] border-r-[1px] border-[#3F4349] relative flex flex-col items-center justify-center overflow-hidden"
                >
                    <div
                        ref={imageRef}
                        className="absolute inset-0 w-[150%] h-full z-0"
                        style={{
                            backgroundImage:
                                "url(/images/background-4.avif)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
                    <div className="relative z-20 max-w-[45%]">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants1}
                            className="text-white text[#8a8a8a] text-[30px] font-light mb-4"
                        >
                            Our Story
                        </motion.h1>
                    </div>
                </div>

                <div className="w-[60%] bg-[#141416] flex flex-col items-center justify-center">
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants1}
                        className="text-[#8a8a8a] text-[16px] w-[35%] font-extralight mb-8"
                    >
                        I&quot;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants1}
                        className="text-[#8a8a8a] text-[16px] w-[35%] font-extralight"
                    >
                        This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
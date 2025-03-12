"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const EcoSystem = () => {
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
        <section className="w-full relative flex h-[55vh] bg-[#141416] justify-center px-16 items-center z-20">
            <div className="w-full max-w-full h-full border-t-0 border-[1px] border-[#3F4349] flex">
                <div
                    ref={leftSectionRef}
                    className="w-[40%] bg-[#141416] border-r-[1px] border-[#3F4349] relative flex flex-col items-center justify-center overflow-hidden"
                >
                    <div
                        ref={imageRef}
                        className="absolute inset-0 w-[110%] h-[110%] z-0"
                        style={{
                            backgroundImage: "url(/images/background-6.avif)",
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                            transformOrigin: "center",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                        className="relative z-20 max-w-[45%]"
                    >
                        <h1 className="text-white text-[30px] text-center font-extralight">
                            We Integrate With <br /> Your Ecosystem
                        </h1>
                    </motion.div>
                </div>

                <div className="w-[60%] bg-[#141416] flex flex-col items-center justify-center">
                    <motion.p
                        className="text-[#8A8A8A] w-[35%] font-light"
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
                </div>
            </div>
        </section>
    );
};
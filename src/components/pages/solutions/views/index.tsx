"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { SolutionsTitle } from "../sections/titles";
import { Services } from "../sections/services";
import { EcoSystem } from "../sections/ecosystem";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionsView() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!imageRef.current || !contentRef.current) return;

        gsap.set(contentRef.current, { opacity: 1, y: 0 });

        const pinTrigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            pin: imageRef.current,
            pinSpacing: false,
            scrub: true,
            animation: gsap.to(imageRef.current, {
                scale: 1.5,
                ease: "none",
            }),
        });

        const contentAnimation = gsap.from(contentRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
            },
        });

        const handleTransitionEnd = () => {
            gsap.to(contentRef.current, { opacity: 1, duration: 0.5 });
        };
        document.body.addEventListener("transitionend", handleTransitionEnd);


        return () => {
            pinTrigger.kill();
            contentAnimation.kill();
            ScrollTrigger.refresh();
            document.body.removeEventListener("transitionend", handleTransitionEnd);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden">
            <div
                ref={imageRef}
                className="absolute top-0 left-0 w-full h-screen z-0"
                style={{
                    transformOrigin: "center center",
                    scale: "1.2",
                }}
            >
                <Image
                    src="/images/background-3.avif"
                    alt="vision background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>

            <div ref={contentRef} className="relative z-10 min-h-screen flex flex-col">
                <SolutionsTitle />
                <Services />
                <EcoSystem />
            </div>
        </div>
    );
}
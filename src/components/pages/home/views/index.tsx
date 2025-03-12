"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { HeroSection } from "@/components/pages/home/sections/hero-section";
import { Services } from "@/components/pages/home/sections/services";
import { Reliability } from "@/components/pages/home/sections/reliability";
import { Numbers } from "@/components/pages/home/sections/numbers";
import { GetStarted } from "@/components/pages/home/sections/get-started";

gsap.registerPlugin(ScrollTrigger);

export default function HomeView() {
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
                y: "10%",
                rotation: 2,
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

        return () => {
            pinTrigger.kill();
            contentAnimation.kill();
            ScrollTrigger.refresh();
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
                    src="/images/hero-background.avif"
                    alt="Hero Background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>

            <div ref={contentRef} className="relative z-10 min-h-screen flex flex-col">
                <HeroSection />
                <Services />
                <Reliability />
                <Numbers />
                <div className="mt-auto">
                    <GetStarted />
                </div>
            </div>
        </div>
    );
}
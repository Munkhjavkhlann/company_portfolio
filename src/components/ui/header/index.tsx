"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import TransitionLink from "../transition-link";
import { Icon } from "@iconify/react";

export const Header = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeLink, setActiveLink] = useState<string | null>("Home");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const handleNavClick = (navItem: string | null) => {
        setActiveLink(navItem);
        setIsDrawerOpen(false);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navItems = ["Solutions", "Vision", "Programs", "Blog"];

    const drawerVariants = {
        hidden: {
            x: "100%",
            borderRadius: "0 0 0 50%",
            transition: { duration: 0.2, ease: "easeInOut" },
        },
        visible: {
            x: 0,
            borderRadius: "0 0 0 0",
            transition: { duration: 0.4, ease: "easeInOut" },
        },
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <AnimatePresence>
                {visible && (
                    <motion.header
                        key="header"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full"
                        style={{ backgroundColor: "rgb(20, 20, 22)" }}
                    >
                        <div className="px-4 sm:px-8 lg:px-16 max-w-full flex items-center justify-between h-20">
                            <div className="flex-shrink-0">
                                <TransitionLink
                                    href="/"
                                    onClick={() => handleNavClick("Home")}
                                    className={`text-white font-bold text-lg sm:text-xl transition-colors duration-200 ${activeLink === "Home"
                                        ? "text-[rgb(253,98,98)]"
                                        : "hover:text-[rgb(253,98,98)]"
                                        }`}
                                >
                                    Digital Lavlakh
                                </TransitionLink>
                            </div>

                            <div className="hidden lg:flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <TransitionLink
                                        key={item}
                                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                        className={`px-4 py-2 rounded-md text-sm font-normal transition-colors duration-200 ${activeLink === item
                                            ? "text-[rgb(253,98,98)]"
                                            : "text-gray-300 hover:text-white"
                                            }`}
                                        onClick={() => handleNavClick(item)}
                                    >
                                        {item}
                                    </TransitionLink>
                                ))}
                                <Button
                                    variant="outline"
                                    className="px-4 py-5 ml-4 font-extralight border-white text-white hover:bg-[#889ce7] hover:border-[#889ce7] hover:text-white"
                                >
                                    Get Started
                                </Button>
                            </div>

                            <div className="lg:hidden">
                                <Button
                                    variant="ghost"
                                    className="text-white hover:text-[rgb(253,98,98)] p-2"
                                    onClick={toggleDrawer}
                                >
                                    <Icon icon="mdi:menu" width={64} height={64} />
                                </Button>
                            </div>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-[rgb(20,20,22)] z-50 shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col items-start p-6 space-y-6">
                            <Button
                                variant="ghost"
                                className="self-end text-white hover:text-[rgb(253,98,98)]"
                                onClick={toggleDrawer}
                            >
                                <Icon icon="mdi:close" width={48} height={48} />
                            </Button>
                            {navItems.map((item) => (
                                <TransitionLink
                                    key={item}
                                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className={`text-lg font-normal transition-colors duration-200 ${activeLink === item
                                        ? "text-[rgb(253,98,98)]"
                                        : "text-gray-300 hover:text-white"
                                        }`}
                                    onClick={() => handleNavClick(item)}
                                >
                                    {item}
                                </TransitionLink>
                            ))}
                            <Button
                                variant="outline"
                                className="w-full font-extralight border-white text-white hover:bg-[#889ce7] hover:border-[#889ce7] hover:text-white"
                            >
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {isDrawerOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black z-40"
                    onClick={toggleDrawer}
                />
            )}
        </div>
    );
};
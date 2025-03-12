"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import TransitionLink from '../transition-link';

export const Header = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeLink, setActiveLink] = useState<string | null>('Home'); // Allow null for no active link

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

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleNavClick = (navItem: string | null) => {
        setActiveLink(navItem); // Update active link, allowing null for Home
    };

    const navItems = ['Solutions', 'Vision', 'Programs', 'Blog'];

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <AnimatePresence>
                {visible && (
                    <motion.header
                        key="header"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full"
                        style={{ backgroundColor: 'rgb(20, 20, 22)' }}
                    >
                        <div className="px-16 max-w-full flex items-center justify-between h-20">
                            {/* Home Link */}
                            <div className="flex-shrink-0">
                                <TransitionLink
                                    href="/"
                                    onClick={() => handleNavClick('Home')} // Handle click for Home
                                    className={`text-white font-bold text-xl transition-colors duration-200 ${activeLink === 'Home'
                                            ? 'text-[rgb(253,98,98)]'
                                            : 'hover:text-[rgb(253,98,98)]'
                                        }`}
                                >
                                    Digital Lavlakh
                                </TransitionLink>
                            </div>

                            {/* Navigation Links */}
                            <div className="hidden md:block">
                                <div className="flex items-center space-x-1">
                                    {navItems.map((item) => (
                                        <TransitionLink
                                            key={item}
                                            href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className={`px-4 py-2 rounded-md text-sm font-normal transition-colors duration-200 ${activeLink === item
                                                    ? 'text-[rgb(253,98,98)]'
                                                    : 'text-gray-300 hover:text-white'
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
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <Button
                                    variant="ghost"
                                    className="text-white hover:text-[rgb(253,98,98)]"
                                >
                                    Menu
                                </Button>
                            </div>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>
        </div>
    );
};
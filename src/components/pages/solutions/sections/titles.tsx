import { motion } from "framer-motion";

export const SolutionsTitle = () => {
    const itemVariants = {
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
        <motion.section
            className="h-max px-4 md:px-8 lg:px-16 mb-12 md:mb-16 lg:mb-24"
            initial="hidden"
            animate="visible"
        >
            <div className="pt-[10vh] md:pt-[12vh] lg:pt-[17vh]">
                <motion.h1
                    className="text-[32px] md:text-[48px] lg:text-[64px] w-full md:w-max font-light mb-4 md:mb-6 lg:mb-8 text-white leading-tight"
                    variants={itemVariants}
                >
                    Dive Into the New Age of <br /> Accelerated Analytics
                </motion.h1>

                <motion.p
                    className="text-[18px] md:text-[24px] lg:text-[30px] w-full md:w-2/3 lg:w-[40%] font-light mb-4 md:mb-6 lg:mb-8 text-white"
                    variants={itemVariants}
                >
                    Our Services
                </motion.p>
            </div>
        </motion.section>
    );
};
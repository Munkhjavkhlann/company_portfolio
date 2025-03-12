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
            className="h-max px-16 mb-24"
            initial="hidden"
            animate="visible"
        >
            <div className="pt-[17vh]">
                <motion.h1
                    className="text-[64px] w-max font-light mb-8 text-white leading-tight"
                    variants={itemVariants}
                >
                    Dive Into the New Age of <br /> Accelerated Analytics
                </motion.h1>

                <motion.p
                    className="text-[30px] w-[40%] font-light mb-8 text-white"
                    variants={itemVariants}
                >
                    Our Services
                </motion.p>
            </div>
        </motion.section>
    );
};
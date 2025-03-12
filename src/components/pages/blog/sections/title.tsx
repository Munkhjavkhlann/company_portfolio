import { motion } from "framer-motion";

export const BlogTitle = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

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
            className="h-max px-16 mb-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="pt-[17vh]">
                <motion.h1
                    className="text-[64px] w-max font-light mb-4 text-white leading-tight"
                    variants={itemVariants}
                >
                    The Big Data Blog
                </motion.h1>
            </div>
        </motion.section>
    );
};
import { motion } from "framer-motion";

export const ProgramsTitle = () => {
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
                    className="text-[80px] w-max font-light mb-4 text-white leading-tight"
                    variants={itemVariants}
                >
                    Data Analysis Programs
                </motion.h1>

                <motion.p
                    className="text-[30px] w-[40%] font-extralight mb-8 text-white"
                    variants={itemVariants}
                >
                    I&quot;m a paragraph. Click here to add your own text and edit me.
                </motion.p>
            </div>
        </motion.section>
    );
};
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
            className="h-max px-4 md:px-8 lg:px-16 mb-12 md:mb-20 lg:mb-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="pt-[10vh] md:pt-[12vh] lg:pt-[17vh]">
                <motion.h1
                    className="text-[36px] md:text-[56px] lg:text-[80px] w-full md:w-max font-light mb-4 md:mb-4 lg:mb-4 text-white leading-tight"
                    variants={itemVariants}
                >
                    Data Analysis Programs
                </motion.h1>

                <motion.p
                    className="text-[18px] md:text-[24px] lg:text-[30px] w-2/3 xl:w-[40%] font-extralight mb-6 md:mb-8 lg:mb-8 text-white"
                    variants={itemVariants}
                >
                    I’m a paragraph. Click here to add your own text and edit me.
                </motion.p>
            </div>
        </motion.section>
    );
};
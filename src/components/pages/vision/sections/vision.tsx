import { motion } from "framer-motion";

export const Vision = () => {
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
                    Our Mission
                </motion.h1>

                <motion.p
                    className="text-[30px] w-[40%] font-extralight mb-8 text-white"
                    variants={itemVariants}
                >
                    I&quot;m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </motion.p>
            </div>
        </motion.section>
    );
};
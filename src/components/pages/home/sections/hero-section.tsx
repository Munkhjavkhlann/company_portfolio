import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
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
            className="min-h-[105vh] md:min-h-[120vh] px-4 md:px-8 lg:px-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="pt-[17vh]">
                <motion.h1
                    className="text-[36px] md:text-[56px] lg:text-[80px] w-full md:w-max font-light mb-4 text-white leading-tight" // Responsive text size
                    variants={itemVariants}
                >
                    The New Standard <br /> in Data Analysis
                </motion.h1>

                <motion.p
                    className="text-[18px] md:text-[24px] lg:text-[30px] w-full md:w-2/3 xl:w-[40%] font-light mb-6 md:mb-8 lg:mb-8 text-white" // Responsive text size and width
                    variants={itemVariants}
                >
                    Use Data to Get 360-Degree <br /> View of Your Business
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Button variant="primary" size="lg">
                        Learn more
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
};
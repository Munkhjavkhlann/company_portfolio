"use client";

import { motion } from "framer-motion";
import { ServiceIcon1, ServiceIcon2, ServiceIcon3 } from "@/assets/icons/index";
import { Button } from "@/components/ui/button";

export const Programs = () => {
    const programsData = [
        {
            icon: <ServiceIcon1 height={80} width={80} />,
            title: "Cloud Analytics For Beginners",
            duration: "2 Weeks",
            price: "$80.00",
            bgColor: "#1b1c1e",
        },
        {
            icon: <ServiceIcon3 height={80} width={80} />,
            title: "Data Science Acceleration",
            duration: "4 Weeks",
            price: "$150.00",
            bgColor: "#1b1c1e",
        },
        {
            icon: <ServiceIcon2 height={80} width={80} />,
            title: "Versatility in Application",
            duration: "3 Weeks",
            price: "$120.00",
            bgColor: "#1b1c1e",
        },
    ];

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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="w-full relative flex bg-[#141416] justify-center px-4 md:px-8 lg:px-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full mt-[-5%] bg-[#141416] grid grid-cols-1 md:grid-cols-3 overflow-hidden border border-[#3F4349]"
            >
                {programsData.map((program, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex flex-col bg-[#141416] p-4 md:p-6 lg:p-8 ${index !== programsData.length - 1
                                ? "border-b sm:border-b-0 sm:border-r md:border-r border-[#3F4349]"
                                : ""
                            }`}
                    >
                        <div
                            className="flex justify-center items-center h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px]"
                            style={{ backgroundColor: program.bgColor }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {program.icon}
                            </motion.div>
                        </div>

                        <h3 className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[21px] font-extralight mt-4 md:mt-6 mb-2 break-words">
                            {program.title}
                        </h3>

                        <div className="text-[#FFFFFF] text-[14px] md:text-[16px] font-light mb-2">
                            {program.duration}
                        </div>

                        <div className="h-[1px] bg-[#8a8a8a] mt-4 md:mt-6 w-12 md:w-16" />

                        <div className="text-white text-[16px] md:text-lg font-extralight my-4 md:my-6">
                            {program.price}
                        </div>

                        <Button variant="primary" size="lg" className="w-full md:w-[124px]">
                            View Details
                        </Button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
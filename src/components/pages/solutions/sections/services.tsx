"use client";

import { motion } from "framer-motion";
import { ServiceIcon1, ServiceIcon2, ServiceIcon3, ServiceIcon4 } from "@/assets/icons/index";

export const Services = () => {
    const servicesData = [
        {
            icon: <ServiceIcon1 height={32} width={32} color="black" />,
            title: "Cloud Analytics Modernization",
            description:
                "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click edit text or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
            bgColor: "#fd6262",
        },
        {
            icon: <ServiceIcon3 height={32} width={32} color="black" />,
            title: "Data Science Acceleration",
            description:
                "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click edit text or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
            bgColor: "#889ce7",
        },
        {
            icon: <ServiceIcon2 height={32} width={32} color="black" />,
            title: "Versatility in Application",
            description:
                "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click edit text or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
            bgColor: "#fd6262",
        },
        {
            icon: <ServiceIcon4 height={32} width={32} color="black" />,
            title: "Full Customer Experience Service",
            description:
                "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click edit text or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
            bgColor: "#889ce7",
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

    const iconVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: "easeOut",
            },
        },
    };

    const textVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="w-full relative flex h-max bg-[#141416] justify-center px-4 md:px-8 lg:px-16 items-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full mt-[-5%] flex-col max-w-full h-full flex"
            >
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex-1 flex flex-col md:flex-row border-[1px] border-[#3F4349] bg-[#141416]"
                    >
                        <div className="w-full md:w-[20%] bg-[#141416] border-b-[1px] md:border-b-0 md:border-r-[1px] border-[#3F4349] flex flex-col items-center justify-center overflow-hidden min-h-[20vh] md:min-h-0">
                            <motion.div
                                variants={iconVariant}
                                className="relative flex flex-col items-center justify-center p-2 md:p-4"
                            >
                                <div
                                    className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg"
                                    style={{ backgroundColor: service.bgColor }}
                                />
                                <div className="relative z-10">
                                    {service.icon}
                                </div>
                                <div className="w-8 md:w-10 lg:w-12 h-[2px] md:h-[3px] bg-black rounded-lg z-[100] mt-1 md:mt-2" />
                            </motion.div>
                        </div>

                        <div className="w-full md:w-[80%] bg-[#141416] flex flex-col justify-center p-6 md:p-8 lg:p-12 text-white">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={textVariant}
                            >
                                <h3 className="text-[16px] md:text-[18px] font-normal">{service.title}</h3>
                                <p className="text-[#8a8a8a] font-extralight text-[12px] md:text-[14px] lg:text-[16px] w-full md:w-[70%] lg:w-[50%] mt-2">
                                    {service.description}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
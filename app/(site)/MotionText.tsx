"use client";

import { motion } from "framer-motion";

const MotionText = () => {
    return (
        <div>
            <motion.p
                variants={{
                    hidden: {
                        opacity: 0,
                        x: -20,
                    },

                    visible: {
                        opacity: 1,
                        x: 0,
                    },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
                className="animate_left"
            >
                Seeing all the bext
            </motion.p>


            <motion.input
                type="text"
                name=""
                variants={{
                    hidden: {
                        opacity: 0,
                        x: -20,
                    },

                    visible: {
                        opacity: 1,
                        x: 0,
                    },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
                className="animate_left"
            />
                
        </div>
    )
}

export default MotionText
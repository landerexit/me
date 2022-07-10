import React from "react";
import { motion } from "framer-motion";

function TypeAnimation(props) {
    const animationVariants = {
        hidden: {
            opacity: 0
        },
      
        visible: {
            opacity: 1
        }
    }

    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: props.delay, staggerChildren: props.delayChildren }}
            variants={ animationVariants }
            className={props.className}
        >
        {
            props.text.split('').map( (letter, index) => {
                return (
                    <motion.span
                        key={letter + index}
                        variants={ animationVariants }
                        className={props.className + '__letter'}
                    >
                        {letter}
                    </motion.span>
                )
            })
        }

        </motion.h1>
    )
}

export default TypeAnimation
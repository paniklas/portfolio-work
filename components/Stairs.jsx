import { motion, animate } from 'framer-motion';

//variants
const stairAnimation = {
    initial: {
        top: "0%", 
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    },
}

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // total number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* render 6 motion div, each representing a step of the stairs. Each div will have the same animation defined by the stair animation object. The delay for each div is calculated dynamically based on its reversed index. Creating a staggered effect with decreasing delay for each subsequent step. */}
            
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div 
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeIn",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="w-full h-full relative bg-white"
                    />
                );
            })}
        </>
    )
}

export default Stairs

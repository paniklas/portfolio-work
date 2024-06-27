export const animations = {
    // initial={{ opacity: 0, x: -100 }}
    // animate={{ opacity: 1, x: 0 }}
    // rotate={{ x: 360 }}
    // transition={{ delay: 2, duration: 0.6, ease: "easeInOut" }}
    initial: {
        opacity: 0,
        x: "-100"
    },
    animate: {
        opacity: 1,
        x: "0"
    }
}

export const stagger = {

    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}
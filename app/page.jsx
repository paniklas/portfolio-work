"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

// framer motion
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <motion.h1
              className="h1 mb-6"
              initial={{ opacity: 0, x: -2000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 4, ease: "easeInOut" }}
            >
              Hello I'm <br /> <span className="text-accent">Panos <br />Vasilopoulos</span>
            </motion.h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software developer based in Athens, Greece. I specialize in building and designing websites and web applications.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button>
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <motion.div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </motion.div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home


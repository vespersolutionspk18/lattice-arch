'use client'

import React from "react";
import { motion, Variants, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
}

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 15
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15
    }
  }
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: i === 0 ? 6 : i === 2 ? -6 : 0,
    transition: {
      delay: 0.3 + i * 0.1,
      type: "spring" as const,
      stiffness: 200,
      damping: 20
    }
  })
}

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, to, { duration });
    return animation.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

const AboutUs = () => {
  return (
    <motion.div 
      className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-10 w-full px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 lg:mt-16 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base lg:text-lg text-white/85"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        About Us
      </motion.div>
      <motion.h5 
        className="text-center text-2xl md:text-3xl lg:text-5xl text-white/85 font-semibold tracking-tighter w-full md:w-[80%] lg:w-[66%]"
        variants={itemVariants}
      >
        We&apos;re a team of designers, architects, and builders turning spaces
        into works of art. From interiors to landscapes, we deliver lasting
        results tailored to your vision.
      </motion.h5>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-16 w-full py-8 md:py-16 lg:py-32"
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col gap-2 md:gap-4 lg:gap-7"
          variants={statVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h5 
            className="font-semibold text-2xl md:text-3xl lg:text-5xl text-white tracking-tighter"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Counter from={0} to={15} />+
          </motion.h5>
          <p className="text-sm md:text-lg lg:text-2xl text-stone-400">Years of Experience</p>
        </motion.div>
        <motion.div 
          className="flex flex-col gap-2 md:gap-4 lg:gap-7"
          variants={statVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h5 
            className="font-semibold text-2xl md:text-3xl lg:text-5xl text-white tracking-tighter"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Counter from={0} to={36} />
          </motion.h5>
          <p className="text-sm md:text-lg lg:text-2xl text-stone-400">Talented Team Members</p>
        </motion.div>
        <motion.div 
          className="flex flex-col gap-2 md:gap-4 lg:gap-7"
          variants={statVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h5 
            className="font-semibold text-2xl md:text-3xl lg:text-5xl text-white tracking-tighter"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Counter from={0} to={100} />+
          </motion.h5>
          <p className="text-sm md:text-lg lg:text-2xl text-stone-400">Projects Delivered</p>
        </motion.div>
        <motion.div 
          className="flex flex-col gap-2 md:gap-4 lg:gap-7"
          variants={statVariants}
          whileHover={{ scale: 1.05 }}
        >
          <h5 className="font-semibold text-2xl md:text-3xl lg:text-5xl text-white tracking-tighter">
            $2M+
          </h5>
          <p className="text-sm md:text-lg lg:text-2xl text-stone-400">Saved for contractors</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex flex-col lg:flex-row w-full gap-4 md:gap-6 lg:gap-7"
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col gap-4 md:gap-6 lg:gap-10 p-4 md:p-6 lg:p-7 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-full lg:w-1/2"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h5 
            className="text-xl md:text-2xl lg:text-3xl text-white/85 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We design with intention creating spaces that reflect your style,
            not just trends.
          </motion.h5>
          <motion.p 
            className="text-base md:text-xl lg:text-2xl text-stone-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            1: Balance of style and function<br></br>
            2: Timeless results, built to last<br></br>
            3: Thoughtful, detail driven process
          </motion.p>
          <motion.div
            className="flex flex-row w-full items-center justify-center gap-3 md:gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-10"
            id="img's here"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative h-16 w-14 md:h-20 md:w-16 lg:h-24 lg:w-20 overflow-hidden rounded-b-lg md:rounded-b-xl"
              custom={0}
              variants={imageVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 12,
                transition: { type: "spring" as const }
              }}
            >
              <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=600&fit=crop"
                  alt="Interior design"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </motion.div>
            <motion.div 
              className="relative h-16 w-14 md:h-20 md:w-16 lg:h-24 lg:w-20 overflow-hidden rounded-b-lg md:rounded-b-xl"
              custom={1}
              variants={imageVariants}
              whileHover={{ 
                scale: 1.1,
                y: -10,
                transition: { type: "spring" as const }
              }}
            >
              <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=600&fit=crop"
                  alt="Architecture"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </motion.div>
            <motion.div 
              className="relative h-16 w-14 md:h-20 md:w-16 lg:h-24 lg:w-20 overflow-hidden rounded-b-lg md:rounded-b-xl"
              custom={2}
              variants={imageVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: -12,
                transition: { type: "spring" as const }
              }}
            >
              <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop"
                  alt="Modern home"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="rounded-2xl md:rounded-3xl lg:rounded-4xl w-full lg:w-1/2 h-48 md:h-64 lg:h-auto min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop')"
          }}
          variants={cardVariants}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;

'use client';
import React from 'react'
import { Button } from './ui/button'
import { TbArrowUpRight } from "react-icons/tb"
import Image from 'next/image'
import { desVariants, titileVariants, tagVariants, imageVariants } from '@/utils/animation'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <div className='container py-12 xl:py-24 h-auto text-center lg:py-0 lg:text-left lg:flex lg:items-center lg:space-x-8'>
            <div className='w-full lg:w-1/2 xl:py-14 lg:py-8'>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titileVariants}
                    className='tracking-widest uppercase'>
                    Offer for the best Interior Designs
                </motion.p>
                <motion.h1
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}

                    className='text-4xl font-bold leading-tight mt-4'>
                    Make your home a <br /> piece of art
                </motion.h1>
                <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}

                    className='mt-6 pb-6 xl:pb-10 text-white-700'>
                    With 10 years of experience in all 50 states and 100,000+ designs, we’ll help you hone your style, get inspired, and realize your design dreams for your specific space.
                    Let your designer guide you to a design that meets your functional needs and suits your unique style. See it come to life with a 3D rendering of the design in your actual space.
                    Our designers source from 100+ home brands so no two spaces are ever alike. Leverage Havenly’s proprietary platform with a simple consolidated checkout and never overpay with our price guarantee.
                </motion.p>
                <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                >
                    <Button className='inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>
                        Book Now <TbArrowUpRight className='w-5 h-5 ml-2' />
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={imageVariants}

                className='relative w-full lg:w-1/2 mt-8 lg:mt-0'
            >
                <Image
                    src="/hall.png"
                    alt='Interior Design'
                    width={600}
                    height={400}
                    className='w-full h-auto object-cover lg:static lg:max-w-none'
                />
            </motion.div>
        </div>
    )
}

export default HeroSection
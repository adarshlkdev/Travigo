import React from 'react'
import { motion } from 'framer-motion'

const Explore = ({ title, placesAPI }) => {
    return (
        <>
            <motion.div
                whileInView='visible'
                initial='hidden'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                }}>
                <div className='travigo-container'>
                    <div className='flex justify-center items-center text-center mb-11 md:mb-7'>
                        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter 
                                      drop-shadow-lg text-slate-900'>{title}</h1>
                    </div>
                    <div
                        className='grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5'
                    >
                        {placesAPI?.map((val, i) => (
                            <div key={i} className='flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-pink-400 transition-all duration-300 cursor-pointer hover:scale-105'>
                                <div className='flex items-center'>
                                    <img src={val.placeImg} alt={val.location} className='w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg' />
                                </div>
                                <div className='flex items-start flex-col text-slate-900 hover:text-white transition-all duration-300'>
                                    <h1 className='text-lg sm:text-sm font-bold'>{val.location}</h1>
                                    <p className='font-normal text-base lg:text-sm  sm:text-xs'>{val.distance}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Explore

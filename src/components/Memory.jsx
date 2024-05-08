import React from 'react'
import { motion } from 'framer-motion'

const Memory = ({ memory: { title, subtitle, img, experience, text } }) => {
    return (
        <>
            <div className='relative my-16 md:mb-7'>
                <motion.div
                    className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'
                    whileInView='visible'
                    initial='hidden'
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        visible: { opacity: 1, y: -50 },
                        hidden: { opacity: 0, y: 0 },
                    }}

                >

                    <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
                        <img className='h-[55vh] w-auto object-fill rounded-lg' src={img} alt="memory/img" />
                    </div>

                    <div className='grid items-center w-full max-w-2xl lg:text-center'>
                        <h1 className='text-5xl  lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
                        <h1 className='text-5xl  lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{subtitle}</h1>
                        <p className='text-base my-5 sm:text-sm'>{text}</p>

                        <div className='grid items-center grid-cols-3 gap-7 md:gap-3'>
                            {experience?.map((val, i) => (
                                <div key={i} className='bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg h-auto w-auto 
                                flex items-center justify-center flex-col text-white text-center py-7 px-5 xl:p-5 filter cursor-pointer hover:scale-105 transition-all duration-400'>
                                    <h1 className='text-3xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg'>{val.number}</h1>
                                    <p className='text-lg xl:text-base sm:text-sm xsm:text-xs font-medium'>{val.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Memory

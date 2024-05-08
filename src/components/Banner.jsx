import React from 'react'
import { motion } from 'framer-motion'

const Banner = ({ bannerAPI: { title, text, btnText, imgSrc } }) => {
    return (
        <>
            <motion.div className='relative w-full  max-w-5xl ml-auto mr-auto mt-0 mb-3
            xl:w-[95vw] rounded-lg'
                whileInView='visible'
                initial='hidden'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                }}>
                <div className='relative flex items-center'>
                    <img className='h-[35vh] w-full rounded-lg' src={imgSrc} alt="banner/img" />
                </div>
                <motion.div className='absolute top-24 left-12 w-full flex flex-col items-start
                md:items-center md:justify-center md:left-0 md:top-14 '
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.50,
                    }} >
                    <h1 className='text-3xl font-bold text-slate-900 drop-shadow-lg'>{title}</h1>
                    <p className='text-base text-shadow-lg  font-bold sm:text-sm'>{text}</p>
                    <button type='button' className='py-1.5 px-5 mt-2 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full
                    shadow-lg shadow-slate-900 transition-all duration-300 active:scale-110'>{btnText}</button>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Banner

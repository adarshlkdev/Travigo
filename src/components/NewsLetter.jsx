import React from 'react'
import { motion } from 'framer-motion'

const NewsLetter = () => {
    return (
        <>
            <motion.div className='p-5 bg-white/60 ring-1 ring-pink-200 shadow-md shadow-cyan-500 rounded-lg max-w-5xl w-full ml-auto mr-auto mt-0 mb-12 xl:w-[95vw] relative top-6'
                whileInView='visible'
                initial='hidden'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -20 },
                    hidden: { opacity: 0, y: 0 },
                }}>
                <div className='flex items-center justify-between lg:flex-col lg:gap-7'>
                    <motion.div
                        className='grid items-center sm:text-center'
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <h1 className='text-4xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-slate-900
                '>Get In Touch With Us</h1>
                        <p className='text-base sm:text-sm xsm:text-xs font-medium'>Questions and Feedback? We would love to hear for you.</p>
                    </motion.div>
                    <form className='flex items-center justify-center relative'>
                        <input
                            placeholder='Email Address'
                            name='email'
                            type={'email'}
                            className="py-2 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-96 lg:w-[85vw] text-base rounded-full relative placeholder:text-slate-500 focus:outline-pink-300"
                        />
                        <button
                            type='button'
                            className='text-base px-5 py-2 text-white bg-gradient-to-b from-pink-400 to-fuchsia-600 rounded-r-full transition-all duration-200 active:scale-90 absolute right-0 shadow-lg shadow-pink-200'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </motion.div>
        </>
    )
}

export default NewsLetter
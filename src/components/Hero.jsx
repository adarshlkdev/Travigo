import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ hero: { title, subtitle, btn1, btn2, text, img } }) => {
  return (
    <>
      <div className='flex flex-col bg-gradient-to-b from-pink-400 via-cyan-500 to-white h-auto w-auto'>
        <div className='travigo-container grid items-start justify-items-center'>
          <motion.div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'
            initial='hidden'
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 1.35
            }}
          >
            <h1 className='text-5xl font-bold lg:text-3xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-5xl mt-2 font-bold lg:text-3xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{subtitle}</h1>
            <p className='text-base my-5 text-center sm:text-sm'>{text}</p>
            <div className='flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
              <button type='button' className='button-emrald'>{btn1}</button>
              <button type='button' className='button-light'>{btn2}</button>
            </div>
          </motion.div>
          <motion.div
            className='flex items-center justify-center mb-11'
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              durarion: 0.3,
              ease: "easeInOut",
              delay: 1.35 }}
              >
                <img src={img} alt='dashbaord/img' className='h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] rounded-lg sm:object-contain drop-shadow-emrald' />
          </motion.div>
      </div>
    </div >
   </>
  )
}

export default Hero
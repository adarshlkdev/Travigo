import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <motion.footer className='bg-gradient-to-r from-pink-400 to-cyan-500  text-white pt-24 pb-7'
        whileInView='visible'
        initial='hidden'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <div className='grid items-center grid-cols-3 justify-items-center '>
          {titles?.map((val, i) => (
            <motion.div key={i} className="grid items-center justify-items-center text-black"
              whileInView='visible'
              initial='hidden'
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}>
              <h1 className='text-3xl lg:text-base uppercase font-semibold'>{val.title}</h1>
            </motion.div>
          ))}
          {links?.map((list, i) => (
            <motion.ul key={i} className="grid items-center justify-items-center text-2xl gap-1"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.50,
              }}>
              {list?.map((val, i) => (
                <li key={i} className="cursor-pointer hover:scale-100 duration-300 hover:text-black text-sm sm:text-xs">{val.link}</li>
              ))}
            </motion.ul>
          ))}
        </div>
        <motion.div
          className='w-7/12 lg:w-[95vw] m-auto mt-9 text-black font-semibold'
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 1.0,
          }}>
          <div className='h-[0.1vh] bg-black/30 my-7 md:my-5'></div>
          <div className='flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse'>
            <p className='text-sm md:text-center'>Copyright<span className='text-base font-bold'>&copy;</span> All Reserved Rights 2023 <span className='font-semibold'>adarshlkdev</span></p>
            <div className='flex items-center gap-3 text-sm cursor-pointer'>
              {sociallinks?.map((val, i) => (
                <img key={i} src={val.icon} alt="social/icons" className='w-5 h-5' />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.footer >
    </>
  )
}

export default Footer
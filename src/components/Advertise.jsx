import React from 'react'
import { motion } from 'framer-motion'

const Advertise = ({ brands }) => {
    return (
        <>
            <motion.div className='my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7
                        overflow-x-scroll scroll-smooth scroll-hidden'
                whileInView='visible'
                initial='hidden'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                }}>
                {brands?.map((val, i) => (
                    <img key={i} src={val.iconSrc} alt="brands/icon"
                        className='w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-300 filter drop-shadow-md' />
                ))}
            </motion.div>

        </>
    )
}

export default Advertise

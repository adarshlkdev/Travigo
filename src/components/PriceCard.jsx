import React from 'react'
import { motion } from 'framer-motion'

const PriceCard = ({ plan: { planicon, title, text, plantype, plancontent, buttonText } }) => {
    return (
        <>
            <motion.div className='p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200 hover:scale-105 duration-300 transition-all cursor-pointer'
                whileInView='visible'
                initial='hidden'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -20 },
                    hidden: { opacity: 0, y: 0 },
                }}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <div className='grid items-center'>
                            <img src={planicon} alt="planicon/img" className='w-14 h-14 lg:h-12 lg:w-12 object-cover' />
                        </div>
                        <div className='grid items-center'>
                            <h1 className='text-gray-900 font-semibold text-lg filter drop-shadow-lg lg:text-base md:text-sm'>{title}</h1>
                            <p className='text-slate-900 font-normal text-sm lg:text-xs'>{text}</p>
                        </div>
                    </div>
                    <div className='grid items-center'><h1 className='text-gray-900 font-bold text-lg filter drop-shadow-lg lg:text-base md:text-sm'>{plantype}</h1></div>
                </div>

                <div className='h-[0.1vh] bg-slate-200 my-5'></div>

                <div className='grid items-center gap-3 px-5'>
                    {plancontent?.map((val, i) => (
                        <div key={i} className="flex items-center justify-start gap-5">
                            <div className='grid items-center'>
                                <img src={val.iconbox} alt='iconbox/svg' className='lg:w-5 lg:h-5' />
                            </div>
                            <div className='grid items-center'>
                                <h1 className='font-normal text-lg text-gray-900 filter drop-shadow-lg lg:text-base hover:text-pink-500'>{val.text}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='grid items-center justify-items-center mt-7'>
                    <button type='button' className='button-emrald text-base'>{buttonText}</button>
                </div>
            </motion.div>
        </>
    )
}

export default PriceCard

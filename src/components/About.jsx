import aboutImage from '../assets/aboutImage.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const aboutVarients = (duration) => ({
    initial: { y: -19,},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat : Infinity,
            repeatType: "reverse",
        },
    },
});

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl">About 
                <span className="text-neutral-500"> Me</span>
            </motion.h2>

            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 p-8 ">
                    <motion.div 
                        variants={aboutVarients(2)}
                                    initial="initial"
                                    animate="animate"
                    className="flex items-center justify-center">
                        <img src={aboutImage} alt="About" className="w-80" />

                    </motion.div>

                </motion.div>

                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 ">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About

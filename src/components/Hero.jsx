import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/pruthvikProfile.jpeg";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});


const profileVarients = (duration) => ({
    initial: { y: -19, },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl">Pruthvik Kumaraswamy</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Software Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {HERO_CONTENT}
                        </motion.p>



                        <motion.a
                         variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            href="/assets/Pruthvik_resume.pdf"
                            download
                            className="rounded-full flex justify-center items-center gap-2 text-center border p-3 w-full  mb-10 hover:bg-slate-50 hover:text-black transition"
                        >
                            Get My Resume
                            <FaDownload />
                        </motion.a>

                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        variants={profileVarients(2)}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0, }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilepic} alt="pruthvikProfile" className="rounded-2xl w-80" />

                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Hero

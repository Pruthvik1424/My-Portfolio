import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { FaCode } from "react-icons/fa";
import { MdDashboard } from 'react-icons/md';

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h2>

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, }}
                            className="w-full lg:w-1/4">
                            <img className="mb-6 rounded hover:shadow-[0_0_10px_white] transition duration-300" width={150} height={150} src={project.image} alt={project.title} />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1, }}
                            className="w-full flex-col max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {project.title}

                            </h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>

                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                    {tech}
                                </span>
                            ))}

                            <div className="flex gap-4 w-full">
                                <a
                                    href="https://yourwebsite.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 p-1 w-2/5 border mt-10 rounded-full hover:bg-slate-50 hover:text-black transition hover:shadow-[0_0_10px_white] duration-300"
                                >
                                    Live Demo
                                    <MdDashboard />
                                </a>


                                <a
                                    href="https://github.com/Pruthvik1424/My-Portfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 p-1 w-2/5 border rounded-full mt-10 hover:bg-slate-50 hover:text-black transition hover:shadow-[0_0_10px_white] duration-300"
                                >
                                    GitHub
                                    <FaCode />
                                </a>

                            </div>


                        </motion.div>





                    </div>
                ))}


            </div>
        </div>
    )
}

export default Projects

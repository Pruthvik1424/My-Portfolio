import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';



const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get In Touch </motion.h2>

      <div className="text-center tracking-tighter">

        <motion.p
          whileInView={{ opacity: 1, x: 0, }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4  text-neutral-400  pb-1 hover:text-neutral-100 transition">{CONTACT.address}</motion.p>



        <motion.p
          whileInView={{ opacity: 1, x: 0, }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center gap-2 text-neutral-400  pb-1 hover:text-neutral-100 transition">
            <FaPhone />
            {CONTACT.phoneNo}
        </motion.p>

        <a
          href="mailto:pruthvik.kumaraswamy14@gmail.com"
          className="flex items-center justify-center gap-2 text-neutral-400  pb-1 hover:text-neutral-100 transition"
        >
          <FaEnvelope />
          {CONTACT.email}
        </a>






      </div>

    </div>
  )
}

export default Contact

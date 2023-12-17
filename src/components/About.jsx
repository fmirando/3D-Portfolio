import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/';

const ServiceCard = ({ index, title, icon }) => {
  // I can change the services in constants/index.js
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0,5 * index, 0.75)}
        className="w-full green-pink-graident p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My name is Frank Mirando and I'm currently based out of Orange County, California. My journey as a software engineer started at California State University of Fullerton where I obtained my B.S. in computer science. I then completed a rigorous 3-month course at Hack Reactor where I honed my skills even further as a full stack engineer. Here, I gained extensive knowledge and experience developing full stack web applications in an agile environment.
          <br></br>
          "Programming, at its essence, is an art form, where lines of code weave intricate tapestries of functionality. The beauty lies not only in the execution of commands but in the thoughtful orchestration of logic and creativity. Crafting elegant algorithms and architecting systems that seamlessly align with a problem's nuances is akin to composing a symphony of functionality."
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
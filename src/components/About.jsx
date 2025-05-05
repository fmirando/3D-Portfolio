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

        Hi there! I'm a full-stack software engineer from Orange County, California, with a passion for crafting creative solutions to logical problems.
        <p>&nbsp;</p>
        My path to software engineering has been driven by a curiosity to understand how technology shapes our world. I built my foundation with a Bachelor of Science in Computer Science from California State University, Fullerton (graduated January 2021), and deepened my expertise through Hack Reactor's intensive software engineering program (completed June 2023).
        At Hack Reactor, I thrived in an agile environment where I developed full-stack applications from concept to deployment, with a particular focus on React and scalable architecture. This immersive experience honed not just my technical abilities, but also my collaborative approach to problem-solving.
          <br></br>
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
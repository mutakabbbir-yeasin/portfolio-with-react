import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate and results-driven software engineer with a strong
        foundation in web development and a deep love for crafting digital
        experiences that not only meet but exceed user expectations. My journey
        in the world of technology has been marked by continuous learning,
        innovation, and a commitment to delivering high-quality software
        solutions.
      </motion.p>
      <h3 className={styles.sectionSubHeadText}>Skills</h3>
      <p className={styles.sectionSkillText}>
        My technical skill set encompasses a wide range of web development
        technologies and tools, including:
      </p>
      <p className={styles.sectionSkillText}>
        <b className="text-white">Frontend Technologies:</b> HTML5, CSS3, SCSS,
        Bootstrap5, Tailwind CSS, JavaScript
      </p>
      <p className={styles.sectionSkillText}>
        <b className="text-white">JavaScript Frameworks:</b> React.js, Next.js
        (currently learning)
      </p>
      <p className={styles.sectionSkillText}>
        <b className="text-white"> Backend Technologies:</b> Node.js, Express.js
        (basic)
      </p>
      <p className={styles.sectionSkillText}>
        <b className="text-white">Databases: </b>Firebase, MongoDB, MySql
      </p>
      <p className={styles.sectionSkillText}>
        <b className="text-white">Version Control: </b> Git and GitHub
      </p>
      <h3 className={styles.sectionSubHeadText}>
        Passion for Frontend Development
      </h3>
      <p className={styles.sectionSkillText}>
        With a solid grasp of HTML, CSS, and JavaScript, I specialize in
        creating visually appealing and responsive user interfaces. My
        proficiency in frontend frameworks like React.js empowers me to build
        dynamic, interactive, and performant web applications. I am currently
        expanding my skills by diving deeper into Next.js to enhance server-side
        rendering capabilities.
      </p>

      <h3 className={styles.sectionSubHeadText}>Backend Expertise</h3>
      <p className={styles.sectionSkillText}>
        I have experience in backend development using Node.js and Express.js,
        allowing me to create robust server-side solutions and APIs.
        Additionally, I've worked with Firebase and MongoDB to design scalable
        and secure backend data systems.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

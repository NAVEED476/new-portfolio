import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover="hover"
    >
      <motion.div
        className="border-line"
        variants={{
          hover: {
            opacity: 1,
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: 'loop',
            },
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="#00BFFF"
            strokeWidth="2"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>
      <motion.div
        style={{ fontSize: '2rem', marginBottom: '0.5rem' }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {skill.icon}
      </motion.div>
      <h3 style={{ marginBottom: '0.5rem' }}>{skill.name}</h3>
      <p style={{ margin: 0, fontSize: '0.8rem' }}>Exp: {skill.experience}</p>
      <p style={{ margin: 0, fontSize: '0.8rem' }}>Projects: {skill.projects}</p>
    </motion.div>
  );
};


const About = () => {


  const skills = [
    { name: 'HTML5', experience: '2+ yrs', projects: '30+', icon: '🌐' },
    { name: 'CSS3', experience: '2+ yrs', projects: '30+', icon: '🎨' },
    { name: 'JavaScript', experience: '2+ yrs', projects: '30+', icon: 'JS' },
    { name: 'ReactJS', experience: '2+ yrs', projects: '30+', icon: '⚛️' },
    { name: 'NextJS', experience: '1+ yrs', projects: '30+', icon: 'N' },
    { name: 'NodeJS', experience: '2+ yrs', projects: '2+', icon: '📦' },
    { name: 'PWA', experience: '1+ yrs', projects: '30+', icon: '📱' },
    { name: 'NPM', experience: '2+ yrs', projects: '30+', icon: '📦' },
    { name: 'AWS', experience: '1 yrs', projects: '2+', icon: '☁️' },
    { name: 'Firebase', experience: '1+ yrs', projects: '30+', icon: '🔥' },
    { name: 'Docker', experience: '1 yrs', projects: '1', icon: '🐳' },
    { name: 'MaterialUI', experience: '2+ yrs', projects: '30+', icon: 'MUI' },
    { name: 'Ant Design', experience: '2+ yrs', projects: '30+', icon: '🐜' },
    { name: 'React-Table', experience: '1+ yrs', projects: '30+', icon: '📊' },
    { name: 'Amchart', experience: '1+ yrs', projects: '30+', icon: '📈' },
    { name: 'Rechart', experience: '1+ yrs', projects: '30+', icon: '📊' },
    { name: 'GitHub', experience: '2+ yrs', projects: '40+', icon: '🐙' },
    { name: 'BitBucket', experience: '2+ yrs', projects: '30+', icon: '🪣' },
    { name: 'Postman', experience: '2+ yrs', projects: '30+', icon: '📮' },
    { name: 'Axios', experience: '2+ yrs', projects: '50+', icon: '🔗' },
    { name: 'Chart.JS', experience: '2+ yrs', projects: '30+', icon: '📊' },
    { name: 'ExpressJS', experience: '2+ yrs', projects: '2+', icon: '🚂' },
    { name: 'Framer Motion', experience: '1+ yrs', projects: '3+', icon: '🎭' },
  ];



  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem',
    },
    card: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    badge: {
      display: 'inline-block',
      padding: '0.25rem 0.5rem',
      backgroundColor: '#e0e0e0',
      borderRadius: '4px',
      fontSize: '0.875rem',
      marginRight: '0.5rem',
      marginBottom: '0.5rem',
    },
    experienceItem: {
      marginBottom: '2rem',
      position: 'relative',
      paddingLeft: '2rem',
    },
    experienceTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    experienceSubtitle: {
      color: '#666',
      marginBottom: '0.5rem',
    },
    iconWrapper: {
      position: 'absolute',
      left: '0',
      top: '5px',
      width: '20px',
      height: '20px',
      backgroundColor: '#007bff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <>
     <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white' }}>
      <Navbar />
      <div style={{ padding: '2rem', paddingTop: '5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What I do</h1>
        <p style={{ marginBottom: '1rem' }}>
          Currently I am working as a Frontend Developer @Accenture, India and I spend most of my time in writing codes, business logics and in my free timing i write tech articles.
        </p>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
          <li>⚡ I develop fully responsive Front end / User Interfaces for your web and mobile applications</li>
          <li>⚡ I develop Progressive Web Applications ( PWA )</li>
          <li>⚡ I develop fully scalable web apps with SEO more than 95+</li>
          <li>⚡ Integration of third party services such as Firebase/ Okta Authentication/ Google Auth etc...</li>
        </ul>

        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>My Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default About;
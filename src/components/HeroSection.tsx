import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PersonalInfo } from '../data/resumeData';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  onSectionChange: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo, onSectionChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Typing animation effect
  const [displayText, setDisplayText] = React.useState('');
  const [showCursor, setShowCursor] = React.useState(true);
  const fullText = personalInfo.title;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      onSectionChange('about');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-300 via-dark-200 to-dark-300"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">
                {personalInfo.firstName} {personalInfo.lastName}
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <span>{displayText}</span>
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-1 h-8 bg-blue-400 ml-1"
                />
              )}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400 mb-8"
            >
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAbout();
                }}
                className="glow-on-hover magnetic-hover px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <span>Get In Touch</span>
                <Mail size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Kalash_Aggarwal_Resume.pdf"
                className="px-8 py-4 border-2 border-white/20 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              {personalInfo.github && (
                <motion.a
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              )}
              {personalInfo.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              )}
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Profile image/illustration */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main profile circle */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 40px rgba(59, 130, 246, 0.3)",
                    "0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              >
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-700/40 to-purple-700/40 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gradient">
                      {personalInfo.firstName[0]}{personalInfo.lastName[0]}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="p-3 rounded-full glass border border-white/20 hover:bg-white/10 transition-all duration-300 group"
        >
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Heart, Code, Coffee, Lightbulb, Target } from 'lucide-react';

interface AboutSectionProps {
  about: {
    bio: string;
    highlights: string[];
    interests: string[];
  };
  onSectionChange: (section: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ about, onSectionChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlights = [
    { icon: Code, title: "Full Stack Development", description: about.highlights[0] },
    { icon: Target, title: "Problem Solving", description: about.highlights[1] },
    { icon: User, title: "Team Leadership", description: about.highlights[2] },
    { icon: Lightbulb, title: "Continuous Learning", description: about.highlights[3] },
  ];

  const interests = [
    { icon: Coffee, title: "Open Source", description: about.interests[0] },
    { icon: Heart, title: "AI/ML Integration", description: about.interests[1] },
    { icon: Code, title: "Cloud Architecture", description: about.interests[2] },
    { icon: Target, title: "Software Development", description: about.interests[3] },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-br from-dark-200 to-dark-300 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20">
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Get to know me{' '}
            <span className="text-gradient">better</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate developer who loves creating amazing digital experiences and solving complex problems through code.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-dark rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {about.bio}
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating solutions that make a real difference.
              </p>
            </div>

            {/* Fun facts */}
            <motion.div
              variants={cardVariants}
              className="glass-dark rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-blue-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-purple-400 mb-1">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-green-400 mb-1">5+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Coffee Supply</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights and Interests */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Key Highlights</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-dark rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                          <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Interests & Passions</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      className="glass rounded-lg p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center group"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{interest.title}</h4>
                      <p className="text-xs text-gray-400">{interest.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                onSectionChange('contact');
              }
            }}
            className="glow-on-hover magnetic-hover px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

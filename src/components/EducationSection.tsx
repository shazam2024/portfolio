import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { Education } from '../data/resumeData';

interface EducationSectionProps {
  education: Education[];
  onSectionChange: (section: string) => void;
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, onSectionChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-gradient-to-br from-dark-200 to-dark-300 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium border border-pink-500/20">
              Education
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            My academic{' '}
            <span className="text-gradient">background</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My educational journey has provided me with a strong foundation in computer science and software engineering principles.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 md:left-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-4 border-dark-300 z-10 md:left-1/2 md:transform md:-translate-x-1/2"
                ></motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-8 h-8 text-pink-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                          <h4 className="text-lg text-pink-400 mb-2">{edu.field}</h4>
                          <div className="text-lg font-semibold text-gray-300">{edu.institution}</div>
                        </div>
                      </div>
                    </div>

                    {/* Date and Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div className="flex items-center space-x-2 text-gray-400 mb-2 sm:mb-0">
                        <Calendar size={14} />
                        <span>{edu.startDate} - {edu.endDate}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin size={14} />
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    {/* GPA and Honors */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {edu.gpa && (
                        <div className="glass rounded-lg p-4 border border-white/10">
                          <div className="text-sm text-gray-400 mb-1">GPA</div>
                          <div className="text-lg font-semibold text-white">{edu.gpa}</div>
                        </div>
                      )}
                      {edu.honors && edu.honors.length > 0 && (
                        <div className="glass rounded-lg p-4 border border-white/10">
                          <div className="text-sm text-gray-400 mb-2">Honors</div>
                          <div className="flex flex-wrap gap-1">
                            {edu.honors.map((honor, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 rounded-full border border-pink-500/30"
                              >
                                {honor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Relevant Coursework */}
                    {edu.relevantCoursework && (
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                          <BookOpen size={14} className="mr-2" />
                          Relevant Coursework
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.relevantCoursework.map((course, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0"></div>
                              <span className="text-sm text-gray-300">{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Education Highlights */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Award,
              title: "Academic Excellence",
              description: "Consistent high performance with multiple honors and awards"
            },
            {
              icon: BookOpen,
              title: "Continuous Learning",
              description: "Always staying updated with latest technologies and methodologies"
            },
            {
              icon: GraduationCap,
              title: "Strong Foundation",
              description: "Solid theoretical background supporting practical applications"
            }
          ].map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark rounded-xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-400">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
            className="glow-on-hover magnetic-hover px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

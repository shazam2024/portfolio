import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code2, Database, Cloud, Wrench, Star, Award, LucideIcon } from 'lucide-react';
import { Skill } from '../data/resumeData';

interface SkillsSectionProps {
  skills: Skill[];
  onSectionChange: (section: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onSectionChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const skillCategoryIcons: { [key: string]: LucideIcon } = {
    'Frontend': Code2,
    'Backend': Database,
    'Database': Database,
    'Cloud & DevOps': Cloud,
    'Tools & Others': Wrench,
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return 'from-green-500 to-emerald-500';
    if (proficiency >= 80) return 'from-blue-500 to-cyan-500';
    if (proficiency >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-purple-500 to-pink-500';
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-br from-dark-300 to-dark-200 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
              Technical Skills
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Technologies I{' '}
            <span className="text-gradient">work with</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I continuously update my skills to stay current with the latest technologies and industry best practices.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillCategory, categoryIndex) => {
            const Icon = skillCategoryIcons[skillCategory.category] || Code2;

            return (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={12}
                            className={`${
                              star <= (skillCategory.proficiency || 0) / 20
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        {getProficiencyLabel(skillCategory.proficiency || 0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative group"
                    >
                      <div className="glass rounded-lg p-3 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 text-center">
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill}
                        </span>

                        {/* Hover tooltip */}
                        <AnimatePresence>
                          {hoveredSkill === skill && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg border border-gray-700 z-10"
                            >
                              {skill}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Overall Proficiency Bar */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Overall Proficiency</span>
                    <span className="text-sm font-medium text-indigo-400">
                      {skillCategory.proficiency || 0}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skillCategory.proficiency || 0}%` } : { width: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + 0.5, duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${getProficiencyColor(skillCategory.proficiency || 0)} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse-subtle"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Overview Cards */}
        <motion.div
          variants={itemVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Code2, title: "Languages", count: "5+", description: "Programming languages" },
            { icon: Database, title: "Databases", count: "3+", description: "Database technologies" },
            { icon: Cloud, title: "Cloud", count: "3+", description: "Cloud platforms" },
            { icon: Wrench, title: "Tools", count: "10+", description: "Development tools" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark rounded-xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.count}</div>
                <div className="text-sm font-medium text-gray-300 mb-1">{stat.title}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="glass-dark rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-gradient text-center">Additional Competencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Problem Solving", description: "Strong analytical and debugging skills" },
              { title: "Team Leadership", description: "Experience leading development teams" },
              { title: "Code Review", description: "Thorough code review and mentoring" },
              { title: "Agile/Scrum", description: "Experienced in agile development" },
              { title: "CI/CD", description: "Continuous integration and deployment" },
              { title: "Testing", description: "Unit, integration, and E2E testing" },
            ].map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{competency.title}</h4>
                  <p className="text-sm text-gray-400">{competency.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const educationSection = document.getElementById('education');
              if (educationSection) {
                educationSection.scrollIntoView({ behavior: 'smooth' });
                onSectionChange('education');
              }
            }}
            className="glow-on-hover magnetic-hover px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            View My Education
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { SocialLink } from '../data/resumeData';

interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return Github;
      case 'linkedin':
        return Linkedin;
      case 'email':
      case 'mail':
        return Mail;
      default:
        return ExternalLink;
    }
  };

  return (
    <footer className="bg-dark-200 border-t border-white/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-bold text-gradient mb-4">Kalash Aggarwal</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Full Stack Developer passionate about creating exceptional digital experiences and solving complex problems through innovative technology solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ArrowUp size={16} />
                <span>Back to top</span>
              </motion.button>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Education', href: '#education' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social links and contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-1"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => {
                  const Icon = getSocialIcon(social.platform);
                  return (
                    <motion.a
                      key={social.platform}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
              <div className="text-sm text-gray-400">
                <p>📧 kalashagg1234@gmail.com</p>
                <p>📱 +91 9205183067</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <span>© {currentYear} Kalash Aggarwal. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and lots of ☕</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="https://github.com/kalashaggarwal/portfolio" className="hover:text-white transition-colors flex items-center space-x-1">
                <Github size={14} />
                <span>Source</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

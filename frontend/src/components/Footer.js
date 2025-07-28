import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  const quickLinks = [
    { text: 'Однодневные туры', href: '#one-day' },
    { text: 'Многодневные туры', href: '#multi-day' },
    { text: 'О нас', href: '#about' },
    { text: 'Отзывы', href: '#testimonials' },
    { text: 'Контакты', href: '#contact' }
  ];

  const tours = [
    { text: 'Сулакский каньон', href: '#' },
    { text: 'Дербентский тур', href: '#' },
    { text: 'Гунибский тур', href: '#' },
    { text: 'Хунзахский тур', href: '#' },
    { text: 'Шамильский тур', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Дагестан
              </span>{' '}
              Туры
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Мы создаем незабываемые путешествия по самым красивым местам Дагестана. 
              Откройте для себя удивительную культуру и природу Кавказа вместе с нами.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800/50 hover:bg-teal-500/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Tours */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Популярные туры</h4>
            <ul className="space-y-2">
              {tours.map((tour, index) => (
                <li key={index}>
                  <a
                    href={tour.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    {tour.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-white font-medium">Телефон</p>
                <p className="text-gray-300 text-sm">+7 (928) 123-45-67</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-300 text-sm">info@dagestan-tours.ru</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-white font-medium">Адрес</p>
                <p className="text-gray-300 text-sm">г. Махачкала, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="border-t border-slate-800 py-6"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p variants={itemVariants} className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Дагестан Туры. Все права защищены.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Создано с</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>для путешественников</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Условия использования
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
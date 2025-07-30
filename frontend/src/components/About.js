import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, MapPin, Clock, Heart, Camera } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '500+', label: 'Довольных туристов', icon: Users },
    { number: '7', label: 'Лет опыта', icon: Clock },
    { number: '50+', label: 'Уникальных маршрутов', icon: MapPin },
    { number: '4.9', label: 'Средняя оценка', icon: Award },
  ];

  const features = [
    {
      icon: Heart,
      title: 'Авторские маршруты',
      description: 'Уникальные программы, разработанные нашими экспертами с глубоким знанием региона'
    },
    {
      icon: Users,
      title: 'Малые группы',
      description: 'Группы до 8 человек для комфортного и персонального подхода к каждому туристу'
    },
    {
      icon: Camera,
      title: 'Фотосессии',
      description: 'Профессиональная фотосъемка в самых красивых локациях включена в стоимость'
    },
    {
      icon: MapPin,
      title: 'Местные гиды',
      description: 'Опытные гиды-дагестанцы, знающие все тайны и легенды родного края'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about-section" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/9943065/pexels-photo-9943065.jpeg"
                  alt="Наша команда в горах Дагестана"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-sm">лет опыта</div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  О нас
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Мы — команда энтузиастов, влюбленных в красоту Дагестана. Наша миссия — показать 
                  вам настоящую душу этого удивительного края через призму местной культуры и природы.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  За 7 лет работы мы провели более 500 туристов по самым красивым и труднодоступным 
                  местам Дагестана. Наши гиды — местные жители, которые знают каждую тропу, каждую 
                  легенду и каждый секрет этих древних гор.
                </p>
              </div>

              {/* Stats */}
              <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 text-center"
                  >
                    <stat.icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div variants={containerVariants} className="mt-20">
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white text-center mb-12">
              Почему выбирают нас
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-3">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: 'Елена Смирнова',
      location: 'Москва',
      rating: 5,
      tour: 'Тур на 5 дней',
      text: 'Невероятное путешествие! Сулакский каньон просто захватывает дух. Гид Магомед рассказывал столько интересного об истории и культуре Дагестана. Обязательно вернемся!',
      image: 'https://images.unsplash.com/photo-1660038441167-71cf326d837d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxjYXVjYXN1cyUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NTM3MjMzMDV8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      name: 'Алексей Петров',
      location: 'Санкт-Петербург',
      rating: 5,
      tour: 'Сулакский каньон',
      text: 'Отличная организация однодневного тура! Все четко по времени, комфортабельный транспорт, потрясающие виды. Особенно понравилась прогулка на катере по каньону.',
      image: 'https://images.pexels.com/photos/33182389/pexels-photo-33182389.jpeg'
    },
    {
      id: 3,
      name: 'Мария Волкова',
      location: 'Краснодар',
      rating: 5,
      tour: 'Тур на 7 дней',
      text: 'Это было приключение всей жизни! Восхождение на Шалбуздаг, древние аулы, гостеприимство местных жителей - все это оставило незабываемые впечатления. Спасибо команде!',
      image: 'https://images.unsplash.com/photo-1697394921127-b17fbe0ca94f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxzdWxhayUyMGNhbnlvbnxlbnwwfHx8fDE3NTM3MjMyOTh8MA&ixlib=rb-4.1.0&q=85'
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
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Отзывы наших туристов
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Более 500 довольных путешественников уже открыли для себя красоту Дагестана вместе с нами
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/80"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-teal-400 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-teal-400 mb-4"></div>

                {/* Author Info */}
                <div>
                  <h4 className="text-white font-semibold mb-1">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm mb-1">{testimonial.location}</p>
                  <div className="inline-block bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-xs">
                    {testimonial.tour}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">4.9</span>
              </div>
              <span className="text-sm">средняя оценка</span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            
            <div className="text-sm">
              <span className="text-white font-semibold">500+</span> довольных туристов
            </div>
            
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            
            <div className="text-sm">
              <span className="text-white font-semibold">98%</span> рекомендуют друзьям
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
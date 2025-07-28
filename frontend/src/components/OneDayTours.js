import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, Users, Star } from 'lucide-react';

const OneDayTours = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tours = [
    {
      id: 1,
      name: 'Сулакский каньон',
      duration: '12 часов',
      price: '2,500 ₽',
      image: 'https://images.unsplash.com/photo-1617573543793-1b13d0a3f75c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxzdWxhayUyMGNhbnlvbnxlbnwwfHx8fDE3NTM3MjMyOTh8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Бархан Сарыкум', 'Прогулка на катере', 'Смотровая "Козья тропа"'],
      description: 'Самый живописный каньон Дагестана с бирюзовыми водами и головокружительными видами.',
      route: [
        'Бархан Сарыкум',
        'Экотуркомплекс "Главрыба"',
        'Прогулка на катере по каньону',
        'Зубутлинская смотровая площадка',
        'Смотровая «Козья тропа»',
        'Чиркейское водохранилище'
      ]
    },
    {
      id: 2,
      name: 'Дербентский',
      duration: '10 часов',
      price: '2,200 ₽',
      image: 'https://images.unsplash.com/photo-1705840929563-bf4b84280c7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxhbmNpZW50JTIwZm9ydHJlc3N8ZW58MHx8fHwxNTM3MjMzMTl8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Крепость Нарын-кала', 'Джума-мечеть', 'Экраноплан "Лунь"'],
      description: 'Прогулка по древнему городу с 5000-летней историей и уникальными архитектурными памятниками.',
      route: [
        'Прогулка по старым кварталам (магалам)',
        'Джума-мечеть',
        'Осмотр экраноплана «Лунь»',
        'Крепость Нарын-кала',
        'Посещение сувенирных лавок',
        'Прогулка по городу'
      ]
    },
    {
      id: 3,
      name: 'Гунибский',
      duration: '11 часов',
      price: '2,400 ₽',
      image: 'https://images.unsplash.com/photo-1721377199739-172355216c38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkYWdlc3RhbiUyMG1vdW50YWluc3xlbnwwfHx8fDE3NTM3MjMyOTB8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Гунибская крепость', 'Аймакинское ущелье', 'Горные виды'],
      description: 'Исторический маршрут с посещением места последнего сражения имама Шамиля.',
      route: [
        'Гунибская крепость',
        'Гимринская башня',
        'Смотровая площадка',
        'Аймакинское ущелье',
        'Прогулка по Верхнему Гунибу',
        'Ирганайское водохранилище'
      ]
    },
    {
      id: 4,
      name: 'Хунзахский',
      duration: '12 часов',
      price: '2,600 ₽',
      image: 'https://images.unsplash.com/photo-1721377043701-8053647f07f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxkYWdlc3RhbiUyMG1vdW50YWluc3xlbnwwfHx8fDE3NTM3MjMyOTB8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Водопад Тобот', 'Плато Матлас', 'Мочохское озеро'],
      description: 'Захватывающий маршрут с посещением высокогорных плато и водопадов.',
      route: [
        'Плато Матлас',
        'Водопад «Тобот»',
        'Мочохское озеро',
        'Гимринская башня',
        'Цолотлинский каньон',
        'Ирганайское водохранилище'
      ]
    },
    {
      id: 5,
      name: 'Шамильский',
      duration: '11 часов',
      price: '2,500 ₽',
      image: 'https://images.unsplash.com/photo-1660038440922-6a0f5bf2f6dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjYXVjYXN1cyUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NTM3MjMzMDV8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Карадахская теснина', 'Датунский храм', 'Смотровая "Язык тролля"'],
      description: 'Мистический маршрут с древними храмами и уникальными природными образованиями.',
      route: [
        'Гоцатлинское водохранилище',
        'Карадахская теснина',
        'Датунский Храм',
        'Старый Кахиб',
        'Смотровая площадка "Язык тролля"',
        'Древний аул Гоор'
      ]
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
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Однодневные туры
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Идеальный способ познакомиться с красотами Дагестана за один день
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-teal-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tour.price}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{tour.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {tour.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Основные точки маршрута:</h4>
                  <ul className="space-y-1">
                    {tour.route.slice(0, 3).map((point, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-teal-400 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                    {tour.route.length > 3 && (
                      <li className="text-gray-500 text-sm">
                        +{tour.route.length - 3} других локаций
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">4.8</span>
                  </div>
                  <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                    Забронировать
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <button className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-teal-500/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-slate-800">
            Посмотреть все туры
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OneDayTours;
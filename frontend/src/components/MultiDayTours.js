import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Star, Users, Mountain } from 'lucide-react';

const MultiDayTours = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tours = [
    {
      id: 1,
      name: 'Большое путешествие',
      duration: '4 дня / 3 ночи',
      price: '12,000 ₽',
      image: 'https://images.unsplash.com/photo-1486570318579-054c95b01160?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpbGxhZ2V8ZW58MHx8fHwxNzUzNzIzMzEzfDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Сулакский каньон', 'Хунзахский район', 'Шамильский район', 'Гунибский район'],
      description: 'Комплексный маршрут по самым красивым местам Дагестана с проживанием в горах.',
      program: [
        { day: 1, title: 'Сулакский каньон', activities: ['Бархан Сарыкум', 'Прогулка на катере', 'Смотровые площадки'] },
        { day: 2, title: 'Хунзахский район', activities: ['Водопад Тобот', 'Плато Матлас', 'Мочохское озеро'] },
        { day: 3, title: 'Шамильский район', activities: ['Карадахская теснина', 'Датунский храм', 'Смотровая "Язык тролля"'] },
        { day: 4, title: 'Гунибский район', activities: ['Аул Гуниб', 'Гамсутль', 'Салтинский водопад'] }
      ]
    },
    {
      id: 2,
      name: 'Горы и история',
      duration: '5 дней / 4 ночи',
      price: '15,500 ₽',
      image: 'https://images.unsplash.com/photo-1729010733988-637a20cc5e37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMHZpbGxhZ2V8ZW58MHx8fHwxNzUzNzIzMzEzfDA&ixlib=rb-4.1.0&q=85',
      highlights: ['Все природные красоты', 'Древний Дербент', 'Горные аулы', 'Исторические памятники'],
      description: 'Расширенный маршрут с посещением древнего Дербента и горных районов.',
      program: [
        { day: 1, title: 'Сулакский каньон', activities: ['Бархан Сарыкум', 'Прогулка на катере', 'Горные виды'] },
        { day: 2, title: 'Хунзахский район', activities: ['Водопад Тобот', 'Плато Матлас', 'Ханские водопады'] },
        { day: 3, title: 'Шамильский район', activities: ['Карадахская теснина', 'Аул Гоор', 'Башни XVI века'] },
        { day: 4, title: 'Гунибский район', activities: ['Гунибская ГЭС', 'Чохские террасы', 'Гамсутль'] },
        { day: 5, title: 'Дербент', activities: ['Крепость Нарын-кала', 'Джума-мечеть', 'Экраноплан "Лунь"'] }
      ]
    },
    {
      id: 3,
      name: 'Полное погружение',
      duration: '7 дней / 6 ночей',
      price: '22,000 ₽',
      image: 'https://images.pexels.com/photos/9943048/pexels-photo-9943048.jpeg',
      highlights: ['Все достопримечательности', 'Кубачи', 'Восхождение на Шалбуздаг', 'Мастер-классы'],
      description: 'Полный тур с посещением всех главных достопримечательностей и восхождением на священную гору.',
      program: [
        { day: 1, title: 'Сулакский каньон', activities: ['Бархан Сарыкум', 'Катерная прогулка', 'Водохранилища'] },
        { day: 2, title: 'Хунзахский район', activities: ['Водопад Тобот', 'Плато Матлас', 'Каменная чаша'] },
        { day: 3, title: 'Шамильский район', activities: ['Карадахская теснина', 'Старый Кахиб', 'Аул Гоор'] },
        { day: 4, title: 'Гунибский район', activities: ['Гуниб', 'Гамсутль', 'Салтинский водопад'] },
        { day: 5, title: 'Дербент', activities: ['Нарын-кала', 'Джума-мечеть', 'Старые магалы'] },
        { day: 6, title: 'Кубачи', activities: ['Село мастеров', 'Мастер-класс', 'Кала-корейш'] },
        { day: 7, title: 'Шалбуздаг', activities: ['Восхождение на священную гору', 'Возвращение'] }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="multi-day-tours-section" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Многодневные туры
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-2xl mx-auto">
            Глубокое погружение в культуру и природу Дагестана с комфортным размещением
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="space-y-12"
        >
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-teal-500/90 text-white px-4 py-2 rounded-full font-bold text-lg">
                    {tour.price}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mountain className="w-5 h-5 text-teal-400" />
                    <span className="text-teal-400 font-medium">{tour.duration}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{tour.name}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {tour.description}
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-teal-400" />
                    Программа тура
                  </h4>
                  <div className="space-y-3">
                    {tour.program.map((day) => (
                      <div key={day.day} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-white font-medium mb-1">{day.title}</h5>
                          <div className="flex flex-wrap gap-2">
                            {day.activities.map((activity, idx) => (
                              <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-full">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-medium">4.9</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">Группа до 8 человек</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Забронировать тур
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MultiDayTours;
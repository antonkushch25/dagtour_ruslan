import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, Calendar, Users, MapPin, Check } from 'lucide-react';

const BookingForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tour: '',
    date: '',
    people: '1',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const tours = [
    { value: 'sulak', label: 'Сулакский каньон (1 день)' },
    { value: 'derbent', label: 'Дербентский тур (1 день)' },
    { value: 'gunib', label: 'Гунибский тур (1 день)' },
    { value: 'khunzakh', label: 'Хунзахский тур (1 день)' },
    { value: 'shamil', label: 'Шамильский тур (1 день)' },
    { value: 'tour-4', label: 'Большое путешествие (4 дня)' },
    { value: 'tour-5', label: 'Горы и история (5 дней)' },
    { value: 'tour-7', label: 'Полное погружение (7 дней)' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        tour: '',
        date: '',
        people: '1',
        message: ''
      });
    }, 3000);
  };

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
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Забронировать тур
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 30 минут для уточнения деталей
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Ваше имя *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                          placeholder="Иван Петров"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-white font-medium mb-2">
                          Телефон *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                        placeholder="ivan@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="tour" className="block text-white font-medium mb-2">
                        Выберите тур *
                      </label>
                      <select
                        id="tour"
                        name="tour"
                        value={formData.tour}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                      >
                        <option value="">Выберите тур</option>
                        {tours.map((tour) => (
                          <option key={tour.value} value={tour.value}>
                            {tour.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-white font-medium mb-2">
                          Предпочитаемая дата
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="people" className="block text-white font-medium mb-2">
                          Количество человек
                        </label>
                        <select
                          id="people"
                          name="people"
                          value={formData.people}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'человек' : num < 5 ? 'человека' : 'человек'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Дополнительные пожелания
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-none"
                        placeholder="Расскажите о ваших предпочтениях, особых требованиях или вопросах..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Отправить заявку
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Заявка отправлена!</h3>
                    <p className="text-gray-300">
                      Спасибо за ваш интерес к нашим турам. Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Телефон</h4>
                      <p className="text-gray-300">+7 (928) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-300">info@dagestan-tours.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Адрес</h4>
                      <p className="text-gray-300">г. Махачкала, ул. Примерная, 123</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Почему стоит выбрать нас?</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Индивидуальный подход к каждому клиенту</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Опытные местные гиды</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Комфортабельный транспорт</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Безопасность и страховка</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Гарантия лучших цен</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
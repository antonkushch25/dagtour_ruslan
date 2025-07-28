import React from 'react';
import Hero from './Hero';
import OneDayTours from './OneDayTours';
import MultiDayTours from './MultiDayTours';
import About from './About';
import Testimonials from './Testimonials';
import BookingForm from './BookingForm';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <OneDayTours />
      <MultiDayTours />
      <About />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default HomePage;
'use client';

import Header from './components/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Solutions from './components/sections/Solutions';
import Testimonials from './components/sections/Testimonials';
import DownloadApp from './components/sections/DownloadApp';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </div>
  );
}
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Heeader from '../components/Header';
import Hero from '../components/Hero';
import BestCarousel from '../components/BestCarousel';
import Phrase from '../components/Phrase';
import Products from '../components/Products';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-white flex dark:bg-black flex-col">
      <Heeader />

      <Hero />
      <BestCarousel />
      <Phrase />
      <Products />
      <Footer />
      {/* <section className="max-w-screen-md m-auto h-full">
        <article className="">
          <a href="https://avilatek.dev" target="_blank" rel="noreferrer">
            <Image
              className="w-96 h-auto text-center mx-auto"
              alt="Avila Tek Logo"
              src={logo}
            />
          </a>
          <h1 className="text-2xl text-center text-gray-700 dark:text-gray-100">
            Next.js Started template HOLA
          </h1>
          <p className="text-center text-white text-lg mt-2">
            <a
              href="https://github.com/Avila-Tek/next-template"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </article>
      </section> */}
    </div>
  );
}

export default HomePage;

import React from 'react';
import Image from 'next/image';
import Bebidas from '../public/hero.png';

function Hero() {
  return (
    <section className="h-[1000px] w-full relative	">
      <figure className="w-full">
        <Image alt="Hero" src={Bebidas} width="1920px" height="1000px" />
      </figure>

      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="h-[100%] m-4  mb-7">
          <button
            type="button"
            aria-label="carousel item"
            className=" rounded-md rounded-xl h-[25px] w-[25px] bg-[#D77674]"
          />
        </div>
        <div className="h-[100%] m-4 mb-7">
          {' '}
          <button
            type="button"
            aria-label="carousel item"
            className="rounded-xl h-[25px] w-[25px] bg-[#95353A]"
          />
        </div>
        <div className="h-[100%] m-4  mb-7">
          {' '}
          <button
            type="button"
            aria-label="carousel item"
            className="rounded-xl h-[25px] w-[25px] bg-[#D77674]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React, { useState } from 'react';
import Image from 'next/image';
import BCarousel from './BCarousel';
import Api from '../context/api/api.json';
import ArrowRight from '../public/arrow_right.png';
import ArrowLeft from '../public/arrow_left.png';

function BestCarousel() {
  const [active, setActive] = useState(1);

  const handleActive = (indx, inputEl) => {
    document.querySelectorAll('.b-active').forEach((e) => {
      e.classList.remove('b-active');
    });
    inputEl.current.classList.add('b-active');
    setActive(indx);
  };

  return (
    <section className="h-[1000px] w-full relative	">
      <h1 className="text-[#7B7B7B] text-6xl text-center m-20 flex flex-col items-center">
        BEST SELLER
        <div className="mt-7 bg-[#7B7B7B] w-[110px] h-[5px]" />
      </h1>

      <div className="mt-[8em] flex justify-center gap-[5em] b-wrapper">
        {Api.bebidas.slice(0, 3).map((bebida, i) => (
          <BCarousel
            item={bebida}
            index={i}
            active={active}
            handleActive={handleActive}
            key={i}
          />
        ))}

        <div className="flex w-full absolute h-[50%] justify-between pl-[119px] pr-[119px]">
          {' '}
          <button type="button">
            <Image
              alt="arrow left"
              src={ArrowLeft}
              width="69px"
              height="69px"
            />
          </button>
          <button type="button">
            <Image
              alt="arrow right"
              src={ArrowRight}
              width="69px"
              height="69px"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BestCarousel;

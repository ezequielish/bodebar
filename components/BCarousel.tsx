/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import Image from 'next/image';

function BCarousel({ item, active, index, handleActive }) {
  const inputEl = useRef(null);

  const handleItemActive = (indx) => {
    handleActive(indx, inputEl);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={inputEl}
      onClick={() => handleItemActive(index)}
      className={`z-10 flex flex-col items-center w-[400px] h-[450px] p-[30px] justify-between ${index === active && 'b-active'
        } `}
    >
      <Image alt="Hero" src={item.imgUrl} width="400px" height="450px" />
      {active === index && (
        <p className="flex items-center p-[17px] justify-center uppercase bg-[#333333BF] w-[390px] h-[115px] text-[#FFFFFF] text-[32px] b-p">
          {item.nombre}
        </p>
      )}
    </div>
  );
}

export default BCarousel;

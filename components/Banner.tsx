import React from 'react';
import Image from 'next/image';

function Banner({ img, title }) {
  return (
    <div className="h-[720px] flex justify-center items-center">
      <figure className="h-[720px] absolute w-[100%] ">
        <Image
          alt="productos"
          src={img}
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </figure>
      <div className="banner-gradient-products" />
      <h1 className="z-10 text-[64px] text-[#FFFFFF] ">{title}</h1>
    </div>
  );
}

export default Banner;

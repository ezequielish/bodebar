import React from 'react';
import Api from '../context/api/api.json';
import ProducList from './ProducList';

function Products() {
  return (
    <section className="h-[1300px] p-[45px] mb-[25px]">
      <h1 className="text-[#7B7B7B] text-6xl text-center m-20 flex flex-col items-center">
        LICORES
        <div className="mt-7 bg-[#7B7B7B] w-[110px] h-[5px]" />
      </h1>

      <ul className="grid justify-items-center grid-cols-4 gap-y-[115px]">
        {Api.bebidas.slice(0, 8).map((bebida, i) => (
          <ProducList bebida={bebida} key={i} />
        ))}
      </ul>
    </section>
  );
}

export default Products;

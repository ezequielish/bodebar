import React, { useState } from 'react';
import Heeader from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Api from '../context/api/api.json';
import ProducList from '../components/ProducList';
import ProductosImg from '../public/productos.png';

function Products() {
  const [bebidas, setBebidas] = useState(Api.bebidas);

  const handleClickCategory = (indx) => {
    const elementsLi = document.querySelectorAll(
      '.li-category'
    ) as unknown as NodeListOf<HTMLElement> | null;
    const elementLi = elementsLi[indx];
    if (elementLi.className.split(' ').includes('active')) {
      return setBebidas(Api.bebidas);
    }
    elementsLi.forEach((e) => {
      e.classList.remove('active');
    });
    elementLi.classList.add('active');

    const bebidasCategory = Api.bebidas.filter(
      (e) => e.categoria.id === parseInt(elementLi.dataset.category)
    );

    setBebidas(bebidasCategory);
  };

  return (
    <div className="min-h-screen w-screen bg-white flex dark:bg-black flex-col">
      <Heeader />
      <Banner img={ProductosImg} title="PRODUCTOS" />

      <div className="flex">
        <div className="w-[420px] bg-[#333333] pt-[87px] flex flex-col items-center pl-[25px] pr-[25px]">
          <p className="p-2 text-[20px] text-[#FFFFFF] font-bold mb-7 w-[60%]">
            CATEGORIA
          </p>
          <ul className="w-[60%] pb-[30px] border-b-2 border-[#4A4B53]">
            {Api.categorias.map((categoria, i) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                onClick={() => handleClickCategory(i)}
                className="p-2 text-[18px] text-[#FFFFFF] li-category"
                key={i}
                data-category={categoria.id}
              >
                {categoria.nombre}
              </li>
            ))}
          </ul>
          <div className=" w-[60%] border-b-2 border-[#4A4B53] pb-[60px]">
            <p className="p-2 mt-7 text-[20px] text-[#FFFFFF] font-bold mb-7">
              PRECIO
            </p>
            <div className="flex">
              <span className="text-[#EAEAEA] text-[28px] mr-2">$</span>
              <input
                type="number"
                className="w-16 text-[#EAEAEA] input-price bg-transparent"
              />{' '}
              <span className="text-[#EAEAEA] text-[28px] ml-2 mr-2">-</span>{' '}
              <input
                type="number"
                className="w-16 text-[#EAEAEA] input-price bg-transparent"
              />
            </div>
          </div>

          <div className=" w-[60%]">
            <p className="p-2 mt-7 text-[20px] text-[#FFFFFF] font-bold mb-7">
              OFERTAS
            </p>
          </div>
        </div>
        <ul className="p-[45px] mb-[85px] grid justify-items-center grid-cols-3 gap-y-[115px] w-full">
          {bebidas.slice(0, 9).map((bebida, i) => (
            <ProducList bebida={bebida} key={i} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Products;

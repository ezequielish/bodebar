/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Heeader from '../../components/Header';
// import Footer from '../components/Footer';
import Api from '../../context/api/api.json';
import Banner from '../../components/Banner';
import ProductosImg from '../../public/productos.png';
import ProducList from '../../components/ProducList';

import Footer from '../../components/Footer';

function Producto() {
  const [nombre, setNombre] = useState('');
  const [bebida, setBebida] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const router = useRouter();
  useEffect(() => {
    if (!bebidas.length) {
      setBebidas(
        Api.bebidas.sort(function () {
          return Math.random() - 0.5;
        })
      );
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (router.query.hasOwnProperty('nombre')) {
      const path = router.query.nombre.replace(/-/g, ' ');

      setNombre(path.split('_')[0]);

      const _bebida = Api.bebidas.filter(
        (b) => b.id === parseInt(path.split('_')[1])
      );

      setBebida(_bebida);
    }
  }, [router]);

  const handleMenuProduct = (ev) => {
    document.querySelectorAll('.menu-product li').forEach((e) => {
      e.classList.remove('active-menu-product');
    });

    document.querySelectorAll('.items-product div').forEach((e) => {
      e.classList.add('hidden');
    });

    document
      .querySelector(`#menu-item-${ev.target.dataset.item}`)
      .classList.add('active-menu-product');

    console.log({
      dd: document.querySelector(`#text-item-${ev.target.dataset.item}`),
    });

    document
      .querySelector(`#text-item-${ev.target.dataset.item}`)
      .classList.remove('hidden');
  };
  
  return (
    <div className="min-h-screen w-screen bg-white flex dark:bg-black flex-col">
      <Heeader />
      <Banner img={ProductosImg} title="PRODUCTO" />
      <section className="p-[10em] pl-[18em] pr-[18em]">
        <div className="flex">
          <p className="uppercase text-[20px] text-[#7B7B7B]">
            <Link href="/">INICIO /</Link>
          </p>
          <p className="uppercase text-[20px] ml-2 text-[#7B7B7B]">
            <Link
              href={{ pathname: `${router.pathname.replace('/[nombre]', '')}` }}
            >
              <a>
                {router.pathname.replace('[nombre]', '').replace(/\//g, '')}
                {'  /'}
              </a>
            </Link>
          </p>
          <p className="uppercase text-[20px] ml-2 active">{nombre}</p>
        </div>
        <div className="p-[45px] flex">
          <div>
            <figure className="w-[500px] h-[450px]">
              {bebida.length > 0 && (
                <Image
                  alt={`${bebida[0].nombre}`}
                  src={bebida[0].imgUrl}
                  width="0"
                  height="0"
                  sizes="100%"
                  objectFit="scale-down"
                />
              )}
            </figure>
            <div className="mt-[115px] flex">
              {bebida.length > 0 &&
                new Array(5).fill(bebida[0].imgUrl).map((img) => (
                  <div className="border-2 border-[#E5E5E5] shadow-md">
                    <Image
                      alt="bebida"
                      src={img}
                      width="100px"
                      height="100px"
                      objectFit="scale-down"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="p-[65px] ml-[60px]">
            {' '}
            {bebida.length > 0 && (
              <div>
                <h2 className="uppercase text-[52px] text-[#333333]">
                  {bebida[0].nombre}
                </h2>
                <p className="text-[24px] uppercase mt-4 font-bold">
                  {bebida[0].origen} | {bebida[0].medida}.
                </p>

                <div className="flex items-center">
                  <p className="text-[35px] text-[#643736] uppercase mt-4 font-bold">
                    ${bebida[0].precio}
                  </p>
                  <p className="text-[25px] ml-4 line-through text-[grey] uppercase mt-4 font-bold">
                    ${bebida[0].precio_original}
                  </p>
                </div>
                <div className="mt-[65px]  w-[170px] flex">
                  <button
                    type="button"
                    className="w-[120px] border-2 border-[#E5E5E5]"
                    onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    defaultValue={cantidad}
                    value={cantidad}
                    className="w-[60px] border-transparent border-t-2 border-t-[#E5E5E5] border-b-2 border-b-[#E5E5E5] text-center"
                  />
                  <button
                    type="button"
                    className="w-[120px] border-2 border-[#E5E5E5]"
                    onClick={() => setCantidad(cantidad + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="w-[220px] h-[50px] mt-[80px] text-[#E5E5E5] font-bold bg-[#643736]"
                >
                  AGREGAR
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-[10em] ">
          <ul className="flex text-[20px] text-[#7B7B7B]  border-b-2 border-b-[#7B7B7B] menu-product">
            <li
              className="center w-[33%] border-b-1 border-b-[#7B7B7B] active-menu-product text-center"
              id="menu-item-1"
            >
              <button type="button" data-item="1" onClick={handleMenuProduct}>
                DESCRIPCIÓN
              </button>
            </li>
            <li
              className="center w-[33%] border-b-1 border-b-[#7B7B7B] text-center"
              id="menu-item-2"
            >
              <button type="button" data-item="2" onClick={handleMenuProduct}>
                FICHA TECNICA
              </button>
            </li>
            <li
              className="center w-[33%] border-b-1 border-b-[#7B7B7B] text-center"
              id="menu-item-3"
            >
              <button type="button" data-item="3" onClick={handleMenuProduct}>
                COMENTARIOS
              </button>
            </li>
          </ul>
          <div className="mt-[45px] items-product">
            <div id="text-item-1">
              <p>
                {' '}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                expedita consectetur veritatis iure quibusdam, aliquid tenetur
                officia amet mollitia. Nobis cupiditate perferendis expedita
                odio illo ut dignissimos ipsa. Voluptatibus, dolor.1
              </p>
            </div>
            <div id="text-item-2" className="hidden">
              <p>
                {' '}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                expedita consectetur veritatis iure quibusdam, aliquid tenetur
                officia amet mollitia. Nobis cupiditate perferendis expedita
                odio illo ut dignissimos ipsa. Voluptatibus, dolor.2
              </p>
            </div>
            <div id="text-item-3" className="hidden">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                expedita consectetur veritatis iure quibusdam, aliquid tenetur
                officia amet mollitia. Nobis cupiditate perferendis expedita
                odio illo ut dignissimos ipsa. Voluptatibus, dolor.3
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[15em]">
          <p className="text-[#7B7B7B] text-[38px] text-center m-20 flex flex-col items-center">
            PRODUCTOS SIMILARES
          </p>
          <ul className="flex justify-between mt-[100px]">
            {bebidas.slice(0, 3).map((bebida, i) => (
              <ProducList bebida={bebida} key={i} />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Producto;

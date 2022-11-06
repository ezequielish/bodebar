import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartAdd from '../public/shopping_cart_add.png';

function ProducList({ bebida }) {
  function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
  }

  return (
    <li className="w-[320px] h-[384px]">
      <Link
        href={{
          pathname: '/productos/[nombre]',
          // id: 4,
          query: {
            nombre: `${bebida.nombre.replace(/ /g, '-')}_${bebida.id}`,
          },
        }}
      >
        <a>
          {' '}
          <Image
            alt={`${bebida.nombre}`}
            src={bebida.imgUrl}
            width="0"
            height="0"
            sizes="100%"
            objectFit="scale-down"
          />
          <p className="text-[24px] h-[75px] flex items-end nombre-producto">
            {capitalize(bebida.nombre)}
          </p>
          <p className="text-[16px] text-[#7B7B7B] flex justify-between">
            <span className="mt-3">${bebida.precio}</span>
            <button type="button">
              <Image
                alt="shopping cart icon"
                src={ShoppingCartAdd}
                width="21px"
                height="21px"
              />
            </button>
          </p>
        </a>
      </Link>
    </li>
  );
}

export default ProducList;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BodeBarLogo from '../public/BodeBar.png';
import ShoppingCart from '../public/shopping_cart.png';
import Logout from '../public/logout.png';
import Search from '../public/search.png';
import Api from '../context/api/api.json';

function Heeader() {
  return (
    <header className="h-[224px] w-full bg-[#FFFFFF]">
      <div className="h-[160px] flex w-full">
        <figure className="h-[96px] w-[246.15px]  mr-[307px] ml-[86px] mt-[32px] mb-[32px]">
          <Image
            alt="Bode Bar Logo"
            src={BodeBarLogo}
            width="246px"
            height="96px"
          />
        </figure>

        <div className="w-4/6 flex justify-between">
          <div className="input-wrapper">
            <input type="text" className="btn-search" />
            <button type="button" className="ml-[-25px]">
              <Image
                alt="search cart icon"
                src={Search}
                width="24px"
                height="24px"
              />
            </button>
          </div>
          <ul className="flex items-center mr-[66px] text-[#7B7B7B]">
            <li className="mt-[64px] mb-[64px] ">
              <Link href="/productos">PRODCUTOS</Link>
            </li>
            <li className="mt-[64px] mb-[64px] ml-[28px]">
              <Link href="/">MONEDA</Link>
            </li>
            <li className="mt-[64px] mb-[64px] ml-[28px]">
              <Link href="/" type="button">
                <Image
                  alt="shopping cart icon"
                  src={ShoppingCart}
                  width="18px"
                  height="18px"
                />
              </Link>
            </li>
            <li className="ml-[15px]">
              <Link href="/" type="button">
                <Image
                  alt="logout icon"
                  src={Logout}
                  width="18px"
                  height="18px"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <ul className="uppercase text-[#EAEAEA] bg-[#955251] flex items-center h-[64px] justify-around">
          {Api.menu.map((item, i) => (
            <li className="font-black" key={i}>
              <Link href={`/${item.path}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Heeader;

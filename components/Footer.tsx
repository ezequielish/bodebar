import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AvilaTek from '../public/avilatek.png';

function Footer() {
  return (
    <footer className="bg-[#333333] text-[#FFFFFF] h-[192px] ">
      <ul className="flex justify-around h-[60%] items-center">
        <li>
          <Link href="/">INICIO</Link>
        </li>
        <li>
          <Link href="productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link href="nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link href="terminos">TERMINOS Y CONDICIONES</Link>
        </li>
        <li>
          {' '}
          <Link href="preguntas">PREGUNTAS FRECUENTES</Link>
        </li>
        <li>
          {' '}
          <Link href="cuenta">CUENTA</Link>
        </li>
      </ul>
      <h6 className="text-[16px] text-center">
        Copyright © Bodebar. Todos los Derechos Reservados. Desarrollador por
        Avila Tek
        <Image alt="Hero" src={AvilaTek} width="27px" height="13px" />
      </h6>
    </footer>
  );
}

export default Footer;

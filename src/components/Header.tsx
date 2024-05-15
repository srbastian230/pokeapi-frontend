"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header () {
  return (
    <header className="header">
      <Link href='/'>
        <Image
          width={150}
          height={54}
          priority
          src='/pokedexLogo.png'
          alt='Logo Pokedex'
        />
      </Link>
    </header>

  )
} 
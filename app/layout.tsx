import React from "react";
import { PokemonProvider } from "@providers/PokemonContext/PokemonProvider";
import './index.css'

import type { Metadata } from "next";
import Header from "@/components/organism/Header";


export const metadata: Metadata = {
  title: "Pokedex",
  description: "Aplicacion para mostrar una implementación de un pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PokemonProvider>
          <Header />
          {children}
        </PokemonProvider>
      </body>
    </html>
  );
}

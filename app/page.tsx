import ListPokemonTemplate from "@/templates/ListPokemonTemplate";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <ListPokemonTemplate />
    </Suspense>
  );
}

import ListPokemonTemplate from "@/components/templates/ListPokemonTemplate";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <ListPokemonTemplate />
    </Suspense>
  );
}

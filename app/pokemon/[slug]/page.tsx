import { Metadata } from "next";
import PokemonDetailTemplate from '@/components/templates/PokemonDetailTemplate';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Pokemon ${slug}`,
  };
}

export default function PokemonPage ( props : Props) {
  return <PokemonDetailTemplate id={props.params.slug}/>
}
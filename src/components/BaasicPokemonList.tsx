import { useEffect, useState } from "react";
import type { IPokemonData } from "../types/pokemon.type";

export default function BaasicPokemonList() {
  const [data, setData] = useState<IPokemonData[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("https://tyradex.vercel.app/api/v1/pokemon");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setData(json);
      } catch (err) {
        console.error(err);
        if (mounted) setData([]);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Basic Pokemon List</h1>
      <ul>
        {data.map((pokemon) => (
          <li key={pokemon.id + "_list"}>
            {pokemon.name.fr} (#{pokemon.pokedex_id})
          </li>
        ))}
      </ul>
    </div>
  );
}

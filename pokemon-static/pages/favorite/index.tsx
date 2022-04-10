import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import NoFavorites from "../../components/ui/NoFavorites";
import localFavorites from "../../util/localFavorites";

const FavoritePage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemon} />
      )}
    </Layout>
  );
};

export default FavoritePage;

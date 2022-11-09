import { useEffect, useState } from 'react';
import { getPokemonImage } from '../../helpers/getPokemon';
import pokemon_logo from './img/pokemon_logo.png';

import styles from './Header.module.scss';

export const Header = () => {
  const [pokemonImageNav, setPokemonImageNav] = useState();
  const number = Math.floor(Math.random() * 1155);

  useEffect(() => {
    getPokemonImage(number).then((data) => {
      setPokemonImageNav(data.sprites.front_default);
    })
  }, [getPokemonImage]);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <img src={pokemon_logo} alt="pokemon_logo" className={styles.logo} />

          <div className={styles.pokemon_navbar}>
            <div className={styles.pokemon_container}>
              <img src={pokemonImageNav} alt="pokemon_navbar" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
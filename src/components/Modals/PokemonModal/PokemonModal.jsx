import { useEffect } from "react";
import { useState } from "react";
import { getPokemon, getPokemonImage } from "../../../helpers/getPokemon";
import styles from "./PokemonModal.module.scss";

export const PokemonModal = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        getPokemon().then((data) => {
            setPokemon(pokemon => { return [...pokemon, ...data.results] });
        });
    }, [getPokemon, setPokemon]);

    useEffect(() => {
        pokemon.map((pokemon) => {
            getPokemonImage(pokemon.name).then((data) => {
                setPokemonData([{ name: data.name }, ...pokemonData])
            })
        })
    }, [getPokemonImage, setPokemonData])

    console.log(pokemonData);

    return (
        <div className={styles.general_container}>
        </div>
    )
}

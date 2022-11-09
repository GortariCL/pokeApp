import { useCallback, useEffect } from "react";
import { useState } from "react";
import { getPokemon, getPokemonData } from "../../../helpers/getPokemon";
import styles from "./PokemonModal.module.scss";

export const PokemonModal = () => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);

    const loadPokemonArray = useCallback(() => {
        getPokemon().then((data) => {
            data.results.map(element => {
                setPokemon(pokemon => [...pokemon, element.name]);
            })
        });
    }, [getPokemon, setPokemon]);

    const loadPokemonDataArray = useCallback(() => {
        pokemon.map(element => {
            getPokemonData(element).then((data) => {
                setPokemonData(pokemon => [...pokemon, data]);
            });
        });
    }, [pokemon, getPokemonData, setPokemonData]);

    useEffect(() => {
        loadPokemonArray();
    }, [loadPokemonArray]);

    useEffect(() => {
        loadPokemonDataArray();
    }, [loadPokemonDataArray]);

    console.log(pokemonData);

    return (
        <div className={styles.modal_container}>
            <ul className={styles.row}>
                {pokemonData.map(element => {
                    const { name, id, sprites: { other: {dream_world: {front_default}} } } = element
                    return (
                        <li key={`${Math.round(Date.now() * Math.random())}`} className={styles.col}>
                            <div className={styles.container}>
                                <div className={styles.image_container}>
                                    <img src={front_default} alt={`Poke-${id}`} className={styles.image_crop} />
                                </div>
                                <div className={styles.name_container}>
                                    <h3>{name}</h3>
                                </div>
                                <div className={styles.type}>

                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

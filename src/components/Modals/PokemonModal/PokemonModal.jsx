import { useCallback, useEffect } from "react";
import { useState } from "react";
import { getPokemon, getPokemonData } from "../../../helpers/getPokemon";

import { Bug } from "../../TypeIcons/Bug/Bug";
import { Dark } from "../../TypeIcons/Dark/Dark";
import { Dragon } from "../../TypeIcons/Dragon/Dragon";
import { Electric } from "../../TypeIcons/Electric/Electric";
import { Fairy } from "../../TypeIcons/Fairy/Fairy";
import { Fighting } from "../../TypeIcons/Fighting/Fighting";
import { Fire } from "../../TypeIcons/Fire/Fire";
import { Flying } from "../../TypeIcons/Flying/Flying";
import { Ghost } from "../../TypeIcons/Ghost/Ghost";
import { Grass } from "../../TypeIcons/Grass/Grass";
import { Ground } from "../../TypeIcons/Ground/Ground";
import { Ice } from "../../TypeIcons/Ice/Ice";
import { Normal } from "../../TypeIcons/Normal/Normal";
import { Poison } from "../../TypeIcons/Poison/Poison";
import { Psychic } from "../../TypeIcons/Psychic/Psychic";
import { Rock } from "../../TypeIcons/Rock/Rock";
import { Steel } from "../../TypeIcons/Steel/Steel";
import { Water } from "../../TypeIcons/Water/Water";

import icon from "./img/icon.png";
import styles from "./PokemonModal.module.scss";

const iconsDictionary = [
    { type: "bug", component: <Bug /> },
    { type: "dark", component: <Dark /> },
    { type: "dragon", component: <Dragon /> },
    { type: "electric", component: <Electric /> },
    { type: "fairy", component: <Fairy /> },
    { type: "fighting", component: <Fighting /> },
    { type: "fire", component: <Fire /> },
    { type: "flying", component: <Flying /> },
    { type: "ghost", component: <Ghost /> },
    { type: "grass", component: <Grass /> },
    { type: "ground", component: <Ground /> },
    { type: "ice", component: <Ice /> },
    { type: "normal", component: <Normal /> },
    { type: "poison", component: <Poison /> },
    { type: "psychic", component: <Psychic /> },
    { type: "rock", component: <Rock /> },
    { type: "steel", component: <Steel /> },
    { type: "water", component: <Water /> }
];

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

    return (
        <div className={styles.modal_container}>
            <ul className={styles.row}>
                {pokemonData.map(element => {
                    const { name, id, sprites: { other: { "official-artwork": { front_default } } }, types } = element
                    return (
                        <li key={`${Math.round(Date.now() * Math.random())}`} className={styles.col}>
                            <div className={styles.container}>
                                <div className={styles.header_modal_container}>
                                    <img className={styles.modal_icon} src={icon} alt="icon" />
                                    <p className={styles.pokemon_id}>{`${id}`}</p>
                                </div>
                                <div className={styles.image_container}>
                                    <img src={front_default} alt={`Poke-${id}`} className={styles.image_crop} />
                                </div>
                                <div className={styles.name_container}>
                                    <h3 className={styles.pokemon_name}>{name}</h3>
                                </div>
                                <div className={styles.type}>
                                    {types.map(e => {
                                        return (
                                            <div key={`${Math.round(Date.now() * Math.random())}`} className={styles.pokemon_type}>
                                                {
                                                    iconsDictionary.map(icon => {
                                                        if (e.type.name === icon.type) {
                                                            return icon.component
                                                        }
                                                    })
                                                }
                                            </ div>
                                        )
                                    })}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

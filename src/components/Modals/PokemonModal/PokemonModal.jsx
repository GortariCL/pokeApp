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
    { type: "bug", component: <Bug />, spanish: "bicho" },
    { type: "dark", component: <Dark />, spanish: "siniestro" },
    { type: "dragon", component: <Dragon />, spanish: "dragón" },
    { type: "electric", component: <Electric />, spanish: "eléctrico" },
    { type: "fairy", component: <Fairy />, spanish: "hada" },
    { type: "fighting", component: <Fighting />, spanish: "lucha" },
    { type: "fire", component: <Fire />, spanish: "fuego" },
    { type: "flying", component: <Flying />, spanish: "volador" },
    { type: "ghost", component: <Ghost />, spanish: "fantasma" },
    { type: "grass", component: <Grass />, spanish: "planta" },
    { type: "ground", component: <Ground />, spanish: "tierra" },
    { type: "ice", component: <Ice />, spanish: "hielo" },
    { type: "normal", component: <Normal />, spanish: "normal" },
    { type: "poison", component: <Poison />, spanish: "veneno" },
    { type: "psychic", component: <Psychic />, spanish: "psíquico" },
    { type: "rock", component: <Rock />, spanish: "roca" },
    { type: "steel", component: <Steel />, spanish: "acero" },
    { type: "water", component: <Water />, spanish: "agua" }
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
                    const { name, id, sprites: { other: { "official-artwork": { front_default } } }, types, height, weight } = element
                    return (
                        <li key={`${Math.round(Date.now() * Math.random())}`} className={styles.col}>
                            <div className={styles.container}>
                                <div className={styles.header_modal_container}>
                                    <img className={styles.modal_icon} src={icon} alt="icon" />

                                    <div className={styles.type}>
                                        {types.map(e => {
                                            return (
                                                <div key={`${Math.round(Date.now() * Math.random())}`} className={styles.pokemon_type}>
                                                    {
                                                        iconsDictionary.map(icon => {
                                                            if (e.type.name === icon.type) {
                                                                return (
                                                                    <div key={`${Math.round(Date.now() * Math.random())}`} className={styles.tooltip}>
                                                                        {icon.component}
                                                                        <div className={styles.tooltiptext}><p className={styles.type_text}>{icon.spanish}</p></div>
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </ div>
                                            )
                                        })}
                                    </div>
                                    <p className={styles.pokemon_id}>{`ID: ${id}`}</p>
                                </div>
                                <div className={styles.image_container}>
                                    <img src={front_default} alt={`Poke-${id}`} className={styles.image_crop} />
                                </div>
                                <div className={styles.name_container}>
                                    <h3 className={styles.pokemon_name}>{name}</h3>
                                    <div className={styles.height_and_weight}>
                                        <p className={styles.height}>altura: {height / 10} mt</p>
                                        <p className={styles.weight}>peso: {weight / 10} kilos</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

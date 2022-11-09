import { useEffect } from "react";
import { useState } from "react"
import { ButtonMed } from "../components/Buttons/ButtonMed/ButtonMed";
import { PokemonModal } from "../components/Modals/PokemonModal/PokemonModal";
import { getPokemon } from "../helpers/getPokemon";

import styles from "./Home.module.scss";

export const Home = () => {

    return (
        <>
            <div className={styles.general_container}>
                <div className={styles.container_one}>
                    <div className={styles.button_container}>
                        <ButtonMed>Pokedex</ButtonMed>
                    </div>
                    <div className={styles.button_container}>
                        <ButtonMed>memodex</ButtonMed>
                    </div>
                    <div className={styles.button_container}>
                        <ButtonMed>tcg</ButtonMed>
                    </div>
                </div>

                <div className={styles.modal_container}>
                    <PokemonModal />
                </div>
            </div>
        </>
    )
}

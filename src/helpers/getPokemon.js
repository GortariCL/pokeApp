export const getPokemon = async (offset = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`,
        {
            method: 'GET',
        }
    )
    const json = await response.json();
    return json;
}

export const getPokemonImage = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        {
            method: 'GET',
        }
    )
    const json = await response.json();
    return json;
}
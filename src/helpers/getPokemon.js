export const getPokemon = async (limit = 20 , offset = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
        {
            method: 'GET',
        }
    )
    const json = await response.json();
    return json;
}

export const getPokemonData = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        {
            method: 'GET',
        }
    )
    const json = await response.json();
    return json;
}
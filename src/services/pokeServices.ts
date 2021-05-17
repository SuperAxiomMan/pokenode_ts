import fetch from "node-fetch";

class PokeServices {
    static getAllPokemon = async () => {
        try {
            const res = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=151"
            );
            const json = await res.json();
            console.log(json.results);
            return json;
        } catch (e) {
            console.log(e);
        }
    };
    static getSinglePokemon = async (pokemon: any) => {
        try {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            );
            const json = await res.json();
            return json;
        } catch (e) {
            console.log(e);
        }
    };

    static getDetailedPokemonList = async (limit: number) => {
        let resultFiltered = [];
        for (let i = 1; i < limit - 1; i++) {
            let resAPI = await PokeServices.getSinglePokemon(i);
            resultFiltered.push({
                id: resAPI.id,
                name: resAPI.name,
                sprite: resAPI.sprites["front_default"],
                artwork:resAPI.sprites["other"]["official-artwork"]["front_default"],
                types: resAPI.types
            });
        }

        return resultFiltered;
    };
}

export { PokeServices };

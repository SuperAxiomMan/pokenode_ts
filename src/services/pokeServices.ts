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
    static getSinglePokemon = async (pokemon = "1") => {
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
}

export { PokeServices };

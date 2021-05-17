import { Request, Response } from "express";
import { PokeServices } from "../services/pokeServices";

class PokeHandler {
    //=|Root Page Response/=>
    static root = (req: Request, res: Response) => {
        res.render("home");
    };
    //=|Simple List/=>
    static getSimpleList = async (req: Request, res: Response) => {
        try {
            const pokemons = await PokeServices.getAllPokemon();
            //console.log(pokemons.results[0]);
            res.render("home", { pokemons });
        } catch (e) {
            console.log(e);
        }
    };
    //=|Detailed List/=>
    static getDetailedList = async (req: Request, res: Response) => {
        try {
            let pokemons = await PokeServices.getDetailedPokemonList(20);
            //console.log(pokemons);
            res.render("home_v2", { pokemons });
        } catch (e) {
            console.log(e);
        }
    };
    //=|Pokemon Search/=>
    static search = (req: Request, res: Response) => {
        const search = req.body.pokemonName;

        res.redirect(`/${search}`);
    };
    //=|Not Found Page/=>
    static notFound = (req: Request, res: Response) => {
        res.render("not-found");
    };
    //=|Single Pokemon View/=>
    static pokemonDetail = async (req: Request, res: Response) => {
        try {
            const pokemon = await PokeServices.getSinglePokemon(
                req.params.pokemon
            );
            pokemon
                ? res.render("single-view", { pokemon })
                : res.redirect("not-found");
        } catch (e) {
            console.log(e);
        }
    };
}

export { PokeHandler };

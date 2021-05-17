import { Request, Response } from "express";
import { PokeServices } from "../services/pokeServices";

class PokeHandler {
    static pokeTest = (req: Request, res: Response) => {
      res.send("OK!")
    }
    static pokemonDetail = async (req: Request, res: Response) => {
        try {
            const pokemon = await PokeServices.getSinglePokemon(
                req.params.pokemon
            );
            pokemon
                ? res.render("viewPokemon", { pokemon })
                : res.redirect("notFound");
        } catch (e) {
            console.log(e);
        }
    };
    static notFound = (req: Request, res: Response) => {
        res.render("notFound");
    };
    static search = (req: Request, res: Response) => {
        const search = req.body.pokemonName;

        res.redirect(`/${search}`);
    };
    static homepage = async (req: Request, res: Response) => {
        try {
            const pokemons = await PokeServices.getAllPokemon();
            console.log(pokemons.results[0]);
            res.render("home", { pokemons });
        } catch (e) {
            console.log(e);
        }
    };
}

export { PokeHandler };

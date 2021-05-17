import { Router } from 'express';
import { PokeHandler } from './handlers/pokeHandler';

const pokeRouter = Router();

//=|Homepage/=>
pokeRouter.get("/", PokeHandler.pokeTest)

//=|Pokemon Search/=>
// pokeRouter.post("/search",PokeHandler.search);

//=|Not Found Page/=>
// pokeRouter.get("/notfound",PokeHandler.notFound);

//=|Single Pokemon View/=>
// pokeRouter.get("/:pokemon",PokeHandler.pokemonDetail);



export {pokeRouter}
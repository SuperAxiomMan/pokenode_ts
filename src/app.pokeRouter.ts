import { Router } from "express";
import { PokeHandler } from "./handlers/pokeHandler";

const pokeRouter = Router();

//=|Root Page/=>
pokeRouter.get("/", PokeHandler.root);

//=|Simple List/=>
pokeRouter.get("/list_v1", PokeHandler.getSimpleList);

//=|Detailed List/=>
pokeRouter.get("/list_v2", PokeHandler.getDetailedList);

//=|Pokemon Search/=>
pokeRouter.post("/search", PokeHandler.search);

//=|Not Found Page/=>
pokeRouter.get("/not-found", PokeHandler.notFound);

//=|Single Pokemon View/=>
pokeRouter.get("/:pokemon", PokeHandler.pokemonDetail);

export { pokeRouter };

//=|*Init*|=//
import { config } from "dotenv";
import express, { urlencoded } from "express";
import exphbs from "express-handlebars";
import { resolve } from "path";
import { pokeRouter } from "./app.pokeRouter";

config({ path: "variables.env" });

//=|*Env Variables*|=//
const PORT = process.env.PORT || 3001;

//=|*Input*|=//
const app = express();

//=|*Middlewares*|=//
//=|static folders/files/=>
app.use(express.static(resolve(process.cwd(), "/public")));

//=|Body Parser/=>
app.use(urlencoded({ extended: false }));

//=|Handlebars Config/=>
app.set("views", resolve(process.cwd(), "src", "views"));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");



//=|*Routes*|=//
app.use(pokeRouter);


//=|*Output*|=//
app.listen(PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`The server is running on : http://localhost:${PORT}`);
});
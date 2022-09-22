
import { Cachorro } from "./cachorro";
import { Cavalo } from "./cavalo";
import { Preguica } from "./preguica";

let cavalo = new Cavalo('Alasão', 17);
let cachorro = new Cachorro('Robson', 12);
let preguica = new Preguica('Jackson', 5);

cavalo.correr();
cavalo.som();
cachorro.correr();
cachorro.som();
preguica.correr();
preguica.som();
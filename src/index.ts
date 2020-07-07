import { skip } from "./utilities/array";
import { shuffle } from "./shuffle";

const args = skip(process.argv, 2);
const shuffled = shuffle(args);

console.log(shuffled);

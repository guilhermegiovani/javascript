// ./node_modules/zod/lib/index.mjs
import { z } from "zod"

const mySchema = z.string()

console.log(mySchema.parse("Guilherme"))

alert("Olá, Mundo!")
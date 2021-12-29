const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: "true",
    describe: "Es la base de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Lista la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Iteraciones de la tabla",
  })
  .check((argv, options) => {
    console.log("yargs", argv);
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;

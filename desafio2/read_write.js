const fs = require("fs");

const file = "package.json";

fs.readFile(file, "utf-8", (e, c) => {
  if (e) {
    console.log("No se pudo encontrar el archivo");
    return;
  }
  //const size = fs.statSync(file);
  const info = {
    contenidoString: c,
    contenidoObject: JSON.parse(c),
    size: c.length,
  };
  console.log(info);

  fs.writeFile("info.json", JSON.stringify(info), (error) => {
    if (e) {
      console.log("No puedo escribir info");
      return;
    }
  });
});

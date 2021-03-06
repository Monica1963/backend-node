const fs = require('fs');
const XLSX = require("xlsx");
const N2app = require=('../models/N2APP');

/**
 * Lee TODO el archivo 
 * 
 */

const readMyFile = () => {

        fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log('error: ', err);
        } else {
            console.log(data);
        }
        });

};

/**
 * Lee el archivo línea  por línea 
 * 
 */

const readbyline =() => {
    const readline = require("readline"), NOMBRE_ARCHIVO = "archivo.txt";

    let lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO)
    });

    lector.on("line", linea => {
     console.log("Tenemos una línea:", linea);
     }
    );
};

/**
 * Lee hoja de excel devolviendo un json
 * 
 */

const ExcelAJSON = () => {
    
      const excel = XLSX.readFile(
        // "C:\\Users\\MONICA\\Desktop\\datos.xlsx"
        './N2APP.xlsx', {N2app}
      );
      const nombreHoja = excel.SheetNames; // regresa un array
      let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[6]]);
    
      const jDatos = [];
      for (let i = 0; i < datos.length; i++) {
        const dato = datos[i];
        jDatos.push({
            ...dato,
        Fecha: new Date((dato.Fecha - (25567 + 2)) * 86400 * 1000),
        FechaDeCierre: new Date((dato.FechaDeCierre - (25567 + 2)) * 86400 * 1000)
        });
    }
    console.log(jDatos[0]);
};
    // ExcelAJSON();

    


module.exports = {readMyFile, readbyline, ExcelAJSON};      
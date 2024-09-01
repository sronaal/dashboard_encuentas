import app from "./app.js";




app.listen(80,(error) => {

    if(error) console.log(error)
    console.log("Servidor HTTP Activo")
})
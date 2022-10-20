//Importar libreria express
const express = require ("express")
//Llamar constante para ejecutar funciones de express
const app = express()
//definir el puerto que se va a escuchar
const port = 5000


//especificar las rutas y que funciones van a ejecutar esas rutas por ejemplo "get"
app.get('/api', (req, res) => {

    return res.status(200).json({message: "Bienvenido al Api :)"})

})

app.get("/api/jairo/division", (req,res) => {
    //?num1=10&&num2=5
    let result = parseInt(req.query.num1) / parseInt(req.query.num2)
    console.log(req.query)

    return res.status(201).json({result: result})
})


//Establecer a través de que puerto estará procesando o escuchando el servidor.
app.listen(port, () => console.log(`Servidor escuchando el puerto`, port))
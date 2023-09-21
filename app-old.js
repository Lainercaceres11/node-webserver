import http from "http"

const server = http.createServer((req, res)=>{

    // res.setHeader("Content-Disposition", "attachmen; filename=lista.csv")
    // //Cabecera 
    // res.writeHead(200, {"Content-Type" : "application/csv"})
    // res.write("id, nombre")

    res.write("Hola servidor")


    res.end()

})

server.listen(8080)

console.log("Escuchando en el puerto", 8080)
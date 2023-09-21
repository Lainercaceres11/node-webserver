import express from "express";
import hbs from 'hbs';
import dotenv from "dotenv"

import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

dotenv.config()
const app = express();

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Rutas con handlebars
app.get("/", (req, res) => {
  res.render("home", {
    name: "Lainer Cáceres",
    title: "Curso de Node"
  });
});

app.get("/generic", (req, res) => {
  res.render("home", {
    name: "Lainer Cáceres",
    title: "Curso de Node"
  });
});

app.get("/elements", (req, res) => {
  res.render("home", {
    name: "Lainer Cáceres",
    title: "Curso de Node"
  });
});

//Servir contenido estatico
app.use(express.static("public"));

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "public/generic.html");
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "public/elements.html");
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "public/404.html");
});

app.listen(process.env.PORT);

console.log("Corriendo en el puerto", 8080);

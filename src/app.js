import express from "express";
import routerApi from './routes/api.routes.js';

const app = express();

app.use(function (_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://conversor-dolar.web.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/api", routerApi);

app.get("/", (_req, res) => {
  res.send("Obtiene informacion de la cotizacion del dolar desde la API de dolarsi.com");
});

export default app

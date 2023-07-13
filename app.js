import 'dotenv/config'
import express, { json } from "express"
import { PdfHtmlExample } from "./app/services/createPdf.js"
import fs from "fs";

import { Pdf, HtmlResource, PageSize, Orientation } from "@dynamicpdf/api"

const app = express()
app.use(json())

app.get("/", (req, res) => {
    res.send({
        msg:"Hello World"
    })
})

app.post("/pdf", async (req, res) => {
    const filename = req.body.filename
    const data = req.body.data

    PdfHtmlExample.Run(filename, data)

    res.send({
        msg: "Feito com sucesso!"
    })
})

app.listen(3000, console.log("Running in http://localhost:3000"))
import fs from 'fs';
import {
  Pdf,
  PageSize,
  Orientation,
  HtmlResource
} from "@dynamicpdf/api"

export class PdfHtmlExample {
    static async Run(filename, object) {
    //    var savePath = `./app/public/${filename}.pdf`;
    //    var apiKey = process.env.APIKEY;
    //    var pdf = new Pdf();
    //    pdf.apiKey = apiKey;

    //     pdf.addHtml(`<html>hello ${object}</html>`, null, 
    //     PageSize.LETTER, Orientation.PORTRAIT, 1);

    //     var res = await pdf.process();
    //     if (res.isSuccessful) {
    //         var outStream = fs.createWriteStream(savePath);
    //         outStream.write(res.content);
    //         outStream.close();
    //     }
        console.log(object.value0)
    }
}
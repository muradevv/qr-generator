const express = require("express");
const qr = require("qr-image");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/generate", (req, res) => {
    const { type, input, ssid, password } = req.query;
    let qrText = "";

    if (type === "wifi") {
        qrText = `WIFI:S:${ssid};T:WPA;P:${password};;`;
    } else {
        qrText = input;
    }

    const qrCode = qr.image(qrText, { type: "png" });
    res.type("png");
    qrCode.pipe(res);
});

app.listen(port, () => {
    console.log(`🚀 Project started at http://localhost:${port}`);
});

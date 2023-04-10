const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

app.use(cors());

// analisar solicitações de tipo de conteúdo - application/json
app.use(express.json());

// analisar solicitações de tipo de conteúdo - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: "muyrapido-session",
        secret: "COOKIE_SECRET", // 
        httpOnly: true
    })
);

// rota simples
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// definir porta, esperar requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
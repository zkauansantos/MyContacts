const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("Hello Word!");
});

app.listen(3000, () => console.log("🔥 Server started at http://localhost:3000"));

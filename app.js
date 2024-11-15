const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const personaRoutes = require("./routes/personaRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/persona', personaRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started port ${PORT}`));

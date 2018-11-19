import express from 'express';
import bodyParser from 'body-parser';
import router from "../routes/route";

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


app.use(router);



const port=process.env.PORT || 3000;
app.listen(port, () => console.log(`sendIT server started,...on port ${port}`));

export default app;
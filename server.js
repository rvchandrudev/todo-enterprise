const express = require('express');
const app = express();
require('dotenv').config()
require('express-async-errors');
//swagger required packages
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');

const cors = require('cors');
const connectToDb = require('./db/connect');
const taskRouter = require('./routes/taskRouter')

const env = require('./config/config')

app.use(cors({
    origin: '*'
}))

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {explorer:true})
);
app.use(express.json())
app.use('/api/v1',taskRouter);

const start = () => {

    connectToDb(env).then(() => {
        console.log('Database connected successfully !!!')
        app.listen(env.app.port,() => console.log(`Server started successfully at ${env.app.port}!!!`))
    })
}

start()

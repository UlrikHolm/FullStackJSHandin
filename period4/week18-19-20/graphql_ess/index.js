import express from "express";
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema'
import cors from "cors";
require('dotenv').config()

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("GraphQL is amazing")
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(8080, () => console.log("Server Started, listening on Port 8080"))
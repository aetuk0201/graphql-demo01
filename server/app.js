
// import { schema } from "./schema/schema";
// import { express } from "express";
// import { graphqlHTTP } from 'express-graphql';

const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP; // destructuring equivalent const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,    
    graphiql: true,    
    pretty: true
}));

app.listen(4000, () => { //localhost:4000
    console.log('Listening for requests on port 4000');
});
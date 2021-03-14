import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import Database from '../component/Database/Database.component'

export const GraphQLRoute = express.Router()

GraphQLRoute.use('/', graphqlHTTP({
    schema: Database.schema,
    graphiql: true
}))

export default GraphQLRoute

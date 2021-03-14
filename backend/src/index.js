import express from 'express'
import { createDatabase } from './util/Database/Database'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import path from 'path'
import { makeExecutableSchema } from '@graphql-tools/schema'
import Datbase from './component/Database/Database.component'



createDatabase(true)


const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './schema')))
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolver')))

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        models: Datbase.models
    }
}))
app.listen(3001)

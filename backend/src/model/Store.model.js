import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql'
import { Model } from 'sequelize'
import { resolver } from 'graphql-sequelize'

export class Store extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                code: {
                    type: DataTypes.STRING,
                    unique: true
                }
            },
            {
                sequelize,
                modelName: 'store'
            }
        )
    }
}

export const storeType = new GraphQLObjectType({
    name: 'Store',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        code: {
            type: GraphQLString
        }
    }
})

export const storesField = {
    type: new GraphQLList(storeType),
    args: {
        limit: {
            type: GraphQLInt
        },
        order: {
            type: GraphQLString
        }
    },
    resolve: resolver(Store)
}

export default Store

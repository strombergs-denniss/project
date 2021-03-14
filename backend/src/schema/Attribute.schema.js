export default `
    type Query {
        attributes: [Attribute]
    }

    type Mutation {
        createAttribute(attribute: AttributeInput) : Attribute
        updateAttribute(id: ID, attribute: AttributeInput) : Attribute
        deleteAttribute(id: ID) : String
    }

    type Attribute {
        id: ID!
        code: String!
    }

    input AttributeInput {
        code: String!
    }
`

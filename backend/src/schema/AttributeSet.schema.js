export default `
    type Query {
        attributeSets: [AttributeSet]
    }

    type Mutation {
        createAttributeSet(attributeSet: AttributeSetInput) : AttributeSet
        updateAttributeSet(id: ID, attributeSet: AttributeSetInput) : AttributeSet
        deleteAttributeSet(id: ID) : String
    }

    type AttributeSet {
        id: ID!
        code: String!
    }

    input AttributeSetInput {
        code: String!
    }
`

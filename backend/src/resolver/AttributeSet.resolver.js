export default {
    Query: {
        attributeSets: async (_, __, { models }) => {
            try {
                return await models.AttributeSet.findAll()
            } catch (error) {
                console.error(error)

                return null
            }
        }
    },
    Mutation: {
        createAttributeSet: async (_, data, { models }) => {
            try {
                return await models.AttributeSet.create(data.attributeSet)
            } catch (error) {
                console.error(error)

                return null
            }
        },
        updateAttributeSet: async (_, data, { models }) => {
            try {
                const attributeSet = await models.AttributeSet.findByPk(data.id)
                Object.assign(attributeSet, data.attributeSet)
                await attributeSet.save()

                return attributeSet
            } catch (error) {
                console.error(error)

                return false
            }
        },
        deleteAttributeSet: async (_ , data, { models }) => {
            try {
                const attributeSet = await models.AttributeSet.findByPk(data.id)
                await attributeSet.destroy()

                return true
            } catch (error) {
                console.error(error)

                return false
            }
        }
    }
}

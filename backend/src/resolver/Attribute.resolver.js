export default {
    Query: {
        attributes: async (_, __, { models }) => {
            try {
                return await models.Attribute.findAll()
            } catch (error) {
                console.error(error)

                return null
            }
        }
    },
    Mutation: {
        createAttribute: async (_, data, { models }) => {
            try {
                return await models.Attribute.create(data.attribute)
            } catch (error) {
                console.error(error)

                return null
            }
        },
        updateAttribute: async (_, data, { models }) => {
            try {
                const attribute = await models.Attribute.findByPk(data.id)
                Object.assign(attribute, data.attribute)
                await attribute.save()

                return attribute
            } catch (error) {
                console.error(error)

                return false
            }
        },
        deleteAttribute: async (_ , data, { models }) => {
            try {
                const attribute = await models.Attribute.findByPk(data.id)
                await attribute.destroy()

                return true
            } catch (error) {
                console.error(error)

                return false
            }
        }
    }
}

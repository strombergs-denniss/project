import Database from '../../component/Database/Database.component'

export async function createDatabase(shouldPopulate = false) {
    await Database.sequelize.sync({
        force: true
    })

    if (shouldPopulate) {
        populateDatabase()
    }
}

export function populateDatabase() {
    const englishStore = Database.models.Store.create({
        code: 'en'
    })

    const russianStore = Database.models.Store.create({
        code: 'ru'
    })

    const sizeAttribute = Database.models.Attribute.create({
        code: 'size'
    })

    const colorAttribute = Database.models.Attribute.create({
        code: 'color'
    })
}

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
    const store = Database.models.Store.create({
        code: "lv"
    })
}

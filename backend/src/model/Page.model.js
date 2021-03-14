import { Model } from 'sequelize'

export class Page extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                }
            },
            {
                sequelize,
                modelName: 'page'
            }
        )
    }
}

export default Page

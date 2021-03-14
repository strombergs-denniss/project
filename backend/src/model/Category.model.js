import { Model } from 'sequelize'

export class Category extends Model {
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
                modelName: 'category'
            }
        )
    }
}

export default Category

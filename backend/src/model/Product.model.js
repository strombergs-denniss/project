import { Model } from 'sequelize'

export class Product extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                attributes: {
                    type: DataTypes.JSONB
                }
            },
            {
                sequelize,
                modelName: 'product'
            }
        )
    }
}

export default Product

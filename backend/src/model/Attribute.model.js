import { Model } from 'sequelize'

export class Attribute extends Model {
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
                modelName: 'attribute'
            }
        )
    }
}

export default Attribute

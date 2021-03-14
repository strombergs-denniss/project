import { Model } from 'sequelize'

export class AttributeGroup extends Model {
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
                modelName: 'attribute_group'
            }
        )
    }
}

export default AttributeGroup

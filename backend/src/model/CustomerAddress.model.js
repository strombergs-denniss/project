import { Model } from 'sequelize'
import Customer from './Customer.model'

export class CustomerAddress extends Model {
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
                modelName: 'customer_address'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Customer)
    }
}

export default CustomerAddress

import { Model } from 'sequelize'
import CustomerAddress from './CustomerAddress.model'

export class Customer extends Model {
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
                modelName: 'customer'
            }
        )
    }

    static associate(models) {
        this.hasMany(models.CustomerAddress)
    }
}

export default Customer

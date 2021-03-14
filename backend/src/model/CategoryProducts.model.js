import { Model } from 'sequelize'
import Category from './Category.model'
import Product from './Product.model'

export class CategoryProducts extends Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                category_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Category,
                        key: 'id'
                    }
                },
                product_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Product,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'category_products'
            }
        )
    }
    
    static associate(models) {
        models.Category.belongsToMany(
            models.Product,
            {
                through: this
            }
        )
        
        models.Product.belongsToMany(
            models.Category,
            {
                through: this
            }
        )
    }
}

export default CategoryProducts

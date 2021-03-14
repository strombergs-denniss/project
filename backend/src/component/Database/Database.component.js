import { DataTypes, Sequelize } from 'sequelize'
import { DATABASE_CONFIG } from './Database.config'
import Attribute from '../../model/Attribute.model'
import AttributeGroup from '../../model/AttributeGroup.model'
import AttributeSet from '../../model/AttributeSet.model'
import Block from '../../model/Block.model'
import Category from '../../model/Category.model'
import CategoryProducts from '../../model/CategoryProducts.model'
import Customer from '../../model/Customer.model'
import CustomerAddress from '../../model/CustomerAddress.model'
import Page from '../../model/Page.model'
import Product from '../../model/Product.model'
import Review from '../../model/Review.model'
import Store from '../../model/Store.model'
class Database {
    constructor() {
        this.connect()
        this.init()
        this.associate()
    }

    connect() {
        this.sequelize = new Sequelize(...DATABASE_CONFIG)
    }

    init() {
        this.models = {
            Attribute: Attribute.init(this.sequelize, DataTypes),
            AttributeGroup: AttributeGroup.init(this.sequelize, DataTypes),
            AttributeSet: AttributeSet.init(this.sequelize, DataTypes),
            Block: Block.init(this.sequelize, DataTypes),
            Category: Category.init(this.sequelize, DataTypes),
            Customer: Customer.init(this.sequelize, DataTypes),
            CustomerAddress: CustomerAddress.init(this.sequelize, DataTypes),
            Page: Page.init(this.sequelize, DataTypes),
            Product: Product.init(this.sequelize, DataTypes),
            CategoryProducts: CategoryProducts.init(this.sequelize, DataTypes),
            Review: Review.init(this.sequelize, DataTypes),
            Store: Store.init(this.sequelize, DataTypes)
        }
    }

    associate() {
        Object.values(this.models).filter((model) => !!model.associate).forEach((model) => model.associate(this.models))
    }
}

export default new Database()

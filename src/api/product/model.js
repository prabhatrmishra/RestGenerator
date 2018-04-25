import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
  productId: {
    type: String
  },
  productName: {
    type: String
  },
  category: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

productSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      productId: this.productId,
      productName: this.productName,
      category: this.category,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Product', productSchema)

export const schema = model.schema
export default model

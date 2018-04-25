import { Product } from '.'

let product

beforeEach(async () => {
  product = await Product.create({ productId: 'test', productName: 'test', category: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = product.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(product.id)
    expect(view.productId).toBe(product.productId)
    expect(view.productName).toBe(product.productName)
    expect(view.category).toBe(product.category)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = product.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(product.id)
    expect(view.productId).toBe(product.productId)
    expect(view.productName).toBe(product.productName)
    expect(view.category).toBe(product.category)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})

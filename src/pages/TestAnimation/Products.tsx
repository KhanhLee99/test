import Product from './Product'

function Products(props: { onProductAdd: () => void }) {
  const { onProductAdd } = props
  return (
    <div className='products-container'>
      <Product onProductAdd={onProductAdd} productName='Product 1' />
      <Product onProductAdd={onProductAdd} productName='Product 1' />
      <Product onProductAdd={onProductAdd} productName='Product 1' />
      <Product onProductAdd={onProductAdd} productName='Product 1' />
    </div>
  )
}

export default Products

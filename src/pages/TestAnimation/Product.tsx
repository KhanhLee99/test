import { useRef } from 'react'

function Product(props: { onProductAdd: () => void; productName: string }) {
  const { productName, onProductAdd } = props
  const ref = useRef<HTMLSpanElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (ref.current && ref2.current) {
      ref2.current.classList.remove('rel')
      // ref.current.classList.add('rel')
      ref.current.classList.add('move')
    }
    // ref.current && ref.current.classList.add('move')
    // setTimeout(() => {
    //   ref.current && ref.current.classList.remove('move')
    //   onProductAdd()
    // }, 1000)
  }

  return (
    <div className='product'>
      <div className='item rel' ref={ref2}>
        <span ref={ref} className='cart-item abs'></span>
        <span>{productName}</span>
      </div>
      <button className='add-to-cart' onClick={handleClick}>
        Add to cart
      </button>
    </div>
  )
}

export default Product

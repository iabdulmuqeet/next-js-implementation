import { useRouter } from 'next/router';

function Product() {
  const router = useRouter()
  const { productId } = router.query
  return <h1>Product {productId} Details</h1>
}

export default Product

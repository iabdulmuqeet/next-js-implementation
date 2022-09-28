import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/products')
  }

  return (
   <div>
    <h1>HomePage</h1>
    <h1><Link href='/products'>Products</Link></h1>
    <h1><Link href='/docs'>Docs</Link></h1>

    <button onClick={handleClick}>Place Order</button>
   </div>
  )
}

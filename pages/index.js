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
    <h1><Link href='/products'><a>Products</a></Link></h1>
    <h1><Link href='/docs'><a>Docs</a></Link></h1>
    <h1><Link href='/users'><a>Users</a></Link></h1>
    <h1><Link href='/posts'><a>Posts</a></Link></h1>

    <button onClick={handleClick}>Place Order</button>
   </div>
  )
}





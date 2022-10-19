import { useRouter } from 'next/router'

function Product({ product }) {
  const router = useRouter()

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h2>{product.id} {product.title} {product.price}</h2>
      <p>{product.description}</p>
      <hr />
    </>
  )
}

export default Product

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  console.log(`Generating / Regenerating Product ${params.productId}`)
  const response = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await response.json()

  if(!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data
    },
    revalidate: 10
  }
}

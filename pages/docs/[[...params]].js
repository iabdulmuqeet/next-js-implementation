import { useRouter } from 'next/router';

function Docs() {
  const router = useRouter()
  const { params = [] } = router.query

  if(params?.length === 1) {
    return <h1>Viewing docs for {params[0]}</h1>
  }

  if(params?.length === 2) {
    return <h1>Viewing docs for {params[0]} and {params[1]}</h1>
  }

  return <h1>Docs HomePage</h1>
}

export default Docs

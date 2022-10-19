import Link from "next/link"

function NewsList({ news }) {
  return (
    <>
      <h1>List of news</h1>
      {
        news.map(article => {
          return (
            <div key={article.id}>
              <Link href={`/news/${article.category}`}>
                <a>
                  <h2>
                    {article.id} {article.title} | {article.category}
                  </h2>
                </a>
              </Link>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}

export default NewsList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()

  console.log('Prerendering NewsArticleList')

  return {
    props: {
      news: data
    }
  }
}

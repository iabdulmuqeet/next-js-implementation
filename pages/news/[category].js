function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showing news for category <i>{category}</i></h1>
      {articles.map(article => {
        return (
            <div key={article.id}>
              <h2>
              {article.id} {article.title} | {article.category}
              </h2>
              <p>{article.description}</p>
              <hr />
            </div>
        )
      })}
    </>
  )
}

export default ArticleListByCategory

export async function getServerSideProps({ params, req, res, query }) {
  const response = await fetch(`http://localhost:4000/news?category=${params.category}`)
  const data = await response.json()

  res.setHeader('Set-Cookie', ['name=Abdul Muqeet Arshad'])
  console.log(req.headers.cookie)
  console.log(query)

  console.log(`Prerendering NewsArticleList for Category ${params.category}`)

  return {
    props: {
      articles: data,
      category: params.category
    }
  }
} 

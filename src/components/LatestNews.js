import classes from './LatestNews.module.css'
import Post from './Post'
import { useEffect, useState } from 'react'

const LatestNews = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedPost, setLoadedPost] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://react-posts-69270-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const posts = []

        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          }

          posts.push(post)
        }

        setIsLoading(false)
        setLoadedPost(posts)
      })
  }, [])

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <div className={classes.lds_loading}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className={classes.latest__news}>
        <div>
          <div className={classes.title}>
            <p>News</p>
          </div>
          <div className={classes.line}></div>
        </div>
      </div>
      <div className={classes.latest__news}>
        {loadedPost.map((pst) => (
          <Post
            key={pst.id}
            id={pst.id}
            description={pst.description}
            title={pst.title}
            image={pst.image}
          />
        ))}
      </div>
    </section>
  )
}

export default LatestNews

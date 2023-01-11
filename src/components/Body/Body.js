import './Body.scss'

import BlogFeed from '../BlogFeed/BlogFeed'
import NewsFeed from '../NewsFeed/NewsFeed'

const Body = () => {
  return (
     <section className="body">
      <BlogFeed />
      <NewsFeed />
    </section>
  )
}

export default Body;
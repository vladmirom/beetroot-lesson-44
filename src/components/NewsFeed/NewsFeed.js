import './NewsFeed.scss'

import NewsTeaser from '../NewsTeaser/NewsTeaser'

const NewsFeed = () => {
  return (
     <div className="news-feed">
      <h2 className="news-feed__title">News</h2>
      <NewsTeaser />
      <NewsTeaser />
      <NewsTeaser />
    </div>
  )
}

export default NewsFeed;
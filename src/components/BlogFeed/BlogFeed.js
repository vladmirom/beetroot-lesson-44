import './BlogFeed.css'

import BlogTeaser from '../BlogTeaser/BlogTeaser'

const BlogFeed = () => {
  return (
     <div className="blog-feed">
      <h2 className="blog-feed__title">Blog</h2>
      <BlogTeaser />
      <BlogTeaser />
      <BlogTeaser />
      <BlogTeaser />
    </div>
  )
}

export default BlogFeed;
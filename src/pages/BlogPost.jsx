import React from 'react'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams()
  
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6 text-center capitalize">
          {slug?.replace('-', ' ')} Article
        </h1>
      </div>
    </div>
  )
}

export default BlogPost

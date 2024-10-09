import PostContent from '@/components/posts/post-details/PostContent'
import React from 'react'

function PostDetails( { params }: any ) {
  return (
    <>
      <h1>{params.slug}</h1>
      <PostContent/>
    </>
  )
}

export default PostDetails
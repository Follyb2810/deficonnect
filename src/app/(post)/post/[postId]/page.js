import React from 'react'

const page = ({params}) => {
    console.log(params.postId)
  return (
    <div>
      heloo {params.postId}
    </div>
  )
}

export default page

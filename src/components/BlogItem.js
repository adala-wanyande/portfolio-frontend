import React from 'react'

const BlogItem = ({blogObject}) => {

  return (
    <a href={blogObject.link} className="flex justify-center">
      <div className="max-w-lg min-w-min bg-white border border-gray-200 rounded-lg shadow m-4">
          <div className="flex justify-center">
              <img className="w-[300px] h-[300px] mt-4 rounded-md" src={require(`../${blogObject.coverImage}`)} alt="Software Journey"/>
          </div>
          <div className="px-5 py-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{blogObject.title}</h5>
              <p className="mb-2 text-sm text-gray-600 min-w-[250px]">{blogObject.teaserContent}</p>
          </div>
      </div>
    </a>
  )
}

export default BlogItem
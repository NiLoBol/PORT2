import React from 'react'

function H1(props) {
  return (
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {props.children}
    </h1>
  )
}

export default H1

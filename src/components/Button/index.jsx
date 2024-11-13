import Link from 'next/link'
import React from 'react'

function Button({ className, routName }) {
  return (
    <div>
        <Link href="${routName}">
            <p className={className + "w-32 text-white h-14 p-4 flex items-center justify-center"}>{routName}</p>
        </Link>
    </div>
  )
}

export default Button
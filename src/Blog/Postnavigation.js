import React from 'react'
import { Link } from 'react-router-dom'

export default function Postnavigation() {
  return (
        <div className="text-start">
                <div>
                 <Link to="demorequest" className='text-white'><span>Demo Request</span></Link>
                </div>
                <div>
                 <Link to="blog" className='text-white'><span>Blog</span></Link>
                </div>
    </div>
  )
}

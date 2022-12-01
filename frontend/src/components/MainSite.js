import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MainSite() {

  return (
    <div>MainSite
      <div>
        <Link className='link' to={'/delete'}>Delete user</Link>
      </div>
      <div>
        <Link className='link' to={'/login'}>Log out</Link>
      </div>
    </div>
  )
}

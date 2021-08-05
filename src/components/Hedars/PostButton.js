import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const PostButton=()=>{
    const history=useHistory()
    const location=useLocation()
    let title=location.pathname.split("/")[1]
    if(title==="edit_profile")title="Post"

    return(
    <button
        className="header__button button blue icon-plus"
        onClick={() => history.push(`/${title}/add_post`)}
      >
        Add {title}
      </button>)
}
export default PostButton
import { FETCH_POSTS, FETCH_POST_BY_ID } from "../typeList";
import URL from "../url";

export const getPosts = () => {
  return async (dispatch) => {
    const response = await fetch(`${URL}/posts/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(response.status!==200)return
    const json=await response.json()
    await dispatch(fetchPost({list:json}))
  };
};

export const getPostsById = (id) => {
    return async (dispatch) => {
      const response = await fetch(`${URL}/posts/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status!==200)return
      const json=await response.json()
      await dispatch(fetchPostById({postById:json}))
    };
  };

const fetchPost=(obj)=>{
    return{
        type:FETCH_POSTS,
        payload:obj
    }
}
const fetchPostById=(obj)=>{
    return{
        type:FETCH_POST_BY_ID,
        payload:obj
    }
}
import React from 'react'
import {useParams, useNavigate} from "react-router-dom"

const User = () => {
 const Params = useParams()
const navigation = useNavigate()

 console.log(Params.id)
  return (
    <div className='User'>
     <button onClick={()=>navigation("/About")}>click me</button>   
        </div>
  )
}

export default User
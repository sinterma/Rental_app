import React from 'react'
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div> 404 NotFound...OOOPS</div>
      <Link to ="/"> Go to Home Page</Link>
    </div>
  )
}

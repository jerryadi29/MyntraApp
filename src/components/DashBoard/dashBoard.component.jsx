import React from 'react'
import { ApiCallForProductImage } from '../../api/apiData'


export  const DashBoard = () => {
 console.log (ApiCallForProductImage("https://dummyjson.com/products/categories"))

  return (
    <div>dashboard</div>
  )
}

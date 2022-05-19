
import React, { Component} from 'react'
import Filters from '../filters/filters'
import Cards from '../displayItems/card'
import "./ListItems.css"
import MyProvider from '../../context/productData.context'


export default class ListItems extends Component {

    constructor(props) {
      super(props)  
    }


  render() {
  
    
    return (
      <div className='Container'>
       
       <MyProvider>
             {/* <Filters ></Filters> */}
             <Cards></Cards> 
       </MyProvider>
       

        </div>

    )
  }
}

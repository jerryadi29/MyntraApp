import React, { Component } from 'react'


export const myContext=React.createContext();

export default class MyProvider extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           data:[]
        }
      }
  
    componentDidMount(){
    
      let Promise=fetch("https://dummyjson.com/products/categories")

      Promise.then((res)=>{
        return res.json()
      }).then((result)=>{
        let phones=result.filter((category)=>category=="phones")
        return phones;
      }).then((phones)=>{

        return fetch("https://dummyjson.com/products/search?limit=10&skip=1&q="+phones)
      }).then((res)=>{
        return res.json();
      }).then((result)=>{
        this.setState({data:[...result.products]})
      })


      .catch((err)=>{
        console.log("error while fetching data :",err)
      })
    
        
    }


  render() {
    return (
        <myContext.Provider value={{
                data:this.state.data
        }}>
            {this.props.children}
        </myContext.Provider>
    )
  }
}



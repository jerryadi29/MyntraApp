import React from 'react'
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import "../displayItems/card.css"
import { myContext } from '../../context/productData.context';


export default function Cards(props) {


  return (
    <>
    <myContext.Consumer>
          { 

          
             (res)=>{
              let details=res.data;  
              return(
                         
                details.map( (item)=>{
                  const {price,title,discount,rating,thumbnail,brand,description}=item
                 
                  return(
                    <Card className='Card'>
                      <CardMedia
                      component="img"
                      height="140"
                      image={thumbnail}
                      ></CardMedia>

                      {/* <WishLists>
                        
                      </WishLists> */}
                    </Card>
                  )
                 
                    })  
              )
                                                  
                    
              }
            
           
          }
    
   


    </myContext.Consumer>
    </>
  )
}

import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

export default function Filters(props) {
    const data=props.data[0];
    
console.log(data.category)


  return (
    <>

        
    <FormGroup>
            <Checkbox></Checkbox>
            <Checkbox></Checkbox>
            <Checkbox></Checkbox>

    </FormGroup> 
       
    

    </>
  )
}

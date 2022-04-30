import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function ProfileLink(props) {
  return (
    <>
    
   <FontAwesomeIcon icon={props.icon} iconName={props.iconName} size={props.size} />
        <span>{props.iconName}</span>
    </>
  )
}

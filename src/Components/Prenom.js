import React from 'react'

 const Prenom = (props) => {
    
  return (
    <div>
        { props.userPrenom === "khaled" ?<>Bonjour {props.userPrenom}<img src={props.image} /></> : "Bonjour la!" } 
    </div>

    
  )

}
export default Prenom;

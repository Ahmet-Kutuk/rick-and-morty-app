import React from 'react';
import "../Character/Character.css"
function Character(props){
return(
    <React.Fragment>
    <div className="card box" style={{width:"18rem"}}>
  <img src={props.image} height="175" className="card-img-top" alt="Charater İmage" />
  <div className="card-body" style={{backgroundColor:"#f5cebe"}}>
    <h6 className="text-center">{props.name}</h6>
  </div>
    </div>
    </React.Fragment>
)

}

export default Character;
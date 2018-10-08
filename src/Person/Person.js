import React from 'react';

const person = (props) =>{
   
    return(
      //  <p>I'm a person, my age {Math.floor(Math.random()*30)}</p>
       <div className="Person" > 
           <p onClick={props.click}>I'm a {props.name}, my age {props.age}</p>
           <p>{props.children}</p>
           <input type={Text} onChange={props.change} value={props.name}></input>
    </div>
    );
}

export default person;
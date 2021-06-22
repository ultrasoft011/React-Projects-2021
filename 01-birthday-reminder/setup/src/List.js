import React from "react";

const List = ({ example }) => {
  return (
  <> 
  {/* Map method to iterate on every key-value of the object (example) */}
  {example.map((example) => {
      {/* Destructuring the example */}
      const {id, name, age, image} = example;
      {/* The return with the values that we want to show */}
      return ( 
      <article key={id} className='person'> 
      <img src={image}></img>
        <div>
          <h4>{name}</h4>
          <p>{age} years </p>
        </div>
      </article>
      )
  })}
  </>
  )
}

export default List;

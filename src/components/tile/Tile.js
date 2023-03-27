import React from "react";

/*Based on the given requirements, implement Tile as a stateless component that renders the data from an object.*/
/* Receive one prop: An object
Iterate over the values in the object, passed in via props, and render a <p> element for each value
Give a className of "tile-title" to the first <p> element
Give a className of "tile" to all other <p> elements */
export const Tile = ({value}) => {
  const dataArray = Object.values(value);
  return (
    <div className="tile-container">
      {dataArray.map( (data, index) => {
        if(index === 0) {
          return <p className='tile-title' key={index}> {data}</p>
        } else {
          return <p className='tile' key={index}> {data} </p>
        }
      })};
    </div>
  );
};

import React from "react";
import { Tile } from '../../components/tile/Tile';

/*Based on the given requirements, implement TileList as a stateless component that renders 
a list of Tile components using an array of objects.*/

/*Use the array passed via props to iteratively render Tile components, 
passing each object in the array as a prop to each rendered Tile component */

export const TileList = ({data}) => {
  return (
    <div>
      {data.map( (index, value) =>  <Tile key={index} value={value} /> )}
    </div>
  );
};

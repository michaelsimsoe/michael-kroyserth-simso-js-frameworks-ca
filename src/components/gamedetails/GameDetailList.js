import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import flattenObject from '../../utils/flattenObject';

export const GameDetailList = (props) => {

  const flattendeObjects = props.listItem.map((item) => {
        return flattenObject(item); 
  });
  return (
    <ListGroup variant="flush">
      {flattendeObjects.map((item) => {
        return <ListGroup.Item key={item.id}><Badge variant="info">{item.name}</Badge></ListGroup.Item>;
      })}
    </ListGroup>
  );
}


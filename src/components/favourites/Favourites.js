import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";

export const Favourites = (props) => {
  const { favourites } = useSelector(state => state)
  console.log(favourites)
  return (
    <ListGroup>
      {favourites.map(fav => {
        return <ListGroup.Item key={fav.id}><Link to={`/game_details/${fav.id}`}>{fav.name}</Link></ListGroup.Item>
      })}
    </ListGroup>
  )
}

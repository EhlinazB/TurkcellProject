import React, { useContext } from 'react'
import { FavoritesContext } from '../../../../context/FavoritesContext'

function Favorites() {

  const { favorites } = useContext(FavoritesContext)

  return <>
    <ul>
      { 
        favorites.map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </>
}

export default Favorites
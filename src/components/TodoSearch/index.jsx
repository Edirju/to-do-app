/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

export const TodoSearch = () => {  
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input 
      placeholder="Escribe tu texto aquí..." 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

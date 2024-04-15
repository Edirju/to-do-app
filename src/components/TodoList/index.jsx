/* eslint-disable react/prop-types */
import './TodoList.css'

export const TodoList = ({ children }) => {
  return (
    <ul
      className="TodoList"
    >
      { children }
    </ul>
  )
}


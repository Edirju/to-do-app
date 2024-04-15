/* eslint-disable react/prop-types */
import './CreateTodoButton.css'

export const CreateTodoButton = ({ setOpenModal }) => {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal(state => !state)
      }}
    >
      +
    </button>
  )
}

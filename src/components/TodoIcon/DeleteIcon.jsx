/* eslint-disable react/prop-types */

import { TodoIcon } from './'

export const DeleteIcon = ({ onDelete }) => {
  return (
    <TodoIcon 
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  )
}

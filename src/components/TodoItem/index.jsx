/* eslint-disable react/prop-types */
import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from "../TodoIcon/DeleteIcon"

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
            
      <DeleteIcon 
        onDelete={props.onDelete}
      />
    </li>
  );
}

export default TodoItem
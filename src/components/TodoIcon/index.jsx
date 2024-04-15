/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import './TodoIcon.css'

const iconTypes = {
  check: (color) => <FaCheck className="Icon-svg" fill={color} />,
  delete: (color) => <IoMdClose className="Icon-svg" fill={color} />,
};

export const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}




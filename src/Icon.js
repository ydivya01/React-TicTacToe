import { FaPen, FaTimes, FaCircle } from "react-icons/fa";

export default function Icon({ iconName }) {
  return (
    <>
      {iconName === "empty" ? (
        <FaPen className="icon" />
      ) : iconName === "cross" ? (
        <FaTimes className="icon" />
      ) : (
        <FaCircle className="icon" />
      )}
    </>
  );
}

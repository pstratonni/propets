import React, { useEffect } from "react";

const Select = ({ isFound, setIsFound }) => {
  useEffect(() => {
    if (document.location.pathname.split("/").pop() === "lost") {
      setIsFound(false);
    } else {
      setIsFound(true);
    }
  }, [document.location.pathname.split("/").pop()]);
  return (
    <select className="form__select">
      <option defaultValue >
        {isFound ? "Found" : "Lost"}
      </option>
      <option >
        {!isFound ? "Found" : "Lost"}
      </option>
    </select>
  );
};
export default Select;

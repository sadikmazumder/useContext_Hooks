import React, { useContext } from "react";
import { FirstName, LastName } from "./A";

function D(props) {
  const firstName = useContext(FirstName);
  const lastName = useContext(LastName);

  return (
    <div>
      {/* By a props drilling we are accessing the name from A component */}
      {/* {props.name} */}
      {firstName} {lastName}
    </div>
  );
}

export default D;

// impoting the context

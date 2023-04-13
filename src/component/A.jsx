import React, { createContext } from "react";
import B from "./B";

const FirstName = createContext();
const LastName = createContext();

function A(props) {
  return (
    <div>
      {/* passing the name from A component to D componet  */}
      {/* <B name="Adam" /> */}

      <FirstName.Provider value="Adam">
        <LastName.Provider value="Jhon">
          <B />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default A;
export { FirstName };
export { LastName };

{
  /* // useContext Hooks
// first create the contect --> then create the provider
// after that we have to export the componets */
}

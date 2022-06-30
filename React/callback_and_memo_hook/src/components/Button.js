import React, { memo } from "react";

const Button = ({handleClick, children}) => {

    console.log(`rendering button ${children}`);

  return (
    <div>
          <button type="button" onClick={handleClick}>
            {children}
          </button>
    </div>
  );
};

export default memo(Button);

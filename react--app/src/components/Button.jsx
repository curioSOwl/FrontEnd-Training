import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.handleSubmit}
      type="submit"
      className={props.className}
      data-testid="button-test-id"
    >
      {props.ButtonText}
    </button>
  );
};

export default Button;

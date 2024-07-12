const Button = (props) => {
  return (
    <button
      onClick={props.handleSubmit}
      type="submit"
      className={props.className}
    >
      {props.ButtonText}
    </button>
  );
};

export default Button;

import { forwardRef } from "react";

const TextField = forwardRef((props, ref) => {
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };
  return (
    <span className="span__class">
      <input
        type={props.type}
        name={props.label}
        id={props.label}
        placeholder=""
        className={props.className}
        value={props.value}
        ref={ref}
        onChange={onChange}
        style={{ borderColor: props.color }}
      />
      <label className="label__login" htmlFor="uname">
        {props.label}
      </label>
      <p style={{ color: props.color }}>{props.error}</p>
    </span>
  );
});

export default TextField;

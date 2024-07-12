import { useEffect, useState } from "react";

const TextField2 = (props) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange(props.name, text);
    }
  }, [text]);

  return (
    <span>
      <label htmlFor="uname">{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.id}
        className={props.className}
        value={props.value}
        disabled={props.label === "Employee ID"}
        onChange={onChange}
      />
      {props.error && <p style={{ color: props.color }}>{props.error}</p>}
    </span>
  );
};

export default TextField2;

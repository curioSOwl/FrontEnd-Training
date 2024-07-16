import "../employee.css";

const SelectionField = (props) => {
  const options = props.options;

  return (
    <>
      {props.label ? <label>{props.label}</label> : <></>}
      <select
        className={props.className}
        value={props.value}
        onChange={(e) => {
          props.changeState(props.name, e.target.value);
        }}
      >
        <option hidden value={props.hiddenValue}>
          {props.hiddenValue}
        </option>

        {options.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectionField;

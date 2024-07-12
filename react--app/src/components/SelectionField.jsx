const SelectionField = (props) => {
  const options = props.options;

  return (
    <>
      {props.label ? <label>{props.label}</label> : <></>}
      <select className={props.className}>
        <option hidden value={props.hiddenValue}>
          {props.hiddenValue}
        </option>

        {options.map((opt) => {
          return <option key={opt}>{opt}</option>;
        })}
      </select>
    </>
  );
};

export default SelectionField;

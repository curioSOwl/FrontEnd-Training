import TextField2 from "./TextField2";
import SelectionField from "./SelectionField";
import Button from "./Button";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FormComponent = (props) => {
  const [employeeObject, setEmployeeObject] = useState({
    emp_name: "",
    emp_id: props.id,
    emp_join: "",
    emp_role: "",
    emp_dept: "",
    emp_status: "",
    emp_exp: "",
    emp_addr: "",
  });

  console.log(props);

  const onChangeEmployee = (fieldName, fieldValue) => {
    setEmployeeObject({
      ...employeeObject,
      [fieldName]: fieldValue,
    });
    console.log(employeeObject);
  };
  const fields = [
    {
      key: 1,
      type: "text",
      label: "EmployeeName",
      className: "inputs",
      name: "emp_name",
      id: "EmployeeName",
    },
    {
      key: 2,
      type: "text",
      label: "Joining Date",
      className: "inputs",
      name: "emp_join",
      id: "Joining Date",
    },
    {
      key: 3,
      type: "text",
      label: "Experience [Yrs]",
      className: "inputs",
      name: "emp_exp",
      id: "Experience",
    },
    {
      key: 4,
      label: "Department",
      className: "inputs",
      hiddenValue: "Choose dep",
      option: ["HR", "development", "Business"],
      name: "emp_dept",
      type: "select",
      id: "Department",
    },
    {
      key: 5,
      label: "Role",
      className: "inputs",
      hiddenValue: "Choose role",
      option: ["Frontend", "Backend", "UI"],
      name: "emp_role",
      type: "select",
      id: "Role",
    },
    {
      key: 6,
      label: "Status",
      className: "inputs",
      hiddenValue: "Choose status",
      name: "emp_status",
      option: ["Incomplete", "Complete"],
      type: "select",
      id: "Status",
    },

    {
      key: 7,
      type: "text",
      label: "Address",
      className: "inputs",
      name: "emp_addr",
      id: "Address",
    },
    {
      key: 8,
      type: "text",
      label: "Employee ID",
      className: "inputs",
      name: "emp_id",
      id: props.id,
    },
  ];
  return (
    <form className="main__heading">
      <div className="sec1 fonts">
        {fields.map((field) => {
          if (props.name == "create" && field.name == "emp_id") {
            return;
          }
          return (
            <div key={field.key} className="sec2">
              {field.type === "text" ? (
                <TextField2
                  name={field.name}
                  type={field.type}
                  label={field.label}
                  className="inputs input__s"
                  onChange={onChangeEmployee}
                  value={employeeObject[field.name]}
                  id={field.id}
                />
              ) : (
                <SelectionField
                  hiddenValue={field.hiddenValue}
                  label={field.label}
                  className="inputs input__s"
                  options={field.option}
                  changeState={(fieldValue) => {
                    changFormState(field.name, fieldValue);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="sec3">
        <Button
          isPrimary={true}
          ButtonText="Create"
          className="button1 button__employee"
          handleSubmit={() => {
            setemployeelist((prev) => [...prev, employeeObject]);
          }}
        />
        <div className="buttons"></div>
        <Button ButtonText="Cancel" className="button2 button__employee" />
      </div>
    </form>
  );
};

export default FormComponent;

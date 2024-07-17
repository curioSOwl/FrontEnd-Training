import TextField2 from "./TextField2";
import SelectionField from "./SelectionField";
import Button from "./Button";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addEmployee, upEmployee } from "../store/employeeReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useAddemployeeMutation,
  useGetEmployeeDetailsQuery,
} from "../pages/employees/api";

const FormComponent = (props) => {
  // const employees = useSelector((state) => state.employees.employees);
  const { data, isSuccess } = useGetEmployeeDetailsQuery(props.id);
  const navigate = useNavigate();

  const onConfirm = async () => {
    const response = await props.addEmployee({
      ...employeeObject,
      joinDate: new Date().toISOString().split("T")[0],
      status: employeeObject.status,
      email: employeeObject.email,
      address: { line1: employeeObject.address },
      department: employeeObject.department,
      name: employeeObject.name,
      role: employeeObject.role,
      experience: employeeObject.experience,
      password: "123",
    });
    console.log(response);
  };
  const [employeeObject, setEmployeeObject] = useState({
    name: "",
    id: "",
    joinDate: "",
    role: "",
    department: "",
    status: "",
    experience: "",
    address: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess && props.id) {
      const employeeData = {
        ...data,
        address: data.address.line1,
        department: data.department.name,

        joinDate: data.joinDate.slice(0, 10),
        // id: parseInt(data.id),
      };
      setEmployeeObject(employeeData);
      //     navigate("/employee");
    }
  }, [isSuccess, data, props.id]);

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
      label: "Employee Name",
      name: "name",
      id: "Employee Name",
    },
    {
      key: 2,
      type: "text",
      label: "Joining Date",
      name: "joinDate",
      id: "Joining Date",
    },
    {
      key: 3,
      type: "text",
      label: "Experience [Yrs]",
      name: "experience",
      id: "Experience",
    },
    {
      key: 4,
      label: "Department",
      hiddenValue: "Choose dep",
      option: ["Frontend", "UI", "Business", "Backend"],
      name: "department",
      type: "select",
      id: "Department",
    },
    {
      key: 5,
      label: "Role",
      hiddenValue: "Choose role",
      option: ["Design", "HR", "Developer"],
      name: "role",
      type: "select",
      id: "Role",
    },
    {
      key: 6,
      label: "Status",
      hiddenValue: "Choose status",
      name: "status",
      option: ["Active", "Inactive", "Probation"],
      type: "select",
      id: "Status",
    },

    {
      key: 7,
      type: "text",
      label: "Address",
      name: "address",
      id: "Address",
    },
    {
      key: 8,
      type: "text",
      label: "Email",
      name: "email",
      id: "Email",
    },
    {
      key: 9,
      type: "text",
      label: "Employee ID",
      className: "cursorn",
      name: "id",
      id: props.id,
    },
  ];
  return (
    <form className="main__heading">
      <div className="sec1 fonts">
        {fields.map((field) => {
          if (props.name == "create" && field.name == "id") {
            return;
          }
          return (
            <div key={field.key} className="sec2">
              {field.type === "text" ? (
                <TextField2
                  name={field.name}
                  type={field.type}
                  label={field.label}
                  className={
                    "inputs input__s " +
                    (field.className ? field.className : "")
                  }
                  onChange={onChangeEmployee}
                  value={employeeObject[field.name]}
                  id={field.id}
                />
              ) : (
                <SelectionField
                  name={field.name}
                  hiddenValue={field.hiddenValue}
                  label={field.label}
                  className="inputs input__s"
                  options={field.option}
                  changeState={onChangeEmployee}
                  value={employeeObject[field.name]}
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
          handleSubmit={async (e) => {
            e.preventDefault();
            if (props.name == "create") {
              onConfirm();
            } else if (props.name == "edit") {
              await props.up({
                ...employeeObject,
                address: { line1: employeeObject.address },
              });
            }
            navigate("/employee");
          }}
        />
        <div className="buttons"></div>
        <Button ButtonText="Cancel" className="button2 button__employee" />
      </div>
    </form>
  );
};

export default FormComponent;

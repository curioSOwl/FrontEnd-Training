import "../employee.css";
import { useOutletContext } from "react-router-dom";
import FormComponent from "./FormComponent";
import { useState } from "react";
import { useParams } from "react-router-dom";
const UpdateEmployee = () => {
  let { id } = useParams();
  console.log(id);
  const [employeelist, setemployeelist] = useOutletContext();
  const [employeeObject, setEmployeeObject] = useState({
    emp_name: "",
    emp_id: "",
    emp_join: "",
    emp_role: "",
    emp_status: "",
    emp_exp: "",
    emp_addr: "",
  });

  const onChangeEmployee = (fieldName, fieldValue) => {
    setEmployeeObject({
      ...employeeObject,
      [fieldName]: fieldValue,
    });
    console.log(employeeObject);
  };

  return (
    //<body className="body__style2">
    <>
      <main className="main__class">
        <section>
          <div className="main__heading">
            <h1 className="fonts">Update Employee</h1>
          </div>
          <br />
          <FormComponent name="edit" id={id} />
        </section>
      </main>
    </>
    // </body>
  );
};

export default UpdateEmployee;

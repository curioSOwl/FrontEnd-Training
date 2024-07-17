import { Link, useParams } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { userData } from "../data";
import { LabelData } from "../labelName.Jsx";
import { useGetEmployeeDetailsQuery } from "../pages/employees/api";
import { useEffect, useState } from "react";

const EmployeeDetails = () => {
  let { id } = useParams();
  const { data, isSuccess } = useGetEmployeeDetailsQuery(id);
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    if (isSuccess) {
      const emp = {
        name: data.name,
        id: data.id,
        joinDate: new Date(data?.createdAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        role: data.role,
        status: data.status,
        experience: data.experience,
        address: data.address.line1,
        department: data.department.name,
        email: data.email,
      };
      setEmployee(emp);
    }
  }, [isSuccess, data]);

  //const employee = userData.find((employee) => employee.id === id);

  return (
    <>
      <main className="main__class">
        <section className="main__heading margintop list__heading__container">
          <h1 className="fonts">Employee Details</h1>

          <Link to={`/employee/edit/${id}`} className="linkeffects">
            <div className="filters">
              <div className="plus__style">
                <MdOutlineEdit
                  size="25px"
                  color="white"
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log(`Edit ${id}`)}
                />
              </div>
              <div className="create__icon__style">Edit</div>
            </div>
          </Link>
        </section>
        <br></br>
        <section className="details__sec">
          {Object.keys(employee).map((key, index) => {
            const value =
              key === "status"
                ? `${employee[key].toLowerCase()} status-pill details__value`
                : "details__value";
            const lastIndex = Object.keys(employee).length - 1;
            const cn =
              index > lastIndex - 4 ? "details__div last" : "details__div";

            return (
              <div className={cn}>
                <div className="details__label">{LabelData[index]}</div>
                <div className={value}>{employee[key]}</div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default EmployeeDetails;

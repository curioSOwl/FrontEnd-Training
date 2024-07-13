import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import "../employee.css";
import SelectionField from "./SelectionField";
import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { userData } from "../data";
import { LabelData } from "../labelName.Jsx";

const EmployeeDetails = () => {
  let { id } = useParams();
  const employee = userData.find((employee) => employee.id === id);
  console.log(employee);

  return (
    <>
      <main className="main__class">
        <section className="main__heading list__heading__container">
          <h1 className="fonts">Employee Details</h1>

          <div className="filters">
            <div className="plus__style">
              <MdModeEditOutline
                size="25px"
                color="white"
                style={{ cursor: "pointer" }}
                onClick={() => console.log(`Edit ${id}`)}
              />
            </div>
            <div className="create__icon__style">Edit</div>
          </div>
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
              index > lastIndex - 3 ? "details__div last" : "details__div";

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

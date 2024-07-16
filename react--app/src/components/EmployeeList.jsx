import { useState } from "react";
import "../employee.css";
import "../modal.css";
import SelectionField from "./SelectionField";
import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import { Link, useOutletContext } from "react-router-dom";
import { userData } from "../data";
import Modal from "./Modal";
import { actionTypes } from "../useReducer";
import { useDispatch, useSelector } from "react-redux";
import { delEmployee, filterEmployee } from "../store/employeeReducer";

const EmployeeList = () => {
  const [showDelete, toggleDelete] = useState(false);
  const employees = useSelector((state) => state.employees.employees);
  const filterBy = useSelector((state) => state.employees.filterBy);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = (employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  const onchangeFilter = (e, value) => {
    dispatch(filterEmployee(value));
  };

  return (
    <>
      <main className="main__class">
        <section className="margintop main__heading list__heading__container">
          <h1 className="fonts">Employee List</h1>
          <div className="elements2">
            <div className="filter">
              <div className="fonts">Filter By</div>
              <div className="status__style">
                <SelectionField
                  hiddenValue="Status"
                  className="inputs input__sty"
                  options={["All", "Active", "Inactive", "Probation"]}
                  changeState={onchangeFilter}
                />
              </div>
            </div>
            <Link to="/employee/create" className="linkeffects">
              <div className="filters">
                <div className="plus__style">+</div>
                <div className="create__icon__style">Create employee</div>
              </div>
            </Link>
          </div>
        </section>
        <br></br>
        <section>
          <table className="tables">
            <tr className="table__heading tableRow">
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Joining Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>

            <tbody>
              {employees
                .filter((emp) => filterBy === "All" || emp.status === filterBy)
                .map(({ name, id, joinDate, role, status, experience }) => (
                  <Link
                    to={`/employee/details/${id}`}
                    className="linkdecoration"
                  >
                    <tr key={id} className="table__data tableRow">
                      <td>{name}</td>
                      <td>{id}</td>
                      <td>{joinDate}</td>
                      <td>{role}</td>
                      <td>
                        <div className={`${status.toLowerCase()} status-pill`}>
                          <p>{status}</p>
                        </div>
                      </td>
                      <td>{experience}</td>
                      <td>
                        <MdOutlineDelete
                          size="25px"
                          color="#e76a6ad9"
                          className="delete-icon openModalBtn"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete({ name, id });
                          }}
                        />

                        <Link to={`/employee/edit/${id}`}>
                          <MdModeEditOutline
                            size="25px"
                            color="#6ab7e7d9"
                            style={{ cursor: "pointer" }}
                            onClick={() => console.log(`Edit ${id}`)}
                          />
                        </Link>
                      </td>
                    </tr>
                  </Link>
                ))}
            </tbody>
          </table>
          {openModal && (
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              onConfirm={() => {
                dispatch(delEmployee(selectedEmployee.id));
                setOpenModal(false);
              }}
              employee={selectedEmployee}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default EmployeeList;

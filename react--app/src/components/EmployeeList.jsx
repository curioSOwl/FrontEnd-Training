import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import "../employee.css";
import "../modal.css";
import SelectionField from "./SelectionField";
import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { userData } from "../data";
import Modal from "./Modal";

const EmployeeList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [employeelist, setemployeelist] = useOutletContext();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDelete = (employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  return (
    <>
      <main className="main__class">
        <section className="main__heading list__heading__container">
          <h1 className="fonts">Employee List</h1>
          <div className="elements2">
            <div className="filter">
              <div className="fonts">Filter By</div>
              <div className="status__style">
                <SelectionField
                  hiddenValue="Status"
                  className="inputs input__sty"
                  options={["active", "Inactive"]}
                />
              </div>
            </div>
            <div className="filters">
              <div className="plus__style">+</div>
              <div className="create__icon__style">Create employee</div>
            </div>
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
              {userData.map(
                ({ name, id, joinDate, role, status, experience }) => (
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
                )
              )}
            </tbody>
          </table>
          {openModal && (
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              employee={selectedEmployee}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default EmployeeList;

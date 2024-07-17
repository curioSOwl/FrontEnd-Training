import { useEffect, useState } from "react";
import "../employee.css";
import "../modal.css";
import SelectionField from "./SelectionField";
import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { delEmployee, filterEmployee } from "../store/employeeReducer";
import {
  useDeleteEmployeeMutation,
  useGetEmployeeListQuery,
} from "../pages/employees/api";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const { data = [], isSuccess } = useGetEmployeeListQuery();
  const [employeeDelete] = useDeleteEmployeeMutation();
  const employees = useSelector((state) => state.employees.employees);
  const filterBy = useSelector((state) => state.employees.filterBy);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      const employees = data.map((employee) => ({
        ...employee,
      }));
      setList(employees);
    }
  }, [data]);
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
          <div className="tables">
            <div className="table__heading tableRow tdth">
              <div>Employee Name</div>
              <div>Employee ID</div>
              <div>Joining Date</div>
              <div>Role</div>
              <div>Status</div>
              <div>Experience</div>
              <div>Action</div>
            </div>

            <div>
              {list
                .filter((emp) => filterBy === "All" || emp.status === filterBy)
                .map(({ name, id, joinDate, role, status, experience }) => (
                  <Link
                    key={id}
                    to={`/employee/details/${id}`}
                    className="linkdecoration"
                  >
                    <div className="table__data tableRow tdth">
                      <div>{name}</div>
                      <div>{id}</div>
                      <div>{joinDate.slice(0, 10)}</div>
                      <div>{role}</div>
                      <div>
                        <div className={`${status.toLowerCase()} status-pill`}>
                          <p>{status}</p>
                        </div>
                      </div>
                      <div>{experience}</div>
                      <div>
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

                        {/* <button> */}
                        <MdModeEditOutline
                          size="25px"
                          color="#6ab7e7d9"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/employee/edit/${id}`);
                          }}
                        />
                        {/* </button> */}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          {openModal && (
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              onConfirm={() => {
                employeeDelete({ id: selectedEmployee.id });
                selectedEmployee(null);
                return setOpenModal(false);
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

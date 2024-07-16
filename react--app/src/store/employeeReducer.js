import { createReducer, createAction } from "@reduxjs/toolkit";
import { userData } from "../data";

const addEmployee = createAction("ADD_EMPLOYEE");
const delEmployee = createAction("DELETE_EMPLOYEE");
const upEmployee = createAction("UPDATE_EMPLOYEE");
const filterEmployee = createAction("FILTER_EMPLOYEE");

const employeeReducer = createReducer(
  { employees: userData, filterBy: "All" },
  (builder) => {
    builder.addCase(addEmployee, (state, action) => {
      state.employees.push(action.payload);
    });
    builder.addCase(delEmployee, (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.id != action.payload
      );
      console.log(state.employees);
    });
    builder.addCase(upEmployee, (state, action) => {
      state.employees = state.employees.map((employee) => {
        if (employee.id != action.payload.id) {
          return employee;
        } else {
          return action.payload;
        }
      });
    });
    builder.addCase(filterEmployee, (state, action) => {
      state.filterBy = action.payload;
    });
  }
);

export {
  employeeReducer as default,
  addEmployee,
  delEmployee,
  upEmployee,
  filterEmployee,
};

const actionTypes = {
  ADD_EMPLOYEE: "ADD_EMPLOYEE",
  DELETE_EMPLOYEE: "DELETE EMPLOYEE",
  FILTER_EMPLOYEE: "FILTER_EMPLOYEE",
};

const reducer = (state, action) => {
  let employees = [...state.employees];
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      console.log(action);
      return {
        ...state,

        employees: [...state.employees, action.payload],
      };

    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: employees.filter(
          (employee) => employee.id != action.payload
        ),
      };

    case actionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: [
          ...employees.map((employee) => {
            if (employee.id != action.payload.id) {
              return employee;
            } else {
              return action.payload;
            }
          }),
        ],
      };
    case actionTypes.FILTER_EMPLOYEE:
      console.log(action);
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as default, actionTypes };

import apiWithTag from "../../api/employeeApi";

export const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "./employees",
      providesTags: ["EMPLOYEE_LIST"],
    }),
    getEmployeeDetails: builder.query({
      query: (id) => `/employees/${id}`,
    }),
    addemployee: builder.mutation({
      query: (body) => ({
        url: "/employees",
        method: "POST",
        body,
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/employees/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    deleteEmployee: builder.mutation({
      query: ({ id }) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});

export const {
  useGetEmployeeListQuery,
  useLazyGetEmployeeListQuery,
  useGetEmployeeDetailsQuery,
  useAddemployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation
} = employeeApi;

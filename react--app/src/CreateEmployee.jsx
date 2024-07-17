import "./employee.css";
import FormComponent from "./components/FormComponent";
import { useAddemployeeMutation } from "./pages/employees/api";

const CreateEmployee = () => {
  const [addEmployee, { isSuccess, data }] = useAddemployeeMutation();
  

  return (
    <>
      <main className="main__class">
        <section>
          <div className="main__heading margintop">
            <h1 className="fonts">Create Employee</h1>
          </div>
          <br></br>
          <FormComponent name="create" addEmployee={addEmployee} />
        </section>
      </main>
    </>
  );
};

export default CreateEmployee;

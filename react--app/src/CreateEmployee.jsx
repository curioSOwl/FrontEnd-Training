import "./employee.css";
import FormComponent from "./components/FormComponent";

const CreateEmployee = () => {
  return (
    <>
      <main className="main__class">
        <section>
          <div className="main__heading margintop">
            <h1 className="fonts">Create Employee</h1>
          </div>
          <br></br>
          <FormComponent name="create" />
        </section>
      </main>
    </>
  );
};

export default CreateEmployee;

import "./employee.css";
import FormComponent from "./components/FormComponent";

const CreateEmployee = () => {
  return (
    //<body className="body__style2">
    <>
      <main className="main__class">
        <section>
          <div className="main__heading">
            <h1 className="fonts">Create Employee</h1>
          </div>
          <br></br>
          <FormComponent name="create"/>
        </section>
      </main>
    </>
    // </body>
  );
};

export default CreateEmployee;

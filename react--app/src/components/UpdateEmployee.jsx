import "../employee.css";
import FormComponent from "./FormComponent";
import { useParams } from "react-router-dom";

const UpdateEmployee = () => {
  let { id } = useParams();
  return (
    <>
      <main className="main__class">
        <section>
          <div className="main__heading  margintop">
            <h1 className="fonts">Update Employee</h1>
          </div>
          <br />
          <FormComponent name="edit" id={id} />
        </section>
      </main>
    </>
  );
};

export default UpdateEmployee;

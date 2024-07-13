import "../modal.css";

const Modal = ({ open, onClose, employee }) => {
  if (!open) return null;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={onClose} className="modal__cross">
          X
        </button>
        <div className="title">
          <h1>Are you sure?</h1>
        </div>
        <div className="body">
          <p>
            Do you really want to delete <br></br>employee?
          </p>
        </div>
        <div className="footer">
          <button className="button1 button__employee popup" onClick={onClose}>
            Confirm
          </button>
          <button
            className="button2 button__employee popup"
            onClick={() => {
              console.log(`Delete ${employee.id}`);
              onClose();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

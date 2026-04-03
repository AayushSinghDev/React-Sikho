import { MdDeleteForever } from "react-icons/md";
function Todoitem({ item, handelOnDelete }) {
  return (
    <>
      <div className="container">
        <div className="row kgRow">
          <div className="col-5">{item.todoname}</div>
          <div className="col-5">{item.tododate}</div>
          <div className="col-2">
            <button
              className="btn btn-danger kgButton"
              onClick={() => handelOnDelete(item.todoname)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem;

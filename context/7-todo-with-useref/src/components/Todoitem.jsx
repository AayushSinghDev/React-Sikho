import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { todoitemcontext } from "../store/todo-item-store";
function Todoitem({ item }) {
  const { deleteTodo } = useContext(todoitemcontext);
  return (
    <>
      <div className="container">
        <div className="row kgRow">
          <div className="col-5">{item.todoname}</div>
          <div className="col-5">{item.tododate}</div>
          <div className="col-2">
            <button
              className="btn btn-danger kgButton"
              onClick={() => deleteTodo(item.todoname)}
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

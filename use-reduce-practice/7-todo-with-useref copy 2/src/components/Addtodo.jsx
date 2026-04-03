import { useContext, useRef } from "react";
import { MdAddReaction } from "react-icons/md";
import { todoItemContext } from "../store/Store-Add-Todo";
function Addtodo() {
  const todoname = useRef("");
  const tododate = useRef("");
  const { addItem } = useContext(todoItemContext);

  const handelonadd = () => {
    event.preventDefault();
    let addname = todoname.current.value;
    let adddate = tododate.current.value;
    addItem(addname, adddate);

    todoname.current.value = "";
    tododate.current.value = "";
  };
  return (
    <>
      <form onSubmit={() => handelonadd()} className="container ">
        <div className="row kgRow">
          <div className="col-5">
            <input type="text" ref={todoname} />
          </div>
          <div className="col-5">
            <input type="date" ref={tododate} />
          </div>
          <div className="col-2">
            <button className="btn btn-success kgButton">
              <MdAddReaction />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Addtodo;

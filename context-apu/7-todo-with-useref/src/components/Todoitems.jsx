import { useContext } from "react";
import Todoitem from "./Todoitem";
import { todoContext } from "../store/todo-context-api";
function Todoitems() {
  const { tododata } = useContext(todoContext);
  return (
    <>
      <div className="itemContener">
        {tododata.map((item, index) => (
          <Todoitem item={item} key={index}></Todoitem>
        ))}
      </div>
    </>
  );
}

export default Todoitems;

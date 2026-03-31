import Todoitem from "./Todoitem";
import { todoItemContext } from "../store/todo-item-store";
import { useContext } from "react";
function Todoitems() {
  let { tododata } = useContext(todoItemContext);
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

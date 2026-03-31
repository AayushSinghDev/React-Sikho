import { todoitemcontext } from "../store/todo-item-store";
import Todoitem from "./Todoitem";
import { useContext } from "react";
function Todoitems() {
  const { tododata } = useContext(todoitemcontext);
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

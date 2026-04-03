import { useContext } from "react";
import Todoitem from "./Todoitem";
import { todoItemContext } from "../store/Store-Item-Todo";
function Todoitems() {
  const { tododata } = useContext(todoItemContext);
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

import { todoitemcontext } from "../store/todo-item-store";
import { useContext } from "react";
const ErrorMsg = () => {
  const { tododata } = useContext(todoitemcontext);

  return tododata.length === 0 && <h3>Enjoy Your Day !</h3>;
};

export default ErrorMsg;

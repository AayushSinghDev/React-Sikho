import { useContext } from "react";
import { todoContext } from "../store/todo-context-api";

const ErrorMsg = () => {
  const { tododata } = useContext(todoContext);
  return tododata.length === 0 && <h3>Enjoy Your Day !</h3>;
};

export default ErrorMsg;
